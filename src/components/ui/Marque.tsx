import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className="marquee bg-heavyGreen py-2 font-bold text-sm w-[100%]">
      <div className="marquee-content">{children}</div>
    </div>
  );
};

export default Marquee;
