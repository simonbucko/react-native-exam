import { User } from "../../entities/User";
import { LOGOUT, REHYDRATE_USER, SIGNUP, LOGIN, SIGNUP_FAILED } from "../actions/user.actions";

interface ReduxState {
    loggedInUser: User | null,
    idToken: string | undefined,
    signupError: string | null
}

const initialState: ReduxState = {
    loggedInUser: null,
    idToken: undefined,
    signupError: null
}

const userReducer = (state: ReduxState = initialState, action: any) => {
    switch (action.type) {
        case LOGOUT:
            return { ...state, loggedInUser: null, idToken: undefined }
        case REHYDRATE_USER:
            return { ...state, loggedInUser: action.payload.user, idToken: action.payload.idToken }
        case SIGNUP:
            return { ...state, loggedInUser: action.payload.user, idToken: action.payload.idToken }
        case LOGIN:
            return { ...state, loggedInUser: action.payload.user, idToken: action.payload.idToken }
        case SIGNUP_FAILED:
            return { ...state, signupError: action.payload }
        default:
            return state;
    }
};

export default userReducer;