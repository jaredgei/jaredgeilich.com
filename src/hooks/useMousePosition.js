import { useEffect, useState } from 'react';

// gets mouse position in window as a percentage from center
const useMousePosition = () => {
  const [ mousePosition, setMousePosition ] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = event => {
      setMousePosition({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
