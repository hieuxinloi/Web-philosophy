import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClass = hover 
    ? 'hover:border-[#ffd700] hover:shadow-lg hover:shadow-[#ffd700]/20 hover-glow transition-all duration-300' 
    : '';
  return (
    <div className={`bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6 animate-fade-in ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
