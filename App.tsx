import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RootNavigator from "./navigation/RootNavigator";
/// <reference types="nativewind/types" />

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
