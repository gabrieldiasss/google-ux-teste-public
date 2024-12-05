// Adicionando a fonte global em Tailwind (ou outra solução de estilo)
import { theme } from '@/core/themes/default.css';
import React, { useEffect } from 'react';
import { emojiListPicker } from './emojiListPicker.css';

export const EmojiListPicker: React.FC = () => {
  const loadGoogleFonts = () => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  };
  useEffect(() => {
    loadGoogleFonts();
  }, []);
  const hexToChar = (hex: string) => {
    return String.fromCodePoint(parseInt(hex, 16));
  };

  const renderEmojiRange = (range: string) => {
    const parts = range.split('–');
    const start = parseInt(parts[0].replace('U+', ''), 16);
    const end = parts[1] ? parseInt(parts[1].replace('U+', ''), 16) : start;

    const emojis = [];
    for (let i = start; i <= end; i++) {
      emojis.push(String.fromCodePoint(i));
    }
    return emojis;
  };

  const emojiList = {
    Smileys: [
      'U+1f1e6-1f1ff',
      'U+200d',
      'U+2620',
      'U+26a7',
      'U+fe0f',
      'U+1f308',
      'U+1f38c',
      'U+1f3c1',
      'U+1f3f3-1f3f4',
      'U+1f6a9',
      'U+e0062-e0063',
      'U+e0065',
      'U+e0067',
      'U+e006c',
      'U+e006e',
      'U+e0073-e0074',
      'U+e0077',
      'U+e007f',
      'U+23',
      'U+2a',
      'U+30-39',
      'U+a9',
      'U+ae',
      'U+200d',
      'U+203c',
      'U+2049',
      'U+20e3',
      'U+2122',
      'U+2139',
      'U+2194-2199',
      'U+21a9-21aa',
      'U+23cf',
      'U+23e9-23ef',
      'U+23f8-23fa',
      'U+24c2',
      'U+25aa-25ab',
      'U+25b6',
      'U+25c0',
      'U+25fb-25fe',
      'U+2611',
      'U+2622-2623',
      'U+2626',
      'U+262a',
      'U+262e-262f',
      'U+2638',
      'U+2640',
      'U+2642',
      'U+2648-2653',
      'U+2660',
      'U+2663',
      'U+2665-2666',
      'U+2668',
      'U+267b',
      'U+267e-267f',
      'U+2695',
      'U+269b-269c',
      'U+26a0',
      'U+26a7',
      'U+26aa-26ab',
      'U+26ce',
      'U+26d4',
      'U+2705',
      'U+2714',
      'U+2716',
      'U+271d',
      'U+2721',
      'U+2733-2734',
      'U+2747',
      'U+274c',
      'U+274e',
      'U+2753-2755',
      'U+2757',
      'U+2764',
      'U+2795-2797',
      'U+27a1',
      'U+27b0',
      'U+27bf',
      'U+2934-2935',
      'U+2b05-2b07',
      'U+2b1b-2b1c',
      'U+2b55',
      'U+3030',
      'U+303d',
      'U+3297',
      'U+3299',
      'U+fe0f',
      'U+1f170-1f171',
      'U+1f17e-1f17f',
      'U+1f18e',
      'U+1f191-1f19a',
      'U+1f201-1f202',
      'U+1f21a',
      'U+1f22f',
      'U+1f232-1f23a',
      'U+1f250-1f251',
      'U+1f310',
      'U+1f3a6',
      'U+1f3b5-1f3b6',
      'U+1f3bc',
      'U+1f3e7',
      'U+1f441',
      'U+1f499-1f49c',
      'U+1f49f-1f4a0',
      'U+1f4a2',
      'U+1f4ac-1f4ad',
      'U+1f4b1-1f4b2',
      'U+1f4b9',
      'U+1f4db',
      'U+1f4f2-1f4f6',
      'U+1f500-1f50a',
      'U+1f515',
      'U+1f518-1f524',
      'U+1f52f-1f53d',
      'U+1f549',
      'U+1f54e',
      'U+1f5a4',
      'U+1f5e8',
      'U+1f5ef',
      'U+1f6ab',
      'U+1f6ad-1f6b1',
      'U+1f6b3',
      'U+1f6b7-1f6bc',
      'U+1f6be',
      'U+1f6c2-1f6c5',
      'U+1f6d0-1f6d1',
      'U+1f6d7',
      'U+1f6dc',
      'U+1f7e0-1f7eb',
      'U+1f7f0',
      'U+1f90d-1f90e',
      'U+1f9e1',
      'U+1fa75-1fa77',
      'U+1faaf',
      'U+231a-231b',
      'U+2328',
      'U+23f0-23f3',
      'U+2602',
      'U+260e',
      'U+2692',
      'U+2694',
      'U+2696-2697',
      'U+2699',
      'U+26b0-26b1',
      'U+26cf',
      'U+26d1',
      'U+26d3',
      'U+2702',
      'U+2709',
      'U+270f',
      'U+2712',
      'U+fe0f',
      'U+1f302',
      'U+1f321',
      'U+1f392-1f393',
      'U+1f3a9',
      'U+1f3bd',
      'U+1f3ee',
      'U+1f3f7',
      'U+1f3fa',
      'U+1f451-1f462',
      'U+1f484',
      'U+1f489-1f48a',
      'U+1f48c-1f48e',
      'U+1f4a1',
      'U+1f4a3',
      'U+1f4b0',
      'U+1f4b3-1f4b8',
      'U+1f4bb-1f4da',
      'U+1f4dc-1f4f1',
      'U+1f4ff',
      'U+1f50b-1f514',
      'U+1f516-1f517',
      'U+1f526-1f529',
      'U+1f52c-1f52e',
      'U+1f550-1f567',
      'U+1f56f-1f570',
      'U+1f576',
      'U+1f587',
      'U+1f58a-1f58d',
      'U+1f5a5',
      'U+1f5a8',
      'U+1f5b1-1f5b2',
      'U+1f5c2-1f5c4',
      'U+1f5d1-1f5d3',
      'U+1f5dc-1f5de',
      'U+1f5e1',
      'U+1f5f3',
      'U+1f6aa',
      'U+1f6ac',
      'U+1f6bd',
      'U+1f6bf',
      'U+1f6c1',
      'U+1f6cb',
      'U+1f6cd-1f6cf',
      'U+1f6d2',
      'U+1f6e0-1f6e1',
      'U+1f6f0',
      'U+1f97b-1f97f',
      'U+1f9af',
      'U+1f9ba',
      'U+1f9e2-1f9e6',
      'U+1f9ea-1f9ec',
      'U+1f9ee-1f9f4',
      'U+1f9f7-1f9ff',
      'U+1fa71-1fa74',
      'U+1fa79-1fa7b',
      'U+1fa86',
      'U+1fa91-1fa93',
      'U+1fa96',
      'U+1fa99-1faa0',
      'U+1faa2-1faa7',
      'U+1faaa-1faae',
      'U+265f',
      'U+26bd-26be',
      'U+26f3',
      'U+26f8',
      'U+fe0f',
      'U+1f004',
      'U+1f0cf',
      'U+1f380-1f384',
      'U+1f386-1f38b',
      'U+1f38d-1f391',
      'U+1f396-1f397',
      'U+1f399-1f39b',
      'U+1f39e-1f39f',
    ],
    Animals: ['🐶', '🐱', '🦁', '🐸', '🐵'],
    Food: ['🍎', '🍔', '🍕', '🍩', '🍉'],
  };
  return (
    <div
      style={{ fontFamily: "'Noto Color Emoji', sans-serif" }}
      className="p-4"
    >
      {Object.entries(emojiList).map(([category, emojis]) => (
        <div key={category} className="mb-4">
          <h3 className="font-bold text-lg mb-2">{category}</h3>
          <div className={emojiListPicker}>
            {emojis.map((emoji, index) => {
              // If the emoji is a range (e.g., U+1F600–U+1F64F)
              if (emoji.includes('U+')) {
                return renderEmojiRange(emoji).map((emojiChar, idx) => (
                  <span
                    key={`${emoji}-${index}-${idx}`}
                    className="text-2xl cursor-pointer hover:scale-110 transition-transform"
                  >
                    {emojiChar}
                  </span>
                ));
              } else {
                // Individual emoji
                return (
                  <span
                    key={emoji}
                    className="text-2xl cursor-pointer hover:scale-110 transition-transform"
                  >
                    {emoji}
                  </span>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
