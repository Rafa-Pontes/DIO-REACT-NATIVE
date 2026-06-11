import React, { useState } from 'react'; 
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style'; 
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatInput } from '../../components/BatInput/BatInput';
import { BatButton } from '../../components/BatButton/BatButton'; 

export default function Home() {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    let generateToken = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
    let charLength = characters.length;

    for (let i = 0; i < 8; i++) {
        generateToken += characters.charAt(Math.floor(Math.random() * charLength));
    }
    setPass(generateToken);
  }

  return (
    <View style={styles.container}>

      <View style={styles.LogoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>
        <BatInput pass={pass} />
        <BatButton onPress={handleGenerateButton} />
      </View>

      <StatusBar style="light" />
    </View>
  );
}