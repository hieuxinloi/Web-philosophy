import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Phan1_LoiIch from '@/components/Phan1_LoiIch';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function LoiIchKinhTePage() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <Header />
        <Phan1_LoiIch />
        <Footer />
      </main>
    </LayoutWrapper>
  );
}
