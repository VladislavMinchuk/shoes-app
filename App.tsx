import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RootNavigator from "./navigation/RootNavigator";
import Layout from "./layouts";
import { useLayoutHeaderAnimation } from "./hooks/useLayoutHeaderAnimation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  RobotoSerif_200ExtraLight,
  RobotoSerif_400Regular,
  RobotoSerif_700Bold
} from "@expo-google-fonts/roboto-serif";
import { GestureHandlerRootView } from "react-native-gesture-handler";
/// <reference types="nativewind/types" />

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSerif_200ExtraLight,
    RobotoSerif_400Regular,
    RobotoSerif_700Bold
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1, position: 'relative', backgroundColor: '#fff' }} edges={['top']}>
              <RootNavigator />
            </SafeAreaView>
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
}
