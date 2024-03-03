import { NavbarLink } from '.';
import { HiMenuAlt2 } from 'react-icons/hi';

export function NavbarToggle() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <HiMenuAlt2 className="text-2xl" />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <NavbarLink />
      </ul>
    </div>
  );
}
