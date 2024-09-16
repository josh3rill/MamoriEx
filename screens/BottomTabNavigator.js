import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen.js';
import ProductsScreen from './ProductsScreen.js';
import ListsScreen from './ListsScreen.js';
import ScanAndProfileScreen from './ScanAndProfileScreen.js';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Lists" component={ListsScreen} />
      <Tab.Screen name="Scan & Profile" component={ScanAndProfileScreen} />
    </Tab.Navigator>
  );
}
