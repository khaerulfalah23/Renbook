import Image from 'next/image';

export function Reviews({ title, image, author, cn }) {
  return (
    <div
      className={`${cn} bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-60`}
    >
      <Image
        width={70}
        height={104.45}
        src={image}
        alt={title}
        className="rounded-2xl object-cover"
      />
      <div className="space-y-1">
        <h5>{title}</h5>
        <div className="rating rating-sm">
          <input
            type="radio"
            className="mask mask-star-2 bg-orange-500"
            readOnly
          />
          <input
            type="radio"
            className="mask mask-star-2 bg-orange-500"
            readOnly
          />
          <input
            type="radio"
            className="mask mask-star-2 bg-orange-500"
            checked
            readOnly
          />
          <input type="radio" className="mask mask-star-2 bg-orange-400" />
          <input
            type="radio"
            className="mask mask-star-2 bg-orange-400"
            readOnly
          />
        </div>
        <p className="text-red">{author}</p>
      </div>
    </div>
  );
}
