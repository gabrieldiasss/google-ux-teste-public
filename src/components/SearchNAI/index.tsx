import React, { useRef, useState } from 'react';
import { useColorScheme } from '@/providers';
import {
  inputStyle,
  inputWrapperColorSchemeStyle,
  inputWrapperStyle,
  placeholderHighlightStyle,
  placeholderTextStyle,
  placeholderWrapperStyle,
} from './searchNAI.css';
import clsx from 'clsx';
import { SendMessageAndAudioRecordButton } from './SendMessageAndAudioRecordButton';
import { MenuButton } from './MenuButton';
import { Textarea } from '@headlessui/react';

export type SearchNAIProps = {
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
  historyData,
  onInputChange,
  renderMenuPosition,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false); // New state for focus
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [listeningInSeconds, setListeningInSeconds] = useState<
    number | undefined
  >(undefined);

  const { colorScheme } = useColorScheme();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (listeningInSeconds !== undefined) return;
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
        <MenuButton
          renderPosition={renderMenuPosition || 'top'}
          inputValue={inputValue}
          setInputValue={setInputValue}
          historyData={historyData}
        />
        <div className={placeholderWrapperStyle}>
          <Textarea
            ref={inputRef}
            className={clsx(inputStyle)}
            placeholder=" "
            onFocus={() => setIsFocused(true)} // Set focus state
            onBlur={() => setIsFocused(false)} // Reset focus state
            onChange={handleInputChange}
            value={inputValue}
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
            !isFocused &&
            inputValue.length === 0 && ( // Check isFocused state
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

        <SendMessageAndAudioRecordButton
          onSendMessage={() => {}}
          inputValue={inputValue}
          onAudioRecorded={(audioObjectUrl) => {}}
          setListeningInSeconds={setListeningInSeconds}
          listeningInSeconds={listeningInSeconds}
          setInputValue={setInputValue}
        />
      </div>
    </>
  );
};

SearchNAI.displayName = 'SearchNAI';
