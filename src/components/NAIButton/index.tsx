import clsx from 'clsx';
import React from 'react';
import {
  naiButtonBarStyle,
  naiButtonBarTextBoldStyle,
  naiButtonBarTextParagraphStyle,
  naiButtonContainerStyle,
  naiButtonImageStyle,
  naiButtonStyle,
} from './NAIButton.css';
import naiImage from './../../assets/nai/NAI_EPI_completo.svg';

interface NaiButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const NAIButton: React.FC<NaiButtonProps> = ({ onClick, ...props }) => {
  return (
    <div className={clsx(naiButtonContainerStyle)}>
      <button onClick={onClick} {...props} className={clsx(naiButtonStyle)}>
        <div id="nai-button-bar" className={clsx(naiButtonBarStyle)}>
          <div>
            <img src={naiImage} className={clsx(naiButtonImageStyle)} />
          </div>
          <div className={naiButtonBarTextParagraphStyle}>Fale</div>
          <div className={naiButtonBarTextBoldStyle}>comigo</div>
        </div>
      </button>
    </div>
  );
};

NAIButton.displayName = 'NAIButton';
