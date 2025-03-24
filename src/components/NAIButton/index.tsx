import clsx from 'clsx';
import React from 'react';
import {
  naiButtonBarStyle,
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
          <img src={naiImage} className={clsx(naiButtonImageStyle)} />
          <p>Fale</p>
          <b>comigo</b>
        </div>
      </button>
    </div>
  );
};

NAIButton.displayName = 'NAIButton';
