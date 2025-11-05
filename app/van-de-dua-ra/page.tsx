import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VanDeDuRa from '@/components/VanDeDuRa';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function VanDeDuRaPage() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <Header />
        <VanDeDuRa />
        <Footer />
      </main>
    </LayoutWrapper>
  );
}

