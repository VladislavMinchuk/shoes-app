import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CategoryScreen from '../screens/CategoryScreen';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { THEME } from '../const';
import { withLayout } from '../components/withLayout';

const Tab = createBottomTabNavigator<TabParamList>();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    elevation: 0,
    height: 70,
  }
};

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={withLayout(HomeScreen)} options={{
        tabBarIcon: ({ focused }) => {
          return <Ionicons name='home'
          size={24}
          color={focused ? THEME.secondaryColor : THEME.primaryColor } />
        }
      }} />
      <Tab.Screen name="Category" component={withLayout(CategoryScreen)} options={{
        tabBarIcon: ({ focused }) => {
          return <MaterialCommunityIcons name="shoe-heel"
          size={24}
          color={focused ? THEME.secondaryColor : THEME.primaryColor} />
        }
      }} />
      <Tab.Screen name="Cart" component={withLayout(CartScreen)} options={{
        tabBarIcon: ({ focused }) => {
          return <MaterialCommunityIcons name="cart-variant"
          size={24}
          color={focused ? THEME.secondaryColor : THEME.primaryColor} />
        }
      }} />
    </Tab.Navigator>
  );
}
