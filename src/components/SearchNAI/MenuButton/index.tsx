import { ActionIcon } from '@/components/ActionIcon';
import clsx from 'clsx';
import React, { useState } from 'react';
import {
  menuButtonsPositionStyle,
  menuButtonsWrapperColorSchemeStyle,
  menuButtonsWrapperStyle,
  menuChatPositionStyle,
  menuChatStyle,
} from './menuButton.css';
import { useColorScheme } from '@/providers';
import { SymbolCodepoints } from '@/core/icons/types';
import { EmojiListPicker } from './EmojiListPicker';
import { FileLoader } from './FileLoader';
import { ChatHistory } from './ChatHistory';

export function MenuButton({
  isFileLoaded,
  onClickAddNewChat,
  onClickChatHistory,

  renderPosition = 'top',
  setInputValue,
  historyData,
}: {
  isFileLoaded?: boolean;
  onClickAddNewChat?: () => void;
  onClickChatHistory?: (chatId: string) => void;
  renderPosition?: 'top' | 'bottom';
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  historyData?: {
    id: string;
    title: string;
    date: Date;
  }[];
}) {
  const menuItems: Record<
    string,
    {
      icon: SymbolCodepoints;
      label: string;
      onClick: () => void;
      render?: () => JSX.Element;
    }
  > = {
    history: {
      icon: 'dock_to_bottom',
      label: 'history',
      onClick: () => {},
      render: () => (
        <ChatHistory
          historyData={historyData}
          onClick={(chatId) => {
            onClickChatHistory?.(chatId);
          }}
        />
      ),
    },
    attachment: {
      icon: 'attach_file',
      label: 'attachment',
      onClick: () => {},
      render: () => (
        <FileLoader
          isFileLoaded={!!isFileLoaded}
          onClose={() => {
            setCurrentFeature(undefined);
          }}
        />
      ),
    },
    emoji: {
      icon: 'mood',
      label: 'emoji',
      onClick: () => {},
      render: () => (
        <EmojiListPicker
          onEmojiSelect={(emoji) => {
            setInputValue((prev) => prev + emoji);
          }}
        />
      ),
    },
    settings: {
      icon: 'add_comment',
      label: 'chat',
      onClick: () => {
        onClickAddNewChat?.();
        setCurrentFeature(undefined);
      },
    },
  };

  const { colorScheme } = useColorScheme();
  const [visible, setVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<
    keyof typeof menuItems | undefined
  >(undefined);

  const handleMenuItemClick = (feature?: keyof typeof menuItems) => {
    console.log('feature', feature);
    if (!feature) {
      return;
    }
    setVisible(false);
    setCurrentFeature(feature);
    menuItems[feature].onClick();
  };

  const renderSelectedFeature = () => {
    if (!currentFeature) {
      return null;
    }
    return (
      <div
        className={clsx(menuChatStyle, menuChatPositionStyle[renderPosition])}
      >
        {menuItems[currentFeature].render?.()}
      </div>
    );
  };

  return (
    <>
      <ActionIcon
        icon={currentFeature ? menuItems[currentFeature].icon : 'add'}
        size="xs"
        onClick={() => {
          setCurrentFeature(undefined);
          setVisible(!visible);
        }}
      />
      {visible && (
        <div
          className={clsx(
            menuButtonsWrapperStyle,
            menuButtonsWrapperColorSchemeStyle[colorScheme],
            menuButtonsPositionStyle[renderPosition],
          )}
        >
          {Object.keys(menuItems).map((key) => (
            <ActionIcon
              key={key}
              variant="outline"
              icon={menuItems[key as keyof typeof menuItems].icon}
              size="xs"
              onClick={() => handleMenuItemClick(key as keyof typeof menuItems)}
            />
          ))}
        </div>
      )}
      {currentFeature !== undefined && renderSelectedFeature()}
    </>
  );
}
