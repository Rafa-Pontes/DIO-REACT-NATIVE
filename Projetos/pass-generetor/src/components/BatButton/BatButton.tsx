import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './BatButtonStyle';

interface BatButtonProps {
  onPress: () => void;
}

export function BatButton(props: BatButtonProps) {
  return (
    <View style={styles.container}>
        
        <Pressable 
            onPress={props.onPress}
            style={styles.button}
        >
            <Text style={styles.text}>GENERATE PASS</Text>
        </Pressable>
    </View>
  );
}