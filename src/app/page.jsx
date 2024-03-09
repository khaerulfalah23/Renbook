import {
  Hero,
  Categories,
  SpecialBooks,
  Testimonials,
  OurServices,
} from '@/components/organisms';

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <SpecialBooks />
      <Testimonials />
      <OurServices />
    </div>
  );
}
