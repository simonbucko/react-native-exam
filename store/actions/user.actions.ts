import * as SecureStore from 'expo-secure-store';
import { FirebaseSignupSuccess } from "../../entities/FirebaseSignupSuccess";
import { FirebaseLoginSuccess } from "../../entities/FirebaseLoginSuccess";
import { User } from '../../entities/User';
import { WEB_API_KEY } from '../../variables';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const REHYDRATE_USER = 'REHYDRATE_USER';
export const LOGOUT = 'LOGOUT';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const rehydrateUser = (user: User, idToken: string) => {
    return { type: REHYDRATE_USER, payload: { user, idToken } }
}

export const logout = () => {
    SecureStore.deleteItemAsync('idToken');
    SecureStore.deleteItemAsync('user');
    return { type: LOGOUT }
}

export const clearErrors = () => {
    return { type: CLEAR_ERRORS }
}

export const signup = (email: string, password: string) => {
    return async (dispatch: any, getState: any) => {
        //const token = getState().user.token; // if you have a reducer named user(from combineReducers) with a token variable​
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${WEB_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        if (!response.ok) {
            const data:any = await response.json();
            console.log(data)
            let errorMessage;
            switch(data.error.message){
                case 'INVALID_EMAIL':
                    errorMessage = "Invalid email"
                    break;
                case 'MISSING_PASSWORD':
                    errorMessage = "Missing password"
                    break;
                case 'WEAK_PASSWORD : Password should be at least 6 characters':
                    errorMessage = "Password should be at least 6 characters"
                    break;
                default:

            }
            dispatch({type: SIGNUP_FAILED, payload: errorMessage})
        } else {
            const data: FirebaseSignupSuccess = await response.json(); 

            const user = new User(data.email, '', '');

            await SecureStore.setItemAsync('idToken', data.idToken);
            await SecureStore.setItemAsync('user', JSON.stringify(user)); 

            dispatch({ type: SIGNUP, payload: { user, idToken: data.idToken } })
            dispatch(clearErrors());
        }
    };
};

export const login = (email: string, password: string) => {
    return async (dispatch: any, getState: any) => {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${WEB_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        if (!response.ok) {
            console.log("there was a problem")
            //There was a problem..
            //dispatch({type: SIGNUP_FAILED, payload: 'something'})
        } else {
            const data: FirebaseLoginSuccess = await response.json(); 

            const user = new User(data.email, '', '');

            await SecureStore.setItemAsync('idToken', data.idToken);
            await SecureStore.setItemAsync('user', JSON.stringify(user)); 

            dispatch({ type: LOGIN, payload: { user, idToken: data.idToken } })
        }
    };
};
