import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation/Navigation';
import AppLoading from 'expo-app-loading';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
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

    const queryClient = new QueryClient()

    return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </Provider>
    )
  }
  
}

