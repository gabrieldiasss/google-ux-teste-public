import React from 'react';
interface AvatarCircleProps extends React.SVGProps<SVGSVGElement> {
  circleStrokeColor?: string;
  className?: string;
}
export const AvatarCircle: React.FC<AvatarCircleProps> = ({
  circleStrokeColor = '#000000',
  className,
}) => {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="17.5" stroke={circleStrokeColor} />
    </svg>
  );
};
