import Image from 'next/image';

export function OurServiceCard({ service }) {
  const { img, title, des } = service;
  return (
    <div className="shadow-md rounded-[30px] py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-[#6193AA] transition-all duration-200">
      <Image
        width={64}
        height={64}
        src={img}
        alt="icon our services"
        className="mx-auto"
      />
      <h5 className="pt-3 font-semibold text-blue"> {title}</h5>
      <p className="text-[#6193AA]">{des}</p>
    </div>
  );
}
