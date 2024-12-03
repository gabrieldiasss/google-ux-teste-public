import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Logo } from '../Logo';
import { useIsMobile } from '@/core/hooks';
import { Avatar, AvatarProps } from '../Avatar';
import { Button } from '../Button';
import {
  headerLoggedNavWrapperBaseStyle,
  headerMenuOptionsBaseStyle,
  headerNavWrapperBaseStyle,
  headerWrapperBaseStyle,
} from './header.css';
import { ActionIcon } from '../ActionIcon';
import clsx from 'clsx';

interface HeaderProps {
  avatarProps?: Omit<AvatarProps, 'size'>;
  isLogged?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isLogged, avatarProps }) => {
  const { isMobile } = useIsMobile();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);
  const renderMenuOptions = () => {
    return (
      <div className={clsx(headerMenuOptionsBaseStyle)}>
        <ActionIcon icon="notifications_active" size="xs" />
        <ActionIcon icon="dashboard_customize" size="xs" />
        <ActionIcon icon="account_circle" size="xs" />
      </div>
    );
  };
  return (
    <header className={headerWrapperBaseStyle}>
      <Logo size={isMobile ? 'xs' : 'md'} />
      <nav className={headerNavWrapperBaseStyle}>
        {isLogged ? (
          <>
            <Button size={isMobile ? 'sm' : 'md'} variant="subtle">
              Login
            </Button>
            <Button size={isMobile ? 'sm' : 'md'}>Cadastrar</Button>
          </>
        ) : (
          <div className={headerLoggedNavWrapperBaseStyle} ref={menuRef}>
            {isMenuOpen && renderMenuOptions()}

            <div
              style={{
                cursor: 'pointer',
              }}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Avatar {...avatarProps} size={isMobile ? 'xs' : 'md'} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
