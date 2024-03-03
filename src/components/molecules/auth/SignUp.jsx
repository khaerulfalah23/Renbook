import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

export function SignUp() {
  return (
    <dialog id="signup" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <form className="card-body" method="dialog">
          <h3 className="font-bold text-lg">Please Create An Account!</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
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
          </div>
          <div className="form-control mt-4">
            <input
              type="submit"
              className="btn bg-blue text-white"
              value="Sign up"
            />
          </div>
          <div
            htmlFor="signup"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('signup').close()}
          >
            ✕
          </div>
          <p className="text-center my-2">
            Have an account?
            <button
              onClick={() => document.getElementById('login').showModal()}
              className="underline text-red ml-1"
            >
              Login here
            </button>
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
