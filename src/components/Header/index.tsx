import React from 'react';
import { Logo } from '../Logo';
import { useIsMobile } from '@/core/hooks';
import { Avatar, AvatarProps } from '../Avatar';
import { Button } from '../Button';
import {
  headerNavWrapperBaseStyle,
  headerWrapperBaseStyle,
} from './header.css';

interface HeaderProps {
  avatarProps?: Omit<AvatarProps, 'size'>;
}

export const Header: React.FC<HeaderProps> = ({ avatarProps }) => {
  const { isMobile } = useIsMobile();
  return (
    <header className={headerWrapperBaseStyle}>
      <Logo size={isMobile ? 'xs' : 'md'} />
      <nav className={headerNavWrapperBaseStyle}>
        <Button size={isMobile ? 'sm' : 'md'} variant="subtle">
          Login
        </Button>
        <Button size={isMobile ? 'sm' : 'md'}>Cadastrar</Button>
        <Avatar {...avatarProps} size="md" />
      </nav>
    </header>
  );
};
