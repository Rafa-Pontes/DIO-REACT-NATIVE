import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Text, View, Button, TouchableOpacity, Image, Linking } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { CustomCameraProps } from './types';

export default function CustomCamera({ initialFacing = 'back' }: CustomCameraProps) {
  const [facing, setFacing] = useState<CameraType>(initialFacing);
  
  // 1. O nome da função alterado para o que você tentou usar
  const [permission, requestCameraPermission] = useCameraPermissions(); 
  
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView>(null);

  // --- NOVA FUNÇÃO INTELIGENTE DE PERMISSÃO ---
  async function handlePermission() {
    if (permission?.canAskAgain) {
      // O celular ainda deixa perguntar? Mostra o alerta nativo!
      await requestCameraPermission();
    } else {
      // O celular bloqueou? Manda o usuário para as configurações do celular!
      Linking.openSettings();
    }
  }

  if (!permission) return <View />;
  
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.message}>Precisamos da sua permissão para usar a câmera.</Text>
        {/* 2. O botão agora chama a nossa função de tratamento */}
        <Button onPress={handlePermission} title="Conceder Permissão" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (cameraRef.current) {
      const options = { quality: 1, base64: false };
      const capturedPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(capturedPhoto);
    }
  }

  if (photo) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: photo.uri }} style={styles.camera} />
        <TouchableOpacity style={styles.discardButton} onPress={() => setPhoto(null)}>
          <Text style={styles.discardText}>Descartar Foto</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ratio="16:9" ref={cameraRef} />

      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
          <MaterialIcons name="flip-camera-ios" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <View style={styles.captureInnerCircle} />
        </TouchableOpacity>

        <View style={{ width: 60 }} /> 
      </View>
    </View>
  );
}