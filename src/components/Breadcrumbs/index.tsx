import React, { Fragment } from 'react';
import {
  breadcrumbListActiveItemStyle,
  breadcrumbListStyle,
  breadcrumbListVariantColorModeStyle,
  breadcrumbNavBaseStyle,
} from './breadcrumbs.css';
import { Icon } from '../Icon';
import clsx from 'clsx';
import { useColorScheme } from '@/core/providers';

interface BreadcrumbItem {
  name: string;
  link: string;
}

interface BreadcrumbsProps {
  breadcrumbItems: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  breadcrumbItems,
}) => {
  const { colorScheme } = useColorScheme();
  const renderArrow = () => (
    <Icon
      name="chevron_right"
      size={12}
      className={breadcrumbListVariantColorModeStyle[colorScheme]}
    />
  );

  const renderBreadcrumbItem = (
    item: BreadcrumbItem,
    isLast: boolean = false,
  ) => (
    <li
      key={item.name + item.link + isLast}
      className={clsx(
        isLast
          ? breadcrumbListActiveItemStyle[colorScheme]
          : breadcrumbListVariantColorModeStyle[colorScheme],
      )}
      aria-current={isLast ? 'page' : undefined}
    >
      {isLast ? item.name : <a href={item.link}>{item.name}</a>}
    </li>
  );

  const renderCollapsedItems = () => {
    const collapsedItems = [
      breadcrumbItems[0],
      breadcrumbItems[1],
      breadcrumbItems[breadcrumbItems.length - 1],
    ];

    return (
      <>
        {renderBreadcrumbItem(collapsedItems[0])}
        {renderArrow()}
        {renderBreadcrumbItem(collapsedItems[1])}
        {renderArrow()}
        <li className={breadcrumbListVariantColorModeStyle[colorScheme]}>
          ...
        </li>
        {renderArrow()}
        {renderBreadcrumbItem(collapsedItems[2], true)}
      </>
    );
  };

  const renderFullItems = () => (
    <>
      {breadcrumbItems.map((item, index) => {
        return (
          <Fragment key={item.link + item.name}>
            {renderBreadcrumbItem(item, index === breadcrumbItems.length - 1)}
            {index < breadcrumbItems.length - 1 && renderArrow()}
          </Fragment>
        );
      })}
    </>
  );
  return (
    <nav aria-label="breadcrumb" className={breadcrumbNavBaseStyle}>
      <ul className={clsx(breadcrumbListStyle)}>
        {breadcrumbItems.length > 3
          ? renderCollapsedItems()
          : renderFullItems()}
      </ul>
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
