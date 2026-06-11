import React from "react";
import { TouchableOpacity, View } from "react-native";
import { CameraView as ExpoCameraView } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

import { CameraViewProps } from "./props";
import { styles } from "./styles";

export default function CameraView({
  cameraRef,
  isRecording,
  facing,
  flashMode,
  onToggleCamera,
  onToggleFlash,
  onTakePicture,
  onRecord,
  onStopRecording,
}: CameraViewProps) {
  return (
    <ExpoCameraView 
      style={styles.container} 
      ref={cameraRef} 
      facing={facing}
      mode="video"
      enableTorch={flashMode}
    >
      <View style={styles.overlay}>
        
        {/* Controles Superiores: Apenas o Flash ficou no topo */}
        <View style={styles.topControls}>
          {!isRecording ? (
            <TouchableOpacity onPress={onToggleFlash} style={styles.iconButton}>
              <Ionicons name={flashMode ? "flash" : "flash-off"} size={26} color="white" />
            </TouchableOpacity>
          ) : <View />}
        </View>

        {/* Controles Inferiores */}
        <View style={styles.bottomControls}>
          
          {/* Espaçador invisível à esquerda para centralizar o botão do meio */}
          <View style={styles.spacer} />

          {/* Botão de Gravação / Foto inteligente */}
          <TouchableOpacity
            onPress={onTakePicture} // Se der só um clique rápido
            onLongPress={onRecord}  // Se segurar
            onPressOut={onStopRecording} // Ao soltar o dedo, independente do tempo
            delayLongPress={300} // Determina que 300ms já conta como "segurar"
            style={[styles.recordButton, isRecording && styles.recordingActive]}
            activeOpacity={0.8}
          >
            {isRecording && <View style={styles.recordingSquare} />}
          </TouchableOpacity>

          {/* Botão de Virar Câmera à direita */}
          {!isRecording ? (
            <TouchableOpacity onPress={onToggleCamera} style={styles.iconButtonBottom}>
              <Ionicons name="camera-reverse" size={26} color="white" />
            </TouchableOpacity>
          ) : <View style={styles.spacer} />}

        </View>
        
      </View>
    </ExpoCameraView>
  );
}