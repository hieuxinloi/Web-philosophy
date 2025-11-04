import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps & { className?: string }) {
  const baseClasses = 'px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block text-center';
  const variantClasses = variant === 'primary' 
    ? 'bg-[#ffd700] text-[#1a1a1a] hover:bg-[#e6c200] hover:shadow-lg hover:shadow-[#ffd700]/50' 
    : 'border-2 border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-[#1a1a1a]';
  
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </Link>
  );
}
