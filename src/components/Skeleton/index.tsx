import React from 'react';
import { skeletonBase, skeletonStyleVariants } from './skeleton.css';
import clsx from 'clsx';
import { useColorScheme } from '@/core/providers';

type SkeletonProps = {
  width?: string | number;
  height?: string | number;
};
export const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {
  const { colorScheme } = useColorScheme();

  return (
    <div
      className={clsx(
        skeletonBase,
        skeletonStyleVariants[colorScheme === 'dark' ? 'dark' : 'light'],
      )}
      style={{
        width: width || '100%',
        height: height || '100%',
      }}
    />
  );
};
Skeleton.displayName = 'Skeleton';
