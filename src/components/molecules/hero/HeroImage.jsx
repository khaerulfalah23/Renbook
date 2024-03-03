import { Reviews } from '@/components/atoms';
import Image from 'next/image';

export function HeroImage() {
  return (
    <div className="w-3/4 md:w-1/2">
      <Image src={'/Hero.svg'} priority width={694} height={666} alt="hero" />
      <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
        <Reviews
          title="Atomic Habits"
          image="/atomichabits.jpg"
          author="James Clear"
        />
        <Reviews
          title="Design Thinking"
          image="/designthinking.jpg"
          author="Prof. Yassierli"
          cn="hidden lg:flex"
        />
      </div>
    </div>
  );
}
