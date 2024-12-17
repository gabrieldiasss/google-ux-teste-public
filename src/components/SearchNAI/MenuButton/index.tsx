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

export type MenuButtonProps = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  isFileLoaded?: boolean;
  onClickAddNewChat?: () => void;
  onClickChatHistory?: (chatId: string) => void;
  onUploadFile?: (file: File) => void;
  renderPosition?: 'top' | 'bottom';
  historyData?: {
    id: string;
    title: string;
    date: Date;
  }[];
};

export function MenuButton({
  setInputValue,
  isFileLoaded,
  onClickAddNewChat,
  onClickChatHistory,
  onUploadFile,
  renderPosition = 'top',
  historyData,
}: MenuButtonProps): JSX.Element {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const menuItems: Record<
    string,
    {
      icon: SymbolCodepoints;
      label: string;
      skipSetCurrentFeature?: boolean;
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
      skipSetCurrentFeature: true,
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
    if (!menuItems[feature].skipSetCurrentFeature) setCurrentFeature(feature);

    if (feature === 'attachment') {
      fileInputRef.current?.click();
    } else {
      menuItems[feature].onClick();
    }
  };

  const renderSelectedFeature = () => {
    if (!currentFeature) {
      return null;
    }
    if (historyData?.length === 0 && currentFeature === 'history') return null;

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
          if (currentFeature) {
            setVisible(false);
            setCurrentFeature(undefined);
          } else {
            setVisible(!visible);
          }
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
          {Object.keys(menuItems).map((key) => {
            if (key === 'attachment' && !isFileLoaded) {
              return null;
            }
            return (
              <ActionIcon
                key={key}
                variant="light"
                icon={menuItems[key as keyof typeof menuItems].icon}
                size="xs"
                onClick={() =>
                  handleMenuItemClick(key as keyof typeof menuItems)
                }
              />
            );
          })}

          <input
            ref={fileInputRef}
            type="file"
            id="file-loader"
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                console.log('File uploaded:', file);
                onUploadFile?.(file);
                setCurrentFeature('attachment');
                setVisible(false);
              }
            }}
          />
          <ActionIcon
            icon="attach_file"
            variant="light"
            size="xs"
            onClick={() => {
              fileInputRef.current?.click();
            }}
          />
        </div>
      )}
      {currentFeature !== undefined && renderSelectedFeature()}
    </>
  );
}
