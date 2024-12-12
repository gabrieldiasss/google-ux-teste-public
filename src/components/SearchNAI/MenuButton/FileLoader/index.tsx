import { Icon } from '@/components/Icon';
import React from 'react';
import clsx from 'clsx';
import {
  fileLoaderCloseButtonStyle,
  fileLoaderContainerColorSchemeStyle,
  fileLoaderContainerStyle,
  fileLoaderInnerContainerColorSchemeStyle,
  fileLoaderInnerContainerStyle,
  fileLoaderLoaderStyle,
  fileLoaderTextContentStyle,
  fileLoaderTextStyle,
  fileLoaderTextStyleColorSchemeStyle,
  fileLoaderTitleColorSchemeStyle,
  fileLoaderTitleStyle,
} from './fileLoader.css';
import { useColorScheme } from '@/providers';
import { Loader } from './Loader';
interface FileLoaderProps {
  isFileLoaded: boolean;
  onClose: () => void;
}
export const FileLoader: React.FC<FileLoaderProps> = ({
  isFileLoaded,
  onClose,
}) => {
  const { colorScheme } = useColorScheme();
  const [percentage, setPercentage] = React.useState(0);
  React.useEffect(() => {
    if (isFileLoaded) {
      setPercentage(100);
      return;
    }
    const interval = setInterval(
      () => {
        setPercentage((prevPercentage) => {
          if (prevPercentage === 100) {
            clearInterval(interval);
            return 100;
          }
          return prevPercentage + 1;
        });
      },
      percentage < 16
        ? 200
        : percentage < 64
          ? 300
          : percentage < 80
            ? 400
            : percentage < 90
              ? 700
              : 1000,
    );
    return () => clearInterval(interval);
  }, [percentage, isFileLoaded]);

  return (
    <div
      className={clsx(
        fileLoaderContainerStyle,
        fileLoaderContainerColorSchemeStyle[colorScheme],
      )}
    >
      <div
        className={clsx(
          fileLoaderInnerContainerStyle,
          fileLoaderInnerContainerColorSchemeStyle[colorScheme],
        )}
      >
        <div className={clsx(fileLoaderLoaderStyle)}>
          <Loader percentage={percentage} />
          <div className={fileLoaderTextContentStyle}>
            <span
              className={clsx(
                fileLoaderTitleStyle,
                fileLoaderTitleColorSchemeStyle[colorScheme],
              )}
            >
              Nome do arquivo Exemplo
            </span>
            <span
              className={clsx(
                fileLoaderTextStyle,

                fileLoaderTextStyleColorSchemeStyle[colorScheme],
              )}
            >
              Tipo de Arquivo
            </span>
          </div>
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
