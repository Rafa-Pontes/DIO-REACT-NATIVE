import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import img from './assets/favicon.png';

function CaixaRed() {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        alignSelf: 'flex-start',
        backgroundColor: 'red',
      }}
    />
  );
}

function CaixaBlue() {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        alignSelf: 'center',
        backgroundColor: '#0066ff',
      }}
    />
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      
      
      <View style={styles.boxContainer}>
        <CaixaRed />
        <CaixaBlue />
      </View>

      <StatusBar style="light" />

      <Image
        source={img}
        style={{ width: 43, height: 43 }}
      />

      <View
        onTouchStart={() => Alert.alert('Evento começou')}
        onTouchEnd={() => Alert.alert('Evento terminou')}
      >
        <Text selectable style={styles.texto}>
          oii
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  boxContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },

  texto: {
    borderRadius: 10,
    padding: 20,
    color: '#9b3232',
    fontSize: 20,
    backgroundColor: '#25252533',
  },
});
