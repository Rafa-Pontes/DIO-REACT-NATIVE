import { useState, useRef , useEffect,} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() =>  {
    if(count === 0){
      Alert.alert("Carrinho", "Seu carrinho está vazio")
    }
  }, [count])
  
  const stopCounting = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const startIncrementing = () => {
    // 1. Executa a ação imediatamente (para contar como um clique simples)
    setCount(prev => prev + 1);

    // 2. Inicia o intervalo após um pequeno delay (opcional, para sensação de UX melhor) ou imediatamente
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 100) 
  }

  const startDecrementing = () => {
    // 1. Executa imediatamente com verificação
    setCount(prev => (prev > 0 ? prev - 1 : 0));

    // 2. Inicia o intervalo
    intervalRef.current = setInterval(() => {
      setCount(prevCount => {
        if (prevCount <= 0) {
          stopCounting();
          return 0;
        }
        return prevCount - 1;
      });
    }, 100); 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      
      <View style={styles.buttonContainer}>
        
        <TouchableOpacity 
          onPressIn={startDecrementing} 
          onPressOut={stopCounting}
          activeOpacity={0.7}
          style={[styles.button, styles.removeButton]}
        >
          <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPressIn={startIncrementing}
          onPressOut={stopCounting} 
          activeOpacity={0.7}
          style={[styles.button, styles.addButton]}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f5f5f5'
  },
  countText: {
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000000'
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10
  },
  button: {
    padding: 20,
    borderRadius: 15,
    minWidth: 130,
    alignItems: 'center'
  },
  addButton: {
    backgroundColor: '#007bfe',
  },
  removeButton: {
    backgroundColor: '#f11105',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500'
  }
});