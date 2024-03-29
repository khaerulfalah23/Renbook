import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Login, SignUp } from '../auth';
import useAuth from '@/hooks/useAuth';
import { NavbarProfile } from '@/components/atoms';

export function NavbarFeature() {
  const { user } = useAuth();
  return (
    <nav className="navbar-end ">
      {user ? (
        <>
          <Link href="/">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle flex items-center justify-center mr-3"
            >
              <div className="indicator mr-1 mt-1">
                <FiShoppingCart className="w-5 h-5" />
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </label>
          </Link>
          <NavbarProfile user={user} />
        </>
      ) : (
        <button
          onClick={() => document.getElementById('login').showModal()}
          className="btn flex items-center gap-2 rounded-full px-6 bg-blue text-white"
        >
          <FaRegUser /> Login
        </button>
      )}
      <Login />
      <SignUp />
    </nav>
  );
}
