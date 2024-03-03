export function HeroText() {
  return (
    <div className="md:w-1/2 px-4 md:px-2 lg:px-0 space-y-4 md:space-y-7">
      <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold md:leading-normal leading-tight">
        Read Books to increase your
        <span className="text-blue"> knowledge</span>
      </h2>
      <p className="text-[#4A4A4A] text-lg">
        Books are windows to the world <br /> and reading is the key to opening
        them
      </p>
      <button className="bg-blue font-semibold btn text-white px-8 py-3 rounded-full drop-shadow-[0_10px_10px_rgba(137,207,240,0.50)]">
        Order Now
      </button>
    </div>
  );
}
