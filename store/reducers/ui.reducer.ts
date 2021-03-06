import { ONBOARDING_FINISHED } from "../actions/ui.actions";

interface ReduxState {
    isOnboardingFinished: boolean
}

const initialState: ReduxState = {
    isOnboardingFinished: true
}

const uiREducer = (state: ReduxState = initialState, action: any) => {
    switch (action.type) {
        case ONBOARDING_FINISHED:
            return { ...state, isOnBoardingFinished: true }
        default:
            return state;
    }
};

export default uiREducer;