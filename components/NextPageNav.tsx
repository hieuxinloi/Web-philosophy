'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NextPage {
  href: string;
  label: string;
}

const pageFlow: Record<string, NextPage> = {
  '/': {
    href: '/loi-ich-kinh-te',
    label: 'Lợi ích kinh tế'
  },
  '/loi-ich-kinh-te': {
    href: '/quan-he-likt',
    label: 'Quan hệ lợi ích kinh tế'
  },
  '/quan-he-likt': {
    href: '/vai-tro-nha-nuoc',
    label: 'Vai trò của Nhà nước'
  },
  '/vai-tro-nha-nuoc': {
    href: '/van-de-dua-ra',
    label: 'Vấn đề được đặt ra'
  },
  '/van-de-dua-ra': {
    href: '/tong-ket',
    label: 'Công nghệ & Minh bạch học thuật'
  },
  '/tong-ket': {
    href: '/',
    label: 'Về trang chủ'
  }
};

export default function NextPageNav() {
  const pathname = usePathname();
  const nextPage = pageFlow[pathname];

  if (!nextPage) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-fade-in">
      <Link
        href={nextPage.href}
        className="group bg-[#ffd700] hover:bg-[#e6c200] text-[#1a1a1a] px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 hover-glow scale-on-hover"
      >
        <div className="text-right">
          <p className="text-xs text-gray-700 font-medium">Trang tiếp theo</p>
          <p className="font-bold text-lg">{nextPage.label}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  );
}
