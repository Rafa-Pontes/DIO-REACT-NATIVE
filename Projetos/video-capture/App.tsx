import { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Alert, ActivityIndicator } from "react-native";

import { useCameraPermissions, useMicrophonePermissions, CameraView as ExpoCameraView, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

import VideoPlayer from "./src/components/VideoPlayer";
import CameraView from "./src/components/CameraView";

export default function App() {
  const cameraRef = useRef<ExpoCameraView | null>(null);
  
  // Usamos um Ref para controle instantâneo de gravação e evitar conflitos entre toque/clique
  const isRecordingRef = useRef(false);
  
  // Estados da Aplicação
  const [isRecording, setIsRecording] = useState(false);
  
  // O estado 'media' agora armazena tanto a URI quanto o TIPO (foto ou vídeo)
  const [media, setMedia] = useState<{ uri: string, type: 'photo' | 'video' } | undefined>();
  const [facing, setFacing] = useState<CameraType>('back');
  const [flashMode, setFlashMode] = useState(false); 

  // Permissões
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [micPermission, requestMicPermission] = useMicrophonePermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    (async () => {
      if (!cameraPermission?.granted) await requestCameraPermission();
      if (!micPermission?.granted) await requestMicPermission();
      if (!mediaPermission?.granted) await requestMediaPermission();
    })();
  }, []);

  if (!cameraPermission || !micPermission) {
    return <View style={styles.center}><ActivityIndicator size="large" color="white" /></View>;
  }

  if (!cameraPermission.granted || !micPermission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Permissão de Câmera e Microfone são obrigatórias.</Text>
      </View>
    );
  }

  const toggleCamera = () => setFacing(current => (current === 'back' ? 'front' : 'back'));
  
  const toggleFlash = () => {
    if (facing === 'back') {
      setFlashMode(!flashMode);
    } else {
      Alert.alert("Aviso", "O flash só está disponível na câmera traseira.");
    }
  };

  // Função disparada ao dar um toque rápido (Tirar Foto)
  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        if (photo) {
          setMedia({ uri: photo.uri, type: 'photo' });
        }
      } catch (error) {
        console.error("Erro ao tirar foto:", error);
      }
    }
  };

  // Função disparada ao segurar o botão (Gravar Vídeo)
  const recordVideo = async () => {
    if (cameraRef.current) {
      try {
        isRecordingRef.current = true;
        setIsRecording(true);
        const recordedVideo = await cameraRef.current.recordAsync({
          maxDuration: 60, 
        });
        if (recordedVideo) {
          setMedia({ uri: recordedVideo.uri, type: 'video' });
        }
      } catch (error) {
        console.error("Erro ao gravar:", error);
      } finally {
        isRecordingRef.current = false;
        setIsRecording(false);
        setFlashMode(false);
      }
    }
  };

  // Função disparada assim que o usuário tira o dedo do botão
  const stopRecording = () => {
    // Só manda parar de gravar se realmente estiver gravando
    if (isRecordingRef.current && cameraRef.current) {
      cameraRef.current.stopRecording();
      isRecordingRef.current = false;
      setIsRecording(false);
      setFlashMode(false);
    }
  };

  if (media) {
    const saveMedia = async () => {
      if (mediaPermission?.granted) {
        try {
          await MediaLibrary.saveToLibraryAsync(media.uri);
          Alert.alert("Sucesso!", `${media.type === 'photo' ? 'Foto salva' : 'Vídeo salvo'} na galeria!`);
        } catch (error) {
          Alert.alert("Erro", "Não foi possível salvar na galeria.");
        }
      } else {
        requestMediaPermission();
      }
    };

    const shareMedia = async () => await shareAsync(media.uri);
    const discardMedia = () => setMedia(undefined);

    return (
      <VideoPlayer
        media={media}
        onShare={shareMedia}
        onSave={saveMedia}
        onDiscard={discardMedia}
      />
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        cameraRef={cameraRef}
        isRecording={isRecording}
        facing={facing}
        flashMode={flashMode}
        onToggleCamera={toggleCamera}
        onToggleFlash={toggleFlash}
        onTakePicture={takePicture}
        onRecord={recordVideo}
        onStopRecording={stopRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  center: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  errorText: { color: "white", textAlign: "center", padding: 20, fontSize: 16 }
});