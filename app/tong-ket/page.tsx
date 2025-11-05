import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TongKet from '@/components/TongKet';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function TongKetPage() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <Header />
        <TongKet />
        <Footer />
      </main>
    </LayoutWrapper>
  );
}
