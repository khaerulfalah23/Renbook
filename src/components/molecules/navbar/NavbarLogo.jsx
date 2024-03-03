import { NavbarToggle } from '@/components/atoms';
import Image from 'next/image';
import Link from 'next/link';

export function NavbarLogo() {
  return (
    <nav className="navbar-start">
      <NavbarToggle />
      <Link href="/">
        <Image src="/Logo.svg" alt="logo" width={123} height={30} />
      </Link>
    </nav>
  );
}
