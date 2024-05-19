import React from 'react';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ className, children }: SectionProps) => {
  return <section className={className}>{children}</section>;
};
