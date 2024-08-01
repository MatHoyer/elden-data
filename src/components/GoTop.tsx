'use client';
import { CircleChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const GoTop = () => {
  const [scroll, setScroll] = useState(typeof window !== 'undefined' ? window.scrollY : 0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scroll > 100 ? (
    <CircleChevronUp
      size={35}
      fill={'var(--background)'}
      className="fixed bottom-20 right-20 cursor-pointer z-50"
      onClick={(e) => {
        e.stopPropagation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  ) : (
    <div></div>
  );
};

export default GoTop;
