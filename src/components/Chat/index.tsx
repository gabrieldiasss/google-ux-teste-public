import React from 'react';
import { SearchNAI, SearchNAIProps } from '../SearchNAI';
import { Avatar } from '../Avatar';
import clsx from 'clsx';
import {
  chatHeaderButtonItemStyle,
  chatHeaderButtonsStyle,
  chatHeaderColorSchemeStyle,
  chatHeaderStyle,
  chatMainContentWrapperStyle,
} from './chat.css';
import { theme, themeTokens } from '@/core/themes/default.css';
import { useColorScheme } from '@/providers';
import { Icon } from '../Icon';

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
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        background:
          colorScheme === 'light'
            ? theme.colors.neutralsOverlay.light[100]
            : theme.colors.neutralsOverlay.dark[100],
        padding: theme.spacing.xxs,
        borderRadius: themeTokens.borders.radius.md,
      }}
    >
      <div
        className={clsx(
          chatHeaderStyle,
          chatHeaderColorSchemeStyle[colorScheme],
        )}
      >
        <div
          style={{
            display: 'flex',
            gap: theme.spacing.m,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Avatar label="NAI" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
              gap: theme.spacing.none,
            }}
          >
            <span
              style={{
                fontSize: theme.fontSizes.lg,
                fontWeight: theme.fontWeights.bold,
                color:
                  colorScheme === 'light'
                    ? theme.colors.neutralsOverlay.dark[800]
                    : theme.colors.neutralsOverlay.light[800],
              }}
            >
              Nai
            </span>
            <span
              style={{
                fontSize: theme.fontSizes.sm,
                color: theme.colors.neutralsOverlay.dark[500],
              }}
            >
              Assistente e amiga virtual
            </span>
          </div>
        </div>
        <div className={clsx(chatHeaderButtonsStyle)}>
          <button className={chatHeaderButtonItemStyle}>
            <Icon size={16} name="remove" color="inherit" />
          </button>
          <button className={chatHeaderButtonItemStyle}>
            <Icon size={16} name="close" color="inherit" />
          </button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          height: '100%',
          overflow: 'auto',
          background:
            colorScheme === 'light'
              ? theme.colors.neutrals.light[50]
              : theme.colors.neutrals.dark[50],
          paddingInline: theme.spacing.xxs,
          paddingBottom: theme.spacing.xxs,
          borderBottomLeftRadius: themeTokens.borders.radius.md,
          borderBottomRightRadius: themeTokens.borders.radius.md,
        }}
      >
        <div className={clsx(chatMainContentWrapperStyle)}>
          {chatMessages?.map((message) => {
            return (
              <div
                key={message.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: theme.spacing.xxs,
                  alignItems: 'center',
                  justifyContent:
                    message.from === 'user' ? 'flex-end' : 'flex-start',
                  marginBlock: theme.spacing.xxs,
                }}
              >
                <Avatar label={message.from} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing.xxxs,
                    padding: theme.spacing.xxxs,
                    borderRadius: themeTokens.borders.radius.md,
                    backgroundColor:
                      message.from === 'user'
                        ? theme.colors.neutralsOverlay.light[100]
                        : theme.colors.neutralsOverlay.dark[100],
                  }}
                >
                  {message.type === 'text' && (
                    <span
                      style={{
                        fontSize: theme.fontSizes.sm,
                        color:
                          message.from === 'user'
                            ? theme.colors.neutralsOverlay.dark[800]
                            : theme.colors.neutralsOverlay.light[800],
                      }}
                    >
                      {message.message}
                    </span>
                  )}
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
              </div>
            );
          })}
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
  );
};

Chat.displayName = 'Chat';
