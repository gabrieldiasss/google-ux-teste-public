import { Icon } from '@/components/Icon';
import React from 'react';
import { fileLoaderCloseButtonStyle } from './fileLoader.css';
interface FileLoaderProps {
  onClose: () => void;
}
export const FileLoader: React.FC<FileLoaderProps> = ({ onClose }) => {
  return (
    <div>
      <div>
        <span>0%</span>
      </div>
      <div>
        <div>
          <span>Nome do arquivo Exemplo</span>
          <span>Tipo de Arquivo</span>
        </div>
        <button
          className={fileLoaderCloseButtonStyle}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <Icon name="close" size={24} color="inherit" />
        </button>
      </div>
    </div>
  );
};
