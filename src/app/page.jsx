import {
  Categories,
  Hero,
  SpecialBooks,
  Testimonials,
} from '@/components/organisms';

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <SpecialBooks />
      <Testimonials />
    </div>
  );
}
