import { FaStar } from 'react-icons/fa';

export function TestiFeedback({ title, rating, reviews }) {
  return (
    <div className="space-y-1">
      <h5 className="text-lg font-semibold">{title}</h5>
      <div className="flex items-center gap-2">
        <FaStar className="text-yellow-400" />{' '}
        <span className="font-medium">{rating}</span>{' '}
        <span className="text-[#807E7E]">({reviews} Reviews)</span>
      </div>
    </div>
  );
}
