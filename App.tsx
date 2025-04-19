import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RootNavigator from "./navigation/RootNavigator";
import Layout from "./layouts";
import { useLayoutHeaderAnimation } from "./hooks/useLayoutHeaderAnimation";
import { SafeAreaProvider } from "react-native-safe-area-context";
/// <reference types="nativewind/types" />

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
          <NavigationContainer>
            <Layout>
              <RootNavigator />
            </Layout>
          </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
