export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface PetalConfig {
  id: number;
  left: string;
  animationDuration: string;
  delay: string;
  opacity: number;
  size: number;
}