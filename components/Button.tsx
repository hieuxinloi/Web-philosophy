import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps & { className?: string }) {
  const baseClasses = 'px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block text-center';
  const variantClasses = variant === 'primary' 
    ? 'bg-blue-700 text-white hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-600/50' 
    : 'bg-white border-2 border-blue-700 text-blue-800 hover:bg-blue-700 hover:text-white hover:border-blue-800 shadow-md hover:shadow-lg';
  
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </Link>
  );
}
