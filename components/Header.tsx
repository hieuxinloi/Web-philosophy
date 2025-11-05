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
    { href: '/van-de-dua-ra', label: 'Vấn đề được đặt ra' },
    { href: '/tong-ket', label: 'Công nghệ & Minh bạch' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 to-white backdrop-blur-sm border-b border-blue-300 shadow-md transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">Kinh tế chính trị Mác-Lênin</h1>
        </Link>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? 'text-blue-700 font-semibold bg-blue-100 px-3 py-1 rounded-lg'
                  : 'text-blue-800 hover:text-blue-700 hover:bg-blue-50 px-3 py-1 rounded-lg'
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
