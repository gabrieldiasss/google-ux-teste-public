import React from 'react';
import { SearchNAI, SearchNAIProps } from '../SearchNAI';

interface ChatProps extends SearchNAIProps {
  onCloseChat?: () => void;
  onMinimizeChat?: () => void;
  chatMessages?: {
    id: string;
    message?: string;
    file?: string;
    from: 'user' | 'nai';
    type: 'text' | 'audio' | 'file';
  };
}

export const Chat: React.FC<ChatProps> = ({
  onEmojiSelect,
  onFileUpload,
  historyData,
  onHistoryClick,
  onInputChange,
  renderMenuPosition,
}): JSX.Element => {
  return (
    <div>
      <div></div>
      <div>
        <div></div>
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
  );
};

Chat.displayName = 'Chat';
