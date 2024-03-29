import { HeroImage, HeroText } from '../molecules';

export function Hero() {
  return (
    <section className="max-w-screen-2xl container mx-auto px-3 xl:px-24">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        <HeroImage />
        <HeroText />
      </div>
    </section>
  );
}
