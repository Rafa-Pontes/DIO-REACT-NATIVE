import React from "react";
import { CameraView as ExpoCameraView, CameraType } from "expo-camera";

export interface CameraViewProps {
  cameraRef: React.RefObject<ExpoCameraView | null>;
  isRecording: boolean;
  facing: CameraType;
  flashMode: boolean; 
  onToggleCamera: () => void;
  onToggleFlash: () => void;
  onTakePicture: () => void; 
  onRecord: () => void;
  onStopRecording: () => void;
}