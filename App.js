import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './app/routes/Routes';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
      'coolvetica': require('./assets/fonts/coolvetica.ttf'),
  });

  if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <>
          <StatusBar style="light" />
          <Routes />
        </>
      );
  }
}