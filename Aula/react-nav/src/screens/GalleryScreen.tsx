import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,} from "react-native";

export default function GalleryScreen({ navigation }: any) {
  // Dados fictícios para nossa galeria
  const photos = [
    { id: '1', color: '#fba020', label: 'Pôr do Sol' },
    { id: '2', color: '#A52A2A', label: 'Montanhas' },
    { id: '3', color: '#3357ff', label: 'Oceano' },
    { id: '4', color: '#129700', label: 'Floresta' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bem-vindo à sua Galeria!</Text>

      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        numColumns={2} // Transforma em grade (grid)
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: item.color }]}>
            <Text style={styles.cardText}>{item.label}</Text>
          </View>
        )}
      />

      
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    flex: 1,
    height: 150,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra no Android
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontWeight: '600',
  }
});