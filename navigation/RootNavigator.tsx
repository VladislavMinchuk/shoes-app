import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/ProductScreen";
import type { RootStackParamList } from './types';
import TabNavigator from "./TabNavigator";
import { withLayout } from "../components/WithLayout";
import ProductListScreen from "../screens/ProductListScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ProductList" component={withLayout(ProductListScreen)} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={withLayout(ProductScreen)} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
