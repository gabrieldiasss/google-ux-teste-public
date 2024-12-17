import { Icon } from '@/components/Icon';
import { themeTokens } from '@/core/themes/default.css';
import { useColorScheme } from '@/providers';
import WavesurferPlayer from '@wavesurfer/react';
import clsx from 'clsx';
import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import {
  fileRenderContent,
  fileRenderDescriptionColorSchemeStyle,
  fileRenderDescriptionStyle,
  fileRenderStyle,
  fileRenderIconStyle,
} from './fileRender.css';

import { ColorSchemeEnum } from '@/utils';
export const FileRender = ({
  type,
  file,
}: {
  file?: string;
  type: 'audio' | 'file';
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [waveInstance, setWaveInstance] = React.useState<WaveSurfer>();
  const [audioDuration, setAudioDuration] = React.useState<string>('00:00');

  const { colorScheme } = useColorScheme();

  const handleTogglePlay = () => {
    if (!waveInstance) return;
    if (isPlaying) {
      waveInstance.pause();
    } else {
      waveInstance.play();
    }
    setIsPlaying(!isPlaying);
  };

  const isAudio = type === 'audio';
  const handleReady = (wave: any) => {
    setWaveInstance(wave);

    // Get duration in seconds if wave instance provides it
    const duration = wave?.getDuration?.();
    if (duration) {
      setAudioDuration(formatDuration(duration));
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const fileExtension = file?.split('.').pop();
  console.log(waveInstance?.getDuration());
  return (
    <div className={fileRenderStyle}>
      <div
        className={fileRenderIconStyle}
        style={isAudio ? { cursor: 'pointer' } : {}}
        onClick={isAudio ? handleTogglePlay : undefined}
      >
        <Icon
          name={isAudio ? 'play_arrow' : 'attach_file'}
          size={18}
          color="white"
          fill={isAudio ? true : false}
        />
      </div>
      <div className={fileRenderContent}>
        {isAudio ? (
          <>
            <WavesurferPlayer
              progressColor={themeTokens.colors.primary[400]}
              height={20}
              waveColor={
                colorScheme === ColorSchemeEnum.Dark
                  ? themeTokens.colors.neutrals.dark[300]
                  : themeTokens.colors.neutrals.light[300]
              }
              url={file}
              barWidth={4}
              barGap={4}
              barRadius={100}
              cursorWidth={0}
              onReady={handleReady}
            />

            <span
              className={clsx(
                fileRenderDescriptionStyle,
                fileRenderDescriptionColorSchemeStyle[colorScheme],
              )}
            >
              {audioDuration}
            </span>
          </>
        ) : (
          <>
            <span>
              Nome do arquivo: <strong>{file}</strong>
            </span>
            <span
              className={clsx(
                fileRenderDescriptionStyle,
                fileRenderDescriptionColorSchemeStyle[colorScheme],
              )}
            >
              {fileExtension}
            </span>
          </>
        )}
      </div>
    </div>
  );
};
