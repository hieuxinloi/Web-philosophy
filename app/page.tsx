import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import LayoutWrapper from '@/components/LayoutWrapper';

export default function Home() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <Header />
        <HeroSection />
        <Footer />
      </main>
    </LayoutWrapper>
  );
}