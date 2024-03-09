import Image from 'next/image';

export function TestiImage() {
  return (
    <div className="md:w-1/2">
      <Image
        width={620}
        height={427.35}
        alt="Testi Image"
        src="/testimonials/Testimonial.svg"
      />
    </div>
  );
}
