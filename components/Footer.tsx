import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2a2a2a] py-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <p className="text-gray-400 text-sm hover:text-[#ffd700] transition-colors">
                © 2024 Kinh tế chính trị Mác-Lênin - Giáo trình Kinh tế chính trị
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>Chương 5 - Mục 5.3</span>
            <span>•</span>
            <Link href="/" className="hover:text-[#ffd700] transition-colors">
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
