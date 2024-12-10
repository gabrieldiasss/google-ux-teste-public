import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import {
  emojiListPickerCategoryStyle,
  emojiListPickerCategoryTitleColorSchemeStyle,
  emojiListPickerCategoryTitleStyle,
  emojiListPickerContainer,
  emojiListPickerContainerColorSchemeStyle,
  emojiListPickerContainerListColorSchemeStyle,
  emojiListPickerContainerListStyle,
  emojiListPickerContainerScrollStyle,
  emojiListPickerItemColorSchemeStyle,
  emojiListPickerItemStyle,
} from './emojiListPicker.css';
import { emojiList } from './emojiList';
import { useColorScheme } from '@/providers';
import { SearchInput } from '../Inputs/SearchInput';

interface EmojiListPickerProps {
  onEmojiSelect: (emoji: string) => void;
}

const loadGoogleFonts = () => {
  if (!document.querySelector("link[href*='Noto+Color+Emoji']")) {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
};

const renderEmoji = (emojiCode: string) => {
  const codePoints = emojiCode.split(' ').map((code) => {
    return String.fromCodePoint(parseInt(code.replace('U+', ''), 16));
  });

  return codePoints.join('');
};

const EmojiCategory: React.FC<{
  categoryName: string;
  emojis: { emoji: string; code: string }[];
  colorScheme: 'dark' | 'light';
  onEmojiSelect: (emoji: string) => void;
}> = ({ categoryName, emojis, colorScheme, onEmojiSelect }) => (
  <div>
    <span
      className={clsx(
        emojiListPickerCategoryTitleStyle,
        emojiListPickerCategoryTitleColorSchemeStyle[colorScheme],
      )}
    >
      {categoryName}
    </span>
    <div className={emojiListPickerCategoryStyle}>
      {emojis.map((emoji, index) => (
        <span
          key={index}
          className={clsx(
            emojiListPickerItemStyle,
            emojiListPickerItemColorSchemeStyle[colorScheme],
          )}
          onClick={() => onEmojiSelect(emoji.emoji)}
        >
          {renderEmoji(emoji.code)}
        </span>
      ))}
    </div>
  </div>
);

export const EmojiListPicker: React.FC<EmojiListPickerProps> = ({
  onEmojiSelect,
}) => {
  const [emojiSearchValue, setEmojiSearchValue] = useState<string>('');
  const { colorScheme } = useColorScheme();

  useEffect(() => {
    loadGoogleFonts();
  }, []);

  const filteredEmojiList = useMemo(() => {
    return emojiList.map((category) => ({
      ...category,
      emojis: category.emojis.filter((emoji) =>
        emoji.description.includes(emojiSearchValue.toLowerCase()),
      ),
    }));
  }, [emojiSearchValue]);

  return (
    <div
      className={clsx(
        emojiListPickerContainer,

        emojiListPickerContainerColorSchemeStyle[colorScheme],
      )}
    >
      <SearchInput
        placeholder="Pesquisar emoji"
        size="xs"
        value={emojiSearchValue}
        onChange={(e) => setEmojiSearchValue(e.target.value)}
      />
      <div
        className={clsx(
          emojiListPickerContainerListStyle,
          emojiListPickerContainerListColorSchemeStyle[colorScheme],
        )}
      >
        <div className={emojiListPickerContainerScrollStyle}>
          {filteredEmojiList.map((category, index) =>
            category.emojis.length > 0 ? (
              <EmojiCategory
                key={index}
                categoryName={category.categoryName}
                emojis={category.emojis}
                colorScheme={colorScheme}
                onEmojiSelect={onEmojiSelect}
              />
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
};
