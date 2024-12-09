import React, { useRef, useState } from 'react';
import { ActionIcon } from '../ActionIcon';
import { useColorScheme } from '@/providers';
import {
  attachmentUploaderWrapperColorSchemeStyle,
  attachmentUploaderWrapperStyle,
  historyWrapperColorSchemeStyle,
  historyWrapperStyle,
  inputStyle,
  inputWrapperColorSchemeStyle,
  inputWrapperStyle,
  placeholderHighlightStyle,
  placeholderTextStyle,
  placeholderWrapperStyle,
} from './searchNAI.css';
import clsx from 'clsx';
import { AudioRecordButton } from './AudioRecordButton';
type SearchNAIProps = {
  onFileUpload: (file: File) => void;
  onEmojiSelect: (emoji: string) => void;
  onInputChange?: (value: string) => void;
};
export const SearchNAI: React.FC<SearchNAIProps> = ({
  onFileUpload,
  onEmojiSelect,
  onInputChange,
}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [listeningInMs, setListeningInMs] = useState<number | undefined>(
    undefined,
  );

  const { colorScheme } = useColorScheme();
  const menuItems = {
    dock_to_bottom: {
      icon: 'dock_to_bottom',
      label: 'dock_to_bottom',
      onClick: () => {},
    },
    attachment: {
      icon: 'attachment',
      label: 'attachment',
      onClick: () => {},
    },
    emoji: {
      icon: 'emoji',
      label: 'emoji',
      onClick: () => {},
    },
    settings: {
      icon: 'chat',
      label: 'chat',
      onClick: () => {},
    },
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange?.(value);
  };
  const listeningTimeRender = `${Math.floor((listeningInMs || 0) / 60)
    .toString()
    .padStart(
      2,
      '0',
    )}:${((listeningInMs || 0) % 60).toString().padStart(2, '0')}`;

  return (
    <>
      <div
        className={clsx(
          inputWrapperStyle,
          inputWrapperColorSchemeStyle[colorScheme],
        )}
      >
        <AudioRecordButton
          setInputValue={setInputValue}
          setListeningInMs={setListeningInMs}
          listeningInMs={listeningInMs}
        />
        <div className={placeholderWrapperStyle}>
          <input
            ref={inputRef}
            className={clsx(inputStyle)}
            placeholder=" "
            value={inputValue}
            onChange={handleInputChange}
          />

          {listeningInMs !== undefined ? (
            <span
              className={placeholderTextStyle}
              onClick={() => {
                inputRef.current?.focus();
              }}
            >
              <span className={placeholderHighlightStyle}>
                {listeningTimeRender}
              </span>
              {` `} Solte para enviar
            </span>
          ) : (
            inputValue.length === 0 && (
              <span
                className={placeholderTextStyle}
                onClick={() => {
                  inputRef.current?.focus();
                }}
              >
                Pergunte para a{' '}
                <span className={placeholderHighlightStyle}>NAI</span>
              </span>
            )
          )}
        </div>
        <ActionIcon icon="add" size="xs" />
      </div>
      <div
        className={clsx(
          attachmentUploaderWrapperStyle,
          attachmentUploaderWrapperColorSchemeStyle[colorScheme],
        )}
      ></div>
      <div
        className={clsx(
          historyWrapperStyle,
          historyWrapperColorSchemeStyle[colorScheme],
        )}
      ></div>
    </>
  );
};
