'use client';
import { ButtonModal, Input } from '@/components/atoms';
import { signUpSchema } from '@/schemas';
import { Form, Formik } from 'formik';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '@/features/useAuth';

export function SignUp() {
  const { createUser } = useAuth();
  const onSubmit = (values, actions) => {
    const { name, email, password } = values;
    createUser(name, email, password);
    actions.resetForm();
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
