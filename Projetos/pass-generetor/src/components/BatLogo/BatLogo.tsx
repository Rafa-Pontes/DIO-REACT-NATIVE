import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/bat-logo.png';

export function BatLogo() {
  const animacao = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animacao, {
          toValue: 1.1,
          duration: 1000, // 1 segundo para aumentar
          useNativeDriver: true,
        }),
        Animated.timing(animacao, {
          toValue: 1,
          duration: 1000, // 1 segundo para diminuir
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={{ alignItems: 'center' }}> 
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      
      <Animated.Image 
        source={batLogo} 
        style={[
          styles.Img, 
          { transform: [{ scale: animacao }] } // Aplica a animação aqui
        ]}
      />
    </View>
  );
}