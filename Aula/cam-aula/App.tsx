import { StyleSheet, View } from 'react-native';
import CustomCamera from './src/components//index';
export default function App() {
  return (
    <View style={styles.container}>
      <CustomCamera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // O fundo preto é o padrão ideal para telas de câmera
    backgroundColor: '#000', 
  },
});