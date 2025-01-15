import clsx from 'clsx';
import React from 'react';
import { Button as Btn } from '@headlessui/react';
import './actionIcon.css';

import {
  actionIconStyle,
  actionIconSizes,
  actionIconDarkVariants,
  actionIconLightVariants,
  actionIconVariants,
} from './actionIcon.css';
import { Icon } from '@/components/Icon';
import { SymbolCodepoints } from './../../core/icons/types';
import { useColorScheme } from '@/providers';
import { ColorSchemeEnum } from '@/utils';
import step0 from './../../assets/nai/nai-step-0.svg';
import step1 from './../../assets/nai/nai-step-1.svg';
import step2 from './../../assets/nai/nai-step-2.svg';
import step3 from './../../assets/nai/nai-step-3.svg';
import step4 from './../../assets/nai/nai-step-4.svg';
import step5 from './../../assets/nai/nai-step-5.svg';
import step6 from './../../assets/nai/nai-step-6.svg';
import step7 from './../../assets/nai/nai-step-7.svg';
import step8 from './../../assets/nai/nai-step-8.svg';
export interface ActionIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'outline' | 'subtle' | 'light';
  icon: SymbolCodepoints;
  isNAI?: boolean;
}

const stepsSequence = [
  step0,
  step1,
  step2,
  step3,
  step4,
  step5,
  step2,
  step6,
  step7,
  step2,
  step8,
  step0,
];

export const ActionIcon: React.FC<ActionIconProps> = ({
  size = 'md',
  variant = 'filled',
  children,
  icon,
  onClick,
  isNAI,
  ...props
}) => {
  const animationDuration = 500;
  const totalSteps = stepsSequence.length;
  const [currentStep, setCurrentStep] = React.useState(0);

  const { colorScheme } = useColorScheme();
  const iconSize =
    size === 'xs' ? 18 : size === 'sm' || size === 'md' ? 20 : 24;

  const renderIcon = () => {
    if (!icon) return null;

    return <Icon name={icon} size={iconSize} color="inherit" />;
  };

  const initAnimation = React.useCallback(() => {
    let step = 0;

    function animate() {
      console.log('step', step);
      if (step < totalSteps && step !== totalSteps - 1) {
        setCurrentStep(step);
        step++;
        setTimeout(animate, animationDuration);
      } else {
        setCurrentStep(0);
      }
    }

    animate();
  }, [totalSteps, animationDuration]);

  return (
    <Btn
      onMouseEnter={() => {
        if (isNAI) initAnimation();
      }}
      onClick={onClick}
      {...props}
      className={clsx([
        actionIconStyle,
        actionIconSizes[size],
        actionIconVariants[variant],
        colorScheme === ColorSchemeEnum.Dark
          ? actionIconDarkVariants[variant]
          : actionIconLightVariants[variant],
      ])}
      style={
        isNAI
          ? {
              backgroundImage: `url("${stepsSequence[currentStep]}")`,
            }
          : {}
      }
    >
      {isNAI ? (
        <div
          style={{
            height: iconSize,
            width: iconSize,
          }}
        />
      ) : (
        renderIcon()
      )}
    </Btn>
  );
};

ActionIcon.displayName = 'ActionIcon';
