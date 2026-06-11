import { View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";

export default function HomeScreen({ navigation } :any) {
  function navGallery() {
    navigation.navigate('Gallery')
  }
  return (
    <View style={styles.container}>
      
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.mainImage}
      />

      <Text style={styles.title}>Bem-vindo ao App!</Text>

      {/* Container de Botões Organizado */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton]} 
          onPress={navGallery}
        >
          <Text style={styles.buttonText}>Galeria</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]} 
          onPress={() => alert('Configurações')}
        >
          <Text style={styles.buttonText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#323232",
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#007bfe',
        padding: 15,
        borderRadius: 10,
        flex: 1,
        alignItems: "center",
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    mainImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60, // Metade da largura/altura faz um círculo perfeito
  },
  buttonContainer: {
    flexDirection: 'row', // Botões um do lado do outro
    gap: 10,              // Espaço de 10px entre eles
    marginTop: 20,
  },
  primaryButton: { backgroundColor: '#007bfe' },
  secondaryButton: { backgroundColor: '#6c757d' },
  
});
