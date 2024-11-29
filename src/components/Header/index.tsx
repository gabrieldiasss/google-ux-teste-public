import React from 'react';
import { Logo } from '../Logo';
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
  return (
    <header className={headerWrapperBaseStyle}>
      <Logo size={true ? 'xs' : 'md'} />
      <nav className={headerNavWrapperBaseStyle}>
        <Button size={true ? 'sm' : 'md'} variant="subtle">
          Login
        </Button>
        <Button size={true ? 'sm' : 'md'}>Cadastrar</Button>
        <Avatar {...avatarProps} size="md" />
      </nav>
    </header>
  );
};
