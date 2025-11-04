'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'Trang chủ' },
    { href: '/loi-ich-kinh-te', label: 'Lợi ích kinh tế' },
    { href: '/quan-he-likt', label: 'Quan hệ LIKT' },
    { href: '/vai-tro-nha-nuoc', label: 'Vai trò Nhà nước' },
    { href: '/tong-ket', label: 'Tổng kết' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#2a2a2a] transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-white">OPEN MUSEUM</h1>
        </Link>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? 'text-[#ffd700] font-semibold'
                  : 'text-white hover:text-[#ffd700]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
