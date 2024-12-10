import React, { useRef, useState } from 'react';
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
import { MenuButton } from './MenuButton';
type SearchNAIProps = {
  onFileUpload: (file: File) => void;
  onEmojiSelect: (emoji: string) => void;
  onInputChange?: (value: string) => void;
  historyData?: {
    id: string;
    title: string;
    date: Date;
  }[];
  onHistoryClick?: (id: string) => void;
  renderMenuPosition?: 'top' | 'bottom';
};
export const SearchNAI: React.FC<SearchNAIProps> = ({
  onFileUpload,
  onEmojiSelect,
  onInputChange,
  renderMenuPosition,
}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [listeningInSeconds, setListeningInSeconds] = useState<
    number | undefined
  >(undefined);

  const { colorScheme } = useColorScheme();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange?.(value);
  };
  const listeningTimeRender = `${Math.floor((listeningInSeconds || 0) / 60)
    .toString()
    .padStart(
      2,
      '0',
    )}:${((listeningInSeconds || 0) % 60).toString().padStart(2, '0')}`;

  return (
    <>
      <div
        className={clsx(
          inputWrapperStyle,
          inputWrapperColorSchemeStyle[colorScheme],
        )}
      >
        <AudioRecordButton
          onAudioRecorded={(audioObjectUrl) => {}}
          setListeningInSeconds={setListeningInSeconds}
          listeningInSeconds={listeningInSeconds}
          setInputValue={setInputValue}
        />
        <div className={placeholderWrapperStyle}>
          <input
            ref={inputRef}
            className={clsx(inputStyle)}
            placeholder=" "
            value={inputValue}
            onChange={handleInputChange}
          />

          {listeningInSeconds !== undefined ? (
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

        <MenuButton
          renderPosition={renderMenuPosition || 'top'}
          setInputValue={setInputValue}
        />
      </div>
    </>
  );
};
