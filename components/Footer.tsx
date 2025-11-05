import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-blue-100 border-t border-blue-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <p className="text-slate-600 text-sm hover:text-blue-600 transition-colors">
                © Kinh tế chính trị Mác-Lênin - Giáo trình Kinh tế chính trị
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md">
              <span className="text-sm font-medium">Chương 5 - Mục 5.3</span>
            </div>
            <Link 
              href="/" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow-md transition-colors font-medium text-sm"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
