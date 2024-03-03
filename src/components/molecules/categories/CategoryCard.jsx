export function CategoryCard({ image, title, description }) {
  return (
    <div className="shadow-lg rounded-3xl bg-white py-6 px-5 w-full mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10">
      <div className="w-full mx-auto flex items-center justify-center">
        <img
          src={image}
          alt=""
          className="bg-[#B8E2F6] p-5 rounded-full w-28 h-28"
        />
      </div>
      <div className="mt-5 space-y-1">
        <h5 className="text-[#1E1E1E] font-semibold">{title}</h5>
        <p className="text-secondary text-sm">{description}</p>
      </div>
    </div>
  );
}
