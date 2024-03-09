import Image from 'next/image';

export function TestiAvatar({ image }) {
  return (
    <div className="avatar">
      <div className="w-12 cursor-pointer">
        <Image width={92} height={92} alt="Testi Avatar" src={image} />
      </div>
    </div>
  );
}
