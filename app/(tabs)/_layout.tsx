import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: 0 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#41dc8e', // Active icon and text color
        tabBarInactiveTintColor: 'white', // Inactive icon and text color
        tabBarStyle: {
          backgroundColor: '#353839', // Background color of the tab bar
          paddingVertical: 10, // Padding between the top and bottom of the tab 
          height: 70, // Height of the tab bar
          paddingBottom: 10, // Space below the tab bar
        },
        tabBarLabelStyle: {
          marginTop: 5, // Space between the icon and text
          fontSize: 12, // Font size of the text
          marginBottom: 5, // Additional margin at the bottom of the text if needed
        },
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
       
      <Tabs.Screen
        name="list"
        options={{
          title: 'Lists',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />

      <Tabs.Screen
        name="scanandwin"
        options={{
          title: 'Scan & Win',
          tabBarIcon: ({ color }) => <TabBarIcon name="qrcode" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
