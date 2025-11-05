import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  // Thêm hover effect chuyển border sang vàng cho tất cả các card
  const hoverClass = hover 
    ? 'hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-200/50 hover-glow transition-all duration-300' 
    : 'hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-200/30 transition-all duration-300';
  const defaultClasses = className.includes('bg-') ? '' : 'bg-white border border-blue-200 shadow-sm';
  return (
    <div className={`${defaultClasses} rounded-lg p-6 animate-fade-in ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
