import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ListsScreen from '../screens/ListsScreen';
import ScanAndProfileScreen from '../screens/ScanAndProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff', // Customize the background color of the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 12, // Customize the font size of the labels
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Lists" component={ListsScreen} />
      <Tab.Screen name="Scan & Profile" component={ScanAndProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
