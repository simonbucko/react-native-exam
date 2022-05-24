import { User } from "../../entities/User";
import { LOGOUT, REHYDRATE_USER, SIGNUP, LOGIN, SIGNUP_FAILED, CLEAR_ERRORS, LOGIN_FAILED, UPDATE_USER } from "../actions/user.actions";

interface ReduxState {
    loggedInUser: User | null,
    idToken: string | undefined,
    signupError: string | null,
    loginError: string | null
}

const initialState: ReduxState = {
    loggedInUser: null,
    idToken: undefined,
    signupError: null,
    loginError: null,
}

const userReducer = (state: ReduxState = initialState, action: any) => {
    switch (action.type) {
        case LOGOUT:
            return { ...state, loggedInUser: null, idToken: undefined }
        case UPDATE_USER:
            return { ...state, loggedInUser: action.payload }
        case REHYDRATE_USER:
            return { ...state, loggedInUser: action.payload.user, idToken: action.payload.idToken }
        case SIGNUP:
            return { ...state, loggedInUser: action.payload.user, idToken: action.payload.idToken }
        case LOGIN:
            return { ...state, loggedInUser: action.payload.user, idToken: action.payload.idToken }
        case SIGNUP_FAILED:
            return { ...state, signupError: action.payload }
        case LOGIN_FAILED:
            return { ...state, loginError: action.payload }
        case CLEAR_ERRORS:
            return { ...state, signupError: null, loginError: null }
        default:
            return state;
    }
};

export default userReducer;