'use client';

import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { ButtonModal, Input } from '@/components/atoms';
import { Formik, Form } from 'formik';
import { loginSchema } from '@/schemas';
import useAuth from '@/features/useAuth';

export function Login() {
  const { login, signUpWithGoogle } = useAuth();

  const onSubmit = async (values, actions) => {
    // try {
    //   const { email, password } = values;
    //   alert('Signin successful!');
    //   actions.resetForm();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleGoogle = async () => {
    try {
      const result = await signUpWithGoogle();
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        photoURL: result?.user?.photoURL,
      };
      const res = await fetch('/api/auth/', {
        method: 'POST',
        body: JSON.stringify(userInfo),
      });
      if (res.ok) {
        document.getElementById('login').close();
        alert('Signin successful!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dialog id="login" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="card-body">
              <h3 className="font-bold text-lg">Please Login!</h3>
              <Input
                name="email"
                type="text"
                label="Email"
                placeholder="email"
              />
              <Input
                name="password"
                type="password"
                label="Password"
                placeholder="password"
              />
              <div className="form-control mt-4">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn bg-blue text-white"
                >
                  Login
                </button>
              </div>
              <div
                htmlFor="login"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById('login').close()}
              >
                ✕
              </div>
            </Form>
          )}
        </Formik>
        <ButtonModal label="Donot have an account?" title="Signup Now" />
        <div className="text-center space-x-3 mb-5">
          <button
            onClick={handleGoogle}
            className="btn btn-circle hover:bg-blue hover:text-white"
          >
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
