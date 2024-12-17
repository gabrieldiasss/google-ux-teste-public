import { ActionIcon } from '@/components/ActionIcon';
import React, { useState, useEffect, useRef } from 'react';

export function SendMessageAndAudioRecordButton({
  disabled,
  listeningInSeconds,
  setListeningInSeconds,
  onAudioRecorded,
  inputValue,
  setInputValue,
  onSendMessage,
}: {
  disabled?: boolean;
  listeningInSeconds: number | undefined;
  setListeningInSeconds: (value: number | undefined) => void;
  onAudioRecorded?: (audioObjectUrl: string) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSendMessage?: (message: string) => void;
}) {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    let interval = null;

    if (listeningInSeconds !== undefined && listeningInSeconds >= 0) {
      interval = setInterval(() => {
        // @ts-ignore
        setListeningInSeconds((prev) => {
          return prev !== undefined ? prev + 1 : 0;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [listeningInSeconds, setListeningInSeconds]);

  const handleStartRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Seu navegador não suporta gravação de áudio.');
      return;
    }

    try {
      setInputValue('');
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);

      audioChunksRef.current = []; // Resetar os chunks antes de iniciar

      recorder.ondataavailable = (event) => {
        console.log('Dados disponíveis:', event.data);
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        console.log('Gravação interrompida');
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/wav',
        });
        console.log('Blob de áudio criado:', audioBlob);
        const audioObjectUrl = URL.createObjectURL(audioBlob);
        onAudioRecorded?.(audioObjectUrl);
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
      setListeningInSeconds(0);
    } catch (error) {
      console.error('Erro ao acessar dispositivos de mídia:', error);
    }
  };

  const handleStopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== 'inactive'
    ) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setListeningInSeconds(undefined);

      // Parar todas as tracks do stream para liberar recursos
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  return (
    <div>
      <ActionIcon
        disabled={disabled}
        icon={inputValue?.length > 0 ? 'send' : 'mic'}
        size="xs"
        variant={isRecording ? 'filled' : 'light'}
        onClick={() => {
          if (inputValue?.length > 0) {
            onSendMessage?.(inputValue);
            setInputValue('');
          } else if (isRecording) {
            handleStopRecording();
          } else {
            handleStartRecording();
          }
        }}
      />
    </div>
  );
}
