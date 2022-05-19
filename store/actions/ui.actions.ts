import * as SecureStore from 'expo-secure-store';


export const ONBOARDING_FINISHED = 'ONBOARDING_FINISHED';



export const onboardingFinished = () => {
    const bla = SecureStore.getItemAsync("haha")
    console.log(bla)
    return { type: ONBOARDING_FINISHED }
}

