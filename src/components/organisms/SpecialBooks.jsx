'use client';

import { Sliders, SpecialBookTitle } from '../molecules';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function SpecialBooks() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch('/databooks.json')
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === 'popular');
        setbooks(specials);
      });
  }, []);

  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative">
        <SpecialBookTitle />
        <Sliders books={books} />
      </div>
    </div>
  );
}
