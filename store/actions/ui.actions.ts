import * as SecureStore from 'expo-secure-store';


export const ONBOARDING_FINISHED = 'ONBOARDING_FINISHED';



export const onboardingFinished = () => async () => {
    SecureStore.setItemAsync("isOnboardingFinished","true")
    return { type: ONBOARDING_FINISHED }
}

