import { useEffect, useRef, useState } from 'react';

function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const elementRef = useRef(null);

  function enter() {
    setIsHovered(true);
  }

  function leave() {
    setIsHovered(false);
  }

  useEffect(() => {
    // Capture mutable value
    const ref = elementRef.current;

    ref.addEventListener('mouseenter', enter);
    ref.addEventListener('mouseleave', leave);

    return () => {
      ref.removeEventListener('mouseenter', enter);
      ref.removeEventListener('mouseleave', leave);
    };
  }, []);

  return [isHovered, elementRef];
}

export default useHover;
