'use client';

import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { ButtonModal, Input } from '@/components/atoms';
import { Formik, Form } from 'formik';
import { loginSchema } from '@/schemas';
import useAuth from '@/hooks/useAuth';
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase.config';

export function Login() {
  const { login, signUpWithGoogle } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (values, action) => {
    try {
      const { email, password } = values;
      const result = await login(email, password);
      if (result) {
        action.resetForm();
        setErrorMessage('');
        document.getElementById('login').close();
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
      console.log(error);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      const result = await signUpWithGoogle();
      const ref = doc(db, 'users', result.user.uid);
      setDoc(ref, { name: result.user.displayName, role: 'user' })
        .then(() => {
          document.getElementById('login').close();
          setErrorMessage('');
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      setErrorMessage(error.message);
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
            onClick={handleLoginGoogle}
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
