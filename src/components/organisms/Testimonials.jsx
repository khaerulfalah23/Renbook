import { TestiImage, TestiTitle } from '../molecules';

export function Testimonials() {
  return (
    <div className="section-container my-16 md:my-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <TestiImage />
        <TestiTitle />
      </div>
    </div>
  );
}
