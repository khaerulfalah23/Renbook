'use client';
import { useState } from 'react';
import { ButtonModal, Input } from '@/components/atoms';
import { signUpSchema } from '@/schemas';
import { Form, Formik } from 'formik';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { db } from '@/firebase/firebase.config';
import { doc, setDoc } from 'firebase/firestore';
import useAuth from '@/features/useAuth';

export function SignUp() {
  const { createUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = async (values) => {
    try {
      const { name, email, password } = values;
      const result = await createUser(email, password);
      const ref = doc(db, 'users', result.user.uid);
      setDoc(ref, { name })
        .then(() => {
          document.getElementById('signup').close();
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      setErrorMessage('Email already in use');
      console.log(error);
    }
  };
  return (
    <dialog id="signup" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={signUpSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="card-body">
              {errorMessage && (
                <div role="alert" className="alert alert-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}
              <h3 className="font-bold text-lg">Please Create An Account!</h3>
              <Input name="name" type="text" label="Name" placeholder="name" />
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
                  Sign up
                </button>
              </div>
              <div
                htmlFor="signup"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById('signup').close()}
              >
                ✕
              </div>
            </Form>
          )}
        </Formik>
        <ButtonModal label="Have an account?" title="Login" />
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
