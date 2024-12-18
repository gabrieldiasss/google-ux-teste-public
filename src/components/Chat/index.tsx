import React, { useEffect } from 'react';
import { SearchNAI, SearchNAIProps } from '../SearchNAI';
import { Avatar } from '../Avatar';
import clsx from 'clsx';
import {
  chatWrapperStyle,
  chatWrapperColorSchemeStyle,
  chatHeaderStyle,
  chatHeaderColorSchemeStyle,
  chatHeaderContentStyle,
  chatHeaderTitleWrapperStyle,
  chatHeaderTitleStyle,
  chatHeaderSubtitleStyle,
  chatHeaderButtonsStyle,
  chatHeaderButtonItemStyle,
  chatMainContentWrapperStyle,
  chatMainContentColorSchemeStyle,
  chatHeaderTitleColorSchemeStyle,
  chatHeaderSubtitleColorSchemeStyle,
  chatHeaderButtonsColorSchemeStyle,
  chatBackgroundStyle,
  chatBackgroundColorSchemeStyle,
} from './chat.css';
import { useColorScheme } from '@/providers';
import { Icon } from '../Icon';
import logoNai from './../../assets/nai-avatar.svg';
import { ChatMessage } from './ChatMessage';

interface ChatProps extends SearchNAIProps {
  onCloseChat?: () => void;
  onMinimizeChat?: () => void;
  chatMessages?: {
    id: string;
    message?: string;
    file?: string;
    from: 'user' | 'nai';
    type: 'text' | 'audio' | 'file';
  }[];
  isNaiTyping?: boolean;
}

export const Chat: React.FC<ChatProps> = ({
  onUploadFile,
  historyData,
  onClickChatHistory,
  onInputChange,
  onAudioRecorded,
  onCloseChat,
  onMinimizeChat,
  onSendMessage,
  renderMenuPosition,
  chatMessages,
  onClickAddNewChat,
  isNaiTyping,
}): JSX.Element => {
  const { colorScheme } = useColorScheme();
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const chatWrapper = document.getElementById('chat-wrapper');
    if (chatWrapper) {
      chatWrapper.scrollTop = chatWrapper.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div
      className={clsx(
        chatBackgroundStyle,
        chatBackgroundColorSchemeStyle[colorScheme],
      )}
    >
      <div
        className={clsx(
          chatWrapperStyle,
          chatWrapperColorSchemeStyle[colorScheme],
        )}
      >
        <div
          className={clsx(
            chatHeaderStyle,
            chatHeaderColorSchemeStyle[colorScheme],
          )}
        >
          <div className={chatHeaderContentStyle}>
            <Avatar label="NAI" image={logoNai} />
            <div className={chatHeaderTitleWrapperStyle}>
              <span
                className={clsx(
                  chatHeaderTitleStyle,
                  chatHeaderTitleColorSchemeStyle[colorScheme],
                )}
              >
                Nai
              </span>
              <span
                className={clsx(
                  chatHeaderSubtitleStyle,
                  chatHeaderSubtitleColorSchemeStyle[colorScheme],
                )}
              >
                Assistente e amiga virtual
              </span>
            </div>
          </div>
          <div
            className={clsx(
              chatHeaderButtonsStyle,
              chatHeaderButtonsColorSchemeStyle[colorScheme],
            )}
          >
            <button
              className={chatHeaderButtonItemStyle}
              onClick={onMinimizeChat}
            >
              <Icon size={24} name="remove" color="inherit" />
            </button>
            <button className={chatHeaderButtonItemStyle} onClick={onCloseChat}>
              <Icon size={24} name="close" color="inherit" />
            </button>
          </div>
        </div>
        <div
          className={clsx(
            chatMainContentWrapperStyle,
            chatMainContentColorSchemeStyle[colorScheme],
          )}
        >
          <div className={clsx(chatMainContentWrapperStyle)} id="chat-wrapper">
            {chatMessages?.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isNaiTyping && (
              <ChatMessage
                message={{
                  id: 'typing',
                  from: 'nai',
                  type: 'text',
                }}
                isNaiTyping
              />
            )}
          </div>
          <div
            style={{
              height: 'fit-content',
            }}
          >
            <SearchNAI
              isNaiTyping={isNaiTyping}
              onUploadFile={onUploadFile}
              historyData={historyData}
              onClickAddNewChat={onClickAddNewChat}
              onClickChatHistory={onClickChatHistory}
              onInputChange={onInputChange}
              onAudioRecorded={onAudioRecorded}
              onSendMessage={onSendMessage}
              renderMenuPosition={renderMenuPosition}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Chat.displayName = 'Chat';
