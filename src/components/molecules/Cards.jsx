import Image from 'next/image';

export function Cards({ item }) {
  return (
    <div className="card shadow-xl relative mr-5 md:my-5">
      <figure>
        <Image
          src={item.image}
          width={288}
          height={288}
          alt={item.name}
          className="hover:scale-105 cursor-pointer rounded-xl transition-all duration-300 md:h-72"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}!</h2>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$ </span> {item.price}
          </h5>
          <button className="btn bg-blue text-white">Add to Cart </button>
        </div>
      </div>
    </div>
  );
}
