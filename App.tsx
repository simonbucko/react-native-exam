import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation/Navigation';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Teko_300Light,
  Teko_400Regular,
  Teko_500Medium,
  Teko_600SemiBold,
  Teko_700Bold,
} from '@expo-google-fonts/teko';
import store from './store';


export default function App() {
  let [fontsLoaded] = useFonts({
    Teko_300Light,
    Teko_400Regular,
    Teko_500Medium,
    Teko_600SemiBold,
    Teko_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
  
}

