'use client';

import Slider from 'react-slick';
import { Cards } from '..';
import { SliderConfig } from '.';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRef } from 'react';

export function Sliders({ books }) {
  const slider = useRef(null);
  return (
    <>
      <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="btn hover:bg-blue hover:text-white p-2 rounded-full ml-5"
        >
          <FaAngleLeft className=" h-8 w-8 p-1" />
        </button>
        <button
          className="bg-blue text-white hover:text-slate-800 btn p-2 rounded-full ml-5"
          onClick={() => slider?.current?.slickNext()}
        >
          <FaAngleRight className=" h-8 w-8 p-1" />
        </button>
      </div>
      <Slider
        ref={slider}
        {...SliderConfig}
        className="overflow-hidden mt-10 space-x-5"
      >
        {books.map((item, idx) => (
          <Cards item={item} key={idx} />
        ))}
      </Slider>
    </>
  );
}
