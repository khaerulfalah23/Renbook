import { CategoryCard, CategoryText, dataCategory } from '../molecules';

export function Categories() {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16">
      <CategoryText />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 ">
        {dataCategory.map((category, idx) => (
          <CategoryCard key={idx} {...category} />
        ))}
      </div>
    </div>
  );
}
