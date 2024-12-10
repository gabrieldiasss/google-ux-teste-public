import { ActionIcon } from '@/components/ActionIcon';
import clsx from 'clsx';
import React, { useState } from 'react';
import {
  menuButtonsPositionStyle,
  menuButtonsWrapperColorSchemeStyle,
  menuButtonsWrapperStyle,
} from '../searchNAI.css';
import { useColorScheme } from '@/providers';
import { SymbolCodepoints } from '@/core/icons/types';

export function MenuButton({
  renderPosition = 'top',
}: {
  renderPosition?: 'top' | 'bottom';
}) {
  const menuItems: Record<
    string,
    { icon: SymbolCodepoints; label: string; onClick: () => void }
  > = {
    history: {
      icon: 'dock_to_bottom',
      label: 'history',
      onClick: () => {},
    },
    attachment: {
      icon: 'attach_file',
      label: 'attachment',
      onClick: () => {},
    },
    emoji: {
      icon: 'mood',
      label: 'emoji',
      onClick: () => {},
    },
    settings: {
      icon: 'add_comment',
      label: 'chat',
      onClick: () => {},
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
    </>
  );
}
