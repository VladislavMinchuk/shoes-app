import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '🏠 Головна' }} />
      <Tab.Screen name="Category" component={CategoryScreen} options={{ title: '👤 Категорії' }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ title: '🛒 Кошик' }} />
    </Tab.Navigator>
  );
}
