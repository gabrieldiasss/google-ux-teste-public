import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import {
  arrowBase,
  arrowVariants,
  chatMessageContentColorSchemeStyle,
  chatMessageContentStyle,
  chatMessageNAI,
  chatMessageNAIContent,
  chatMessageStyle,
  chatMessageUser,
  chatMessageUserContent,
} from './chatMessage.css';
import { Avatar } from '@/components/Avatar';
import logoNai from './../../../assets/nai-avatar.svg';
import { useColorScheme } from '@/providers';
import { ColorSchemeEnum } from '@/utils';
import arrowInlineDark from './../../../assets/chat/side-inline-arrow-tooltip-dark.svg';
import arrowInlineLight from './../../../assets/chat/side-inline-arrow-tooltip-light.svg';
import { FileRender } from './FileRender';
import { Dotsloader } from './DotsLoader';
import remarkGfm from 'remark-gfm';

type ChatMessageProps = {
  isNaiTyping?: boolean;
  message: {
    id: string;
    message?: string;
    file?: string;
    from: 'user' | 'nai';
    type: 'text' | 'audio' | 'file';
  };
};

export const ChatMessage = ({
  message,
  isNaiTyping,
}: ChatMessageProps): JSX.Element => {
  const { colorScheme } = useColorScheme();

  return (
    <div
      id="chat-message"
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
        style={{
          width: message.type === 'text' ? 'auto' : '100%',
        }}
      >
        <img
          src={
            colorScheme === ColorSchemeEnum.Dark
              ? arrowInlineDark
              : arrowInlineLight
          }
          alt=""
          aria-hidden="true"
          className={clsx(
            arrowBase,
            arrowVariants[
              message.from === 'nai' ? 'rightBottom' : 'leftBottom'
            ],
          )}
        />
        {isNaiTyping && message.from === 'nai' ? (
          <Dotsloader />
        ) : (
          <>
            {message.type === 'text' && (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.message}
              </ReactMarkdown>
            )}

            {message.type === 'audio' && (
              <FileRender type="audio" file={message.file} />
            )}
            {message.type === 'file' && (
              <FileRender type="file" file={message.file} />
            )}
          </>
        )}
      </div>
      {message.from === 'user' && <Avatar label={message.from} size="md" />}
    </div>
  );
};

ChatMessage.displayName = 'ChatMessage';
