import React from 'react';
import { Input } from '@headlessui/react';
import {
  container,
  iconWrapper,
  input,
  sizes,
  variants,
} from './textInput.css';
import { useColorScheme } from '@/providers';
import { SymbolCodepoints } from '@/core/icons/types';
import { Icon } from '@/components/Icon';

interface IconProps {
  position: 'left' | 'right';
  icon: SymbolCodepoints;
}

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'xs' | 'lg';
  iconProps?: IconProps;
}

export const TextInput: React.FC<TextInputProps> = ({
  size = 'lg',
  iconProps,
  className,
  ...props
}) => {
  const { colorScheme } = useColorScheme();
  const renderIcon = () => {
    if (iconProps?.icon) {
      return <Icon name={iconProps.icon} size={18} color="inherit" />;
    }
    return null;
  };
  return (
    <div className={`${container} ${sizes[size]} ${variants[colorScheme]}`}>
      {iconProps?.position === 'left' && renderIcon()}
      <Input className={input} {...props} />
      {iconProps?.position === 'right' && renderIcon()}
    </div>
  );
};
