import Link from 'next/link';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

export function Login() {
  return (
    <dialog id="login" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <form className="card-body" method="dialog">
          <h3 className="font-bold text-lg">Please Login!</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link href="/" className="label-text-alt link link-hover mt-2">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-4">
            <input
              type="submit"
              className="btn bg-blue text-white"
              value="Login"
            />
          </div>
          <div
            htmlFor="login"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('login').close()}
          >
            ✕
          </div>
          <p className="text-center my-2">
            Donot have an account?
            <Link href={'/'} className="underline text-red ml-1">
              Signup Now
            </Link>
          </p>
        </form>
        <div className="text-center space-x-3 mb-5">
          <button className="btn btn-circle hover:bg-blue hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-blue hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-blue hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </dialog>
  );
}
