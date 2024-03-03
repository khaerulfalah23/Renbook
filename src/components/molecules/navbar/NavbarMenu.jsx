import { NavbarLink } from '@/components/atoms';

export function NavbarMenu() {
  return (
    <nav className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <NavbarLink />
      </ul>
    </nav>
  );
}
