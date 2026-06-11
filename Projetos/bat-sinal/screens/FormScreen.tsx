// screens/FormScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

export default function FormScreen() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [obs, setObs] = useState('');

  const handleSend = () => {
    console.log({ nome, telefone, localizacao, obs });
    alert('Bat-Sinal Enviado com Sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>   
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Batman_logo.png' }}
        style={styles.miniLogo}
        resizeMode="contain"
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite seu nome" 
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite seu telefone" 
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
        />

        <Text style={styles.label}>Localização Atual</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Sua localização" 
          value={localizacao}
          onChangeText={setLocalizacao}
        />

        <Text style={styles.label}>Observação</Text>
        <TextInput 
          style={[styles.input, styles.textArea]} 
          placeholder="Detalhes do chamado..." 
          multiline
          numberOfLines={4}
          value={obs}
          onChangeText={setObs}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSend}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
  },
  miniLogo: {
    width: 60,
    height: 30,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});