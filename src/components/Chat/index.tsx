import React from 'react';
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
  chatMessageStyle,
  chatMessageUser,
  chatMessageNAI,
  chatMessageContentStyle,
  chatMessageUserContent,
  chatMessageNAIContent,
  chatHeaderTitleColorSchemeStyle,
  chatHeaderSubtitleColorSchemeStyle,
  chatHeaderButtonsColorSchemeStyle,
  chatMessageContentColorSchemeStyle,
  chatBackgroundStyle,
  chatBackgroundColorSchemeStyle,
} from './chat.css';
import { useColorScheme } from '@/providers';
import { Icon } from '../Icon';
import logoNai from './../../assets/nai-avatar.svg';

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
}

export const Chat: React.FC<ChatProps> = ({
  onEmojiSelect,
  onFileUpload,
  historyData,
  onHistoryClick,
  onInputChange,
  renderMenuPosition,
  chatMessages,
}): JSX.Element => {
  const { colorScheme } = useColorScheme();
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
            <button className={chatHeaderButtonItemStyle}>
              <Icon size={24} name="remove" color="inherit" />
            </button>
            <button className={chatHeaderButtonItemStyle}>
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
          <div className={clsx(chatMainContentWrapperStyle)}>
            {chatMessages?.map((message) => (
              <div
                key={message.id}
                className={clsx(
                  chatMessageStyle,
                  message.from === 'user' ? chatMessageUser : chatMessageNAI,
                )}
              >
                {message.from === 'nai' && (
                  <Avatar label={message.from} size="md" image={logoNai} />
                )}
                <div
                  className={clsx(
                    chatMessageContentStyle,
                    chatMessageContentColorSchemeStyle[colorScheme],
                    message.from === 'user'
                      ? chatMessageUserContent
                      : chatMessageNAIContent,
                  )}
                >
                  {message.type === 'text' && <span>{message.message}</span>}
                  {message.type === 'audio' && (
                    <audio controls>
                      <source src={message.file} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                  {message.type === 'file' && (
                    <a href={message.file} download>
                      Download file
                    </a>
                  )}
                </div>
                {message.from === 'user' && (
                  <Avatar label={message.from} size="md" />
                )}
              </div>
            ))}
          </div>
          <div
            style={{
              height: 'fit-content',
            }}
          >
            <SearchNAI
              onEmojiSelect={onEmojiSelect}
              onFileUpload={onFileUpload}
              historyData={historyData}
              onHistoryClick={onHistoryClick}
              onInputChange={onInputChange}
              renderMenuPosition={renderMenuPosition}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Chat.displayName = 'Chat';
