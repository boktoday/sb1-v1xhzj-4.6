import React from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  description: string;
  audioUrl: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, description, audioUrl }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
      <button
        onClick={togglePlay}
        className="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
      >
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </button>
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
    </div>
  );
};