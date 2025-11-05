import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Phan2_QuanHe from '@/components/Phan2_QuanHe';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function QuanHeLIKTPage() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <Header />
        <Phan2_QuanHe />
        <Footer />
      </main>
    </LayoutWrapper>
  );
}
