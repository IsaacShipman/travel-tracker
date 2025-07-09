import { useRef, useEffect, useState } from 'react';

/**
 * Custom hook to throttle rapid value updates
 * Useful for animations that don't need to update every frame
 */
export function useThrottledValue<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastUpdated = useRef<number>(Date.now());

  useEffect(() => {
    const now = Date.now();
    
    if (now - lastUpdated.current >= delay) {
      setThrottledValue(value);
      lastUpdated.current = now;
    } else {
      const timer = setTimeout(() => {
        setThrottledValue(value);
        lastUpdated.current = Date.now();
      }, delay - (now - lastUpdated.current));
      
      return () => clearTimeout(timer);
    }
  }, [value, delay]);

  return throttledValue;
}
