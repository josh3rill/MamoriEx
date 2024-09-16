import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProductsScreen from './ProductsScreen';
import ListsScreen from './ListsScreen';
import ScanAndProfileScreen from './ScanAndProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Lists" component={ListsScreen} />
      <Tab.Screen name="Scan & Profile" component={ScanAndProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
