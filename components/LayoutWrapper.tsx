'use client';

import ScrollToTop from './ScrollToTop';
import NextPageNav from './NextPageNav';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollToTop />
      <NextPageNav />
    </>
  );
}
