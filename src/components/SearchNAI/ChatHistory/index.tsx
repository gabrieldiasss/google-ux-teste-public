import React from 'react';
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import clsx from 'clsx';
import {
  chatHistoryContainerStyle,
  chatHistoryContainerColorSchemeStyle,
  chatHistoryItemStyle,
  chatHistoryItemColorSchemeStyle,
  chatHistoryItemDateStyle,
  chatHistoryItemDateColorSchemeStyle,
  chatHistoryTitleStyle,
  chatHistoryTitleColorSchemeStyle,
} from './chatHistory.css';
import { useColorScheme } from '@/providers/ColorSchemeProvider';
interface ChatHistoryProps {
  onClick: (chatId: string) => void;
  historyData?: {
    id: string;
    title: string;
    date: Date;
  }[];
}
dayjs.locale('pt-br');
export const ChatHistory: React.FC<ChatHistoryProps> = ({
  onClick,
  historyData = [],
}) => {
  const { colorScheme } = useColorScheme();
  return (
    <div
      className={clsx(
        chatHistoryContainerStyle,
        chatHistoryContainerColorSchemeStyle[colorScheme],
      )}
    >
      {historyData.map((chat) => {
        const formattedDate = dayjs(chat.date).format('dddd, DD/MM/YYYY');
        const dividedDate = formattedDate.split(',');
        const renderDate = dividedDate[0].split('-')[0] + ',' + dividedDate[1];
        return (
          <button
            key={chat.id}
            className={clsx(
              chatHistoryItemStyle,
              chatHistoryItemColorSchemeStyle[colorScheme],
            )}
            onClick={() => onClick(chat.id)}
          >
            <span
              className={clsx(
                chatHistoryTitleColorSchemeStyle[colorScheme],
                chatHistoryTitleStyle,
              )}
            >
              {chat.title}
            </span>

            <span
              className={clsx(
                chatHistoryItemDateStyle,
                chatHistoryItemDateColorSchemeStyle[colorScheme],
              )}
            >
              {renderDate}
            </span>
          </button>
        );
      })}
    </div>
  );
};
