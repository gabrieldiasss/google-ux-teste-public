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
import { useColorScheme } from '@/providers';

/* 
  X Ações nas 5 opções
  X Adicionar outras 2 opções
  X Desabilitar notificações
  X Verificação botão de perfil (se tiver link habilita se não desabilita)
*/

interface HeaderProps {
  avatarProps?: Omit<AvatarProps, 'size'>;
  isLogged?: boolean;
  actions: {
    actionNotification: () => void;
    actionWidget: () => void;
    actionProfile?: () => void;
    actionLogout: () => void;
  };
}

export const Header: React.FC<HeaderProps> = ({
  isLogged,
  avatarProps,
  actions,
}) => {
  const { isMobile } = useIsMobile();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { colorScheme, toggleColorScheme } = useColorScheme();

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [handleOutsideClick]);

  const renderMenuOptions = () => {
    return (
      <div className={clsx(headerMenuOptionsBaseStyle)}>
        <ActionIcon
          variant="light"
          icon={colorScheme === 'light' ? 'wb_sunny' : 'dark_mode'}
          size="xs"
          onClick={() => {
            toggleColorScheme();
          }}
        />

        <ActionIcon
          icon="notifications_active"
          disabled
          size="xs"
          variant="light"
          onClick={actions.actionNotification}
        />

        <ActionIcon
          icon="dashboard_customize"
          size="xs"
          variant="light"
          onClick={actions.actionWidget}
        />

        <ActionIcon
          variant="light"
          icon="account_circle"
          size="xs"
          onClick={actions.actionProfile ? actions.actionProfile : undefined}
          disabled={actions.actionProfile ? false : true}
        />

        <ActionIcon
          variant="light"
          icon="exit_to_app"
          size="xs"
          onClick={actions.actionLogout}
        />
      </div>
    );
  };
  return (
    <header className={headerWrapperBaseStyle}>
      <Logo size={isMobile ? 'xs' : 'md'} />
      <nav className={headerNavWrapperBaseStyle}>
        {!isLogged ? (
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
