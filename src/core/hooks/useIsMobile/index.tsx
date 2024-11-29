import { themeTokens } from '@/core/themes/default.css';
import { useEffect, useState } from 'react';

interface UseIsMobileType {
  isMobile: boolean;
}

export const useIsMobile = (): UseIsMobileType => {
  const [isMobile, setIsMobile] = useState(false);
  const mobileBreakpoint = Number(themeTokens.breakpoints.sm.replace('px', ''));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < mobileBreakpoint) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
  };
};
