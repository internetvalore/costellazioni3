import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', dark = false }) => {
  return (
    <section className={`py-16 md:py-24 ${dark ? 'bg-gray-900 text-white' : 'bg-white'} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;