import React from 'react';

interface SakuraPetalProps {
  className?: string;
  fill?: boolean;
}

const SakuraPetal: React.FC<SakuraPetalProps> = ({ className = "", fill = true }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill={fill ? "currentColor" : "none"} 
      stroke="currentColor"
      strokeWidth={fill ? "0" : "2"}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* A stylized petal shape resembling a cherry blossom petal (heart-like but narrower at base) */}
      <path d="M12 21.5C12 21.5 14.8 16.2 18.5 14.2C21 12.8 22.5 10.5 21.5 8C20.5 5.5 18 4.5 16 5.5C14 6.5 12.5 8.5 12 10C11.5 8.5 10 6.5 8 5.5C6 4.5 3.5 5.5 2.5 8C1.5 10.5 3 12.8 5.5 14.2C9.2 16.2 12 21.5 12 21.5Z" />
    </svg>
  );
};

export default SakuraPetal;