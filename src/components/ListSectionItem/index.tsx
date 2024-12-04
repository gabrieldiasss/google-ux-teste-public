import React from 'react';
import { useColorScheme } from '@/providers';
import {
  listSectionDescriptionStyle,
  listSectionGeneralInfoTextWrapperStyle,
  listSectionGeneralInfoWrapperStyle,
  listSectionItemInfoWrapperStyle,
  listSectionItemWrapperBaseStyle,
  listSectionItemWrapperVariantStyle,
  listSectionSubdescriptionStyle,
  listSectionTitleStyle,
} from './listSectionItem.css';
import { Tag, TagProps } from '../Tag';
import { Toggle, ToggleProps } from '../Toggle';
import { Avatar, AvatarProps } from '../Avatar';
import { ActionIcon, ActionIconProps } from '../ActionIcon';
import { Checkbox, CheckboxProps } from '../Checkbox';
import clsx from 'clsx';

export type ListSectionItemProps = {
  checkboxProps: CheckboxProps;

  title: string;
  description?: string;
  subdescription?: string;

  shouldShowTag?: boolean;
  shouldShowToggle?: boolean;
  shouldShowAvatar?: boolean;
  shouldShowActionIcon?: boolean;

  tagProps?: TagProps;
  toggleProps?: ToggleProps;
  avatarProps?: AvatarProps;
  actionIconProps?: ActionIconProps;

  width?: string | number;
};

export const ListSectionItem: React.FC<ListSectionItemProps> = ({
  checkboxProps,

  title,
  description,
  subdescription,

  shouldShowTag,
  shouldShowToggle,
  shouldShowAvatar,
  shouldShowActionIcon,

  tagProps,
  toggleProps,
  avatarProps,
  actionIconProps,

  width = 'auto',
}) => {
  const { colorScheme } = useColorScheme();

  return (
    <div
      className={clsx(
        listSectionItemWrapperBaseStyle,
        listSectionItemWrapperVariantStyle[colorScheme],
      )}
      style={{ width }}
    >
      <div className={listSectionItemInfoWrapperStyle}>
        <Checkbox {...checkboxProps} />
        <div className={clsx(listSectionGeneralInfoWrapperStyle)}>
          {shouldShowAvatar && <Avatar size="xs" {...avatarProps} />}
          <div className={clsx(listSectionGeneralInfoTextWrapperStyle)}>
            <span className={listSectionTitleStyle}>{title}</span>
            <span className={listSectionDescriptionStyle}>{description}</span>
            <span className={listSectionSubdescriptionStyle}>
              {subdescription}
            </span>
          </div>
          {shouldShowTag && <Tag label={tagProps?.label || ''} {...tagProps} />}
        </div>
      </div>
      <div>
        {shouldShowToggle && <Toggle {...toggleProps} />}
        {shouldShowActionIcon && (
          <ActionIcon
            icon={actionIconProps?.icon || 'edit'}
            size="xs"
            variant="subtle"
            {...actionIconProps}
          />
        )}
      </div>
    </div>
  );
};

ListSectionItem.displayName = 'ListSectionItem';
