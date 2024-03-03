'use client';

import { useEffect, useState } from 'react';
import { NavbarFeature, NavbarLogo, NavbarMenu } from '../molecules/navbar';

export function Navbar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? 'shadow-md bg-base-100 transition-all duration-300 ease-in-out'
            : ''
        }`}
      >
        <NavbarLogo />
        <NavbarMenu />
        <NavbarFeature />
      </div>
    </header>
  );
}
