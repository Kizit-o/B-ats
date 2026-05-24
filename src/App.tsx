import './styles/globals.css';
import { Navbar }       from './components/layout/Navbar';
import { Footer }       from './components/layout/Footer';
import { HeroSection }  from './components/features/HeroSection';
import { CategoryGrid } from './components/features/CategoryGrid';
import { TrustBadges }  from './components/features/TrustBadges';
import { PromoBanner }  from './components/features/PromoBanner';
import { BestSellers }  from './components/features/BestSellers';
import { RecentNews }   from './components/features/RecentNews';
import { BrandLogos }   from './components/features/BrandLogos';
import type { PromoBannerData } from './types';

const SUMMER_BANNER: PromoBannerData = {
  bg:          '#b71c1c',
  displayText: 'FIND YOUR STYLE',
  discount:    '20% Off',
  dateRange:   '13 Nov To 1 Dec',
  brand:       'Beats Solo Air',
  heading:     'Summer Sale',
  description: "Company that's grown from 270 to 460 employees in the last 12 months.",
  image:       'https://placehold.co/420x380/c62828/ffffff?text=Summer+Headphone',
  imageAlt:    'Beats Solo Air headphone — Summer Sale',
};

const HAPPY_BANNER: PromoBannerData = {
  bg:          '#1b5e20',
  displayText: 'HAPPY HOURS',
  discount:    '20% Off',
  dateRange:   '13 Nov To 1 Dec',
  brand:       'Beats Solo Air',
  heading:     'Summer Sale',
  description: "Company that's grown from 270 to 460 employees in the last 12 months.",
  image:       'https://placehold.co/420x380/2e7d32/ffffff?text=Happy+Smartwatch',
  imageAlt:    'Be@ts Smartwatch — Happy Hours Sale',
};

export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CategoryGrid />
        <TrustBadges />
        <PromoBanner {...SUMMER_BANNER} />
        <BestSellers />
        <PromoBanner {...HAPPY_BANNER} />
        <RecentNews />
        <BrandLogos />
      </main>
      <Footer />
    </>
  );
}