export interface VideoPlayerProps {
  media: { uri: string, type: 'photo' | 'video' } | undefined;
  onShare: () => void;
  onSave: () => void;
  onDiscard: () => void;
}