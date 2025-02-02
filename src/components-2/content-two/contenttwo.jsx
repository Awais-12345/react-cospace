import React from 'react';
import { useFormik } from 'formik';
import './contenttwo.css';

const ContentTwo = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('form value', values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    },
  });

  return (
    <div className="Container-fluid  background mb-5">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-md-6">
            <form className="p-4 bg-black opacity-75 rounded0" onSubmit={formik.handleSubmit}>
              <h2 className="text-center text-white fw-bold mb-4">Book a Tour</h2>

              {/* Email Input */}
              <div className="mb-3 text-white">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
                  placeholder="example@gmail.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
              </div>

              {/* Password Input */}
              <div className="mb-3 text-white">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className={`form-control ${formik.errors.password ? 'is-invalid' : ''}`}
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
              </div>

              {/* Date Selection */}
              <div className="row mb-3 text-white">
                <div className="col-6">
                  <label className="form-label">Date-End:</label>
                  <select className="form-select">
                    <option>Select Date</option>
                    {/* Map options dynamically */}
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label">Date-Start:</label>
                  <select className="form-select">
                    <option>Select Date</option>
                    {/* Map options dynamically */}
                  </select>
                </div>
              </div>

              {/* Checkbox */}
              <div className="form-check mb-3 text-white">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="policy"
                  name="policy"
                />
                <label htmlFor="policy" className="form-check-label">
                  I agree to the <span className="text-success">Terms of Service</span> and{' '}
                  <span className="text-success">Privacy Policy</span> of cospace company
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-success w-100 py-2 fw-bold text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContentTwo };
