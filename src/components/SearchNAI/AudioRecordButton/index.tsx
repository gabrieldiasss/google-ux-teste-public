import { ActionIcon } from '@/components/ActionIcon';
import React, { useState, useEffect } from 'react';

export function AudioRecordButton({
  setInputValue,
  listeningInMs,
  setListeningInMs,
}: {
  listeningInMs: number | undefined;
  setListeningInMs: (value: number | undefined) => void;
  setInputValue: (value: string) => void;
}) {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    let interval = null;

    if (listeningInMs !== undefined && listeningInMs >= 0) {
      interval = setInterval(() => {
        setListeningInMs((prev: number | undefined) =>
          prev !== undefined ? prev + 1 : prev,
        );
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [listeningInMs]);

  const handleStartRecording = () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Your browser does not support audio recording');
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (event) => {
          console.log('Data available:', event.data); // Log the data to check
          if (event.data.size > 0) {
            setAudioChunks((prev) => [...prev, event.data]);
          }
        };

        recorder.onstop = () => {
          console.log('Recording stopped');
          if (audioChunks.length > 0) {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            console.log('Audio Blob created:', audioBlob); // Log the Blob to check
            const audioObjectUrl = URL.createObjectURL(audioBlob);
            setAudioUrl(audioObjectUrl);
            setInputValue('Audio recorded successfully!');
          } else {
            setInputValue('No audio data available');
          }
        };

        recorder.start();
        setMediaRecorder(recorder);
        setIsRecording(true);
        setListeningInMs(0);
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleDownload = () => {
    if (audioUrl) {
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = 'recorded_audio.wav'; // Change if needed
      link.click();
    }
  };

  return (
    <div>
      <ActionIcon
        icon="mic"
        size="xs"
        variant={isRecording ? 'outline' : 'filled'}
        onClick={isRecording ? handleStopRecording : handleStartRecording}
      />
      {audioUrl && (
        <div>
          <audio controls>
            <source src={audioUrl} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <button onClick={handleDownload}>Download Audio</button>
        </div>
      )}
    </div>
  );
}
