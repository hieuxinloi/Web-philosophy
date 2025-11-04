import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Phan3_NhaNuoc from '@/components/Phan3_NhaNuoc';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function VaiTroNhaNuocPage() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen">
        <Header />
        <Phan3_NhaNuoc />
        <Footer />
      </main>
    </LayoutWrapper>
  );
}
