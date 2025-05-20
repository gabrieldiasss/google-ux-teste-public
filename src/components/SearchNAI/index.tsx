import React, { useEffect, useRef, useState } from 'react';
import { useColorScheme } from '@/providers';
import {
  buttonsWrapperStyle,
  globalWrapperStyle,
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
import { ActionIcon } from '../ActionIcon';

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
  shouldShowButtons?: boolean;
  onClickDashboardButton?: () => void;
  onClickMenuButton?: () => void;
  refMenuButtons?: (node: HTMLDivElement | null) => void;
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
  shouldShowButtons,
  onClickDashboardButton,
  onClickMenuButton,
  refMenuButtons,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
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

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSendMessage?.(inputValue);
      setInputValue('');
    }
  }

  const adjustHeight = () => {
    const textRef = inputRef.current;
    if (textRef) {
      textRef.style.height = 'auto';
      textRef.style.height = `${textRef.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [inputValue]);

  return (
    <div className={globalWrapperStyle}>
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
            onKeyDown={handleKeyDown}
            placeholder=" "
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleInputChange}
            value={inputValue}
            rows={1}
            style={{ maxHeight: '80px' }}
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
      {shouldShowButtons && (
        <div
          ref={refMenuButtons}
          className={clsx(
            buttonsWrapperStyle,
            inputWrapperColorSchemeStyle[colorScheme],
          )}
        >
          <ActionIcon
            variant="light"
            icon="dashboard"
            size="xs"
            onClick={onClickDashboardButton}
          />
          <ActionIcon
            variant="light"
            icon="menu"
            size="xs"
            onClick={onClickMenuButton}
          />
        </div>
      )}
    </div>
  );
};

SearchNAI.displayName = 'SearchNAI';
