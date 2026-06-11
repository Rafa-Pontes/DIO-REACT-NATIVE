import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, Image } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

import { VideoPlayerProps } from "./props";
import { styles } from "./styles";

export default function VideoPlayer({ media, onShare, onSave, onDiscard }: VideoPlayerProps) {
  if (!media) return null;

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Verifica se é foto ou vídeo para mostrar o componente certo */}
      {media.type === 'photo' ? (
        <Image 
          source={{ uri: media.uri }} 
          style={styles.media} 
          resizeMode="cover" 
        />
      ) : (
        <Video
          style={styles.media}
          source={{ uri: media.uri }}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          isLooping
          shouldPlay
        />
      )}
      
      <TouchableOpacity style={styles.discardButton} onPress={onDiscard}>
        <Ionicons name="close" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={onSave}>
          <Ionicons name="download-outline" size={24} color="white" />
          <Text style={styles.actionText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.primaryButton]} onPress={onShare}>
          <Ionicons name="share-social" size={24} color="black" />
          <Text style={styles.primaryActionText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}