// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreens';
import FormScreen from './screens/FormScreen';

// Definindo os tipos da rotas
export type RootStackParamList = {
  Home: undefined;
  Form: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Esconde o cabeçalho na Home para ficar igual ao mockup
        />
        <Stack.Screen 
          name="Form" 
          component={FormScreen} 
          options={{ title: 'Chamado' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}