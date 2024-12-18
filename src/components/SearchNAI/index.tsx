import React, { useRef, useState } from 'react';
import { useColorScheme } from '@/providers';
import {
  inputStyle,
  inputWrapperColorSchemeStyle,
  inputWrapperStyle,
  placeholderHighlightStyle,
  placeholderTextAudioStyle,
  placeholderTextStyle,
  placeholderWrapperStyle,
} from './searchNAI.css';
import clsx from 'clsx';
import { SendMessageAndAudioRecordButton } from './SendMessageAndAudioRecordButton';
import { MenuButton, MenuButtonProps } from './MenuButton';
import { Textarea } from '@headlessui/react';

export interface SearchNAIProps
  extends Omit<MenuButtonProps, 'renderPosition' | 'setInputValue'> {
  isNaiTyping?: boolean;

  onInputChange?: (value: string) => void;
  onSendMessage?: (message: string) => void;
  onAudioRecorded?: (audioObjectUrl: string) => void;
  historyData?: {
    id: string;
    title: string;
    date: Date;
  }[];
  renderMenuPosition?: 'top' | 'bottom';
  onUploadFile?: (file: File) => void;
}

export const SearchNAI: React.FC<SearchNAIProps> = ({
  isNaiTyping,
  isFileLoaded,
  onUploadFile,
  onSendMessage,
  onAudioRecorded,
  onClickAddNewChat,
  onClickChatHistory,
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
          setInputValue={setInputValue}
          historyData={historyData}
          onUploadFile={onUploadFile}
          isFileLoaded={isFileLoaded}
          onClickAddNewChat={onClickAddNewChat}
          onClickChatHistory={onClickChatHistory}
        />
        <div className={placeholderWrapperStyle}>
          <Textarea
            ref={inputRef}
            className={clsx(inputStyle)}
            placeholder=" "
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleInputChange}
            value={inputValue}
          />

          {listeningInSeconds !== undefined ? (
            <span
              className={clsx(placeholderTextStyle, placeholderTextAudioStyle)}
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

        <SendMessageAndAudioRecordButton
          disabled={isNaiTyping}
          onSendMessage={onSendMessage}
          inputValue={inputValue}
          onAudioRecorded={onAudioRecorded}
          setListeningInSeconds={setListeningInSeconds}
          listeningInSeconds={listeningInSeconds}
          setInputValue={setInputValue}
        />
      </div>
    </>
  );
};

SearchNAI.displayName = 'SearchNAI';
