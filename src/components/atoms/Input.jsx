'use client';

import { useField } from 'formik';
export function Input({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...field}
        {...props}
        className={`input input-bordered ${meta.error ? 'input-error' : ''}`}
      />
      {meta.error && (
        <div className="label">
          <span className="label-text-alt text-red">{meta.error}</span>
        </div>
      )}
    </div>
  );
}
