import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: '#007bfe',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          backgroundColor: '#fff', 
          height: 60,           
          paddingBottom: 8, 
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Gallery') {
            iconName = focused ? 'image-multiple' : 'image-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Início' }} 
      />
      <Tab.Screen 
        name="Gallery" 
        component={GalleryScreen} 
        options={{ title: 'Minha Galeria' }} 
      />
    </Tab.Navigator>
  );
}