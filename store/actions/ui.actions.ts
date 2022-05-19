import * as SecureStore from 'expo-secure-store';


export const ONBOARDING_FINISHED = 'ONBOARDING_FINISHED';

export const onboardingFinished = () => async (dispatch:any) => {
    SecureStore.setItemAsync("isOnboardingFinished","true")
    dispatch({ type: ONBOARDING_FINISHED })
}

