import { TestiAvatar, TestiFeedback } from '@/components/atoms';

const image = [
  '/testimonials/testimonial1.png',
  '/testimonials/testimonial2.png',
  '/testimonials/testimonial3.png',
];

export function TestiTitle() {
  return (
    <div className="md:w-1/2">
      <div className="text-left md:w-4/5">
        <p className="subtitle">Testimonials</p>
        <h2 className="title">What Our Customers Say About Us</h2>
        <blockquote className="my-5 text-secondary leading-[30px]">
          “I loved buying books on renbook, and I still do now raving about the
          experience! Attention to detail inside perfect presentation and
          service”
        </blockquote>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            {image.map((image, idx) => (
              <div className="avatar" key={idx}>
                <div className="w-12 cursor-pointer">
                  <TestiAvatar image={image} />
                </div>
              </div>
            ))}
          </div>
          <TestiFeedback
            title={'Customer Feedback'}
            rating={'4.9'}
            reviews={'18.6k'}
          />
        </div>
      </div>
    </div>
  );
}
