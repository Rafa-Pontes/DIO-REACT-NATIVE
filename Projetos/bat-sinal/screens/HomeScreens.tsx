// screens/HomeScreen.tsx
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; 

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Batman_logo.png' }} // Exemplo de logo, ou use require('../assets/logo.png')
        style={styles.logo}
        resizeMode="contain"
      />
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Form')}
      >
        <Text style={styles.buttonText}>ACTIVATE BAT SIGNAL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Cinza claro como no mockup
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});