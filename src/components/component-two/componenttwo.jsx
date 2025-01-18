import React from 'react'
import { ObjTwo, Obj } from './mapcomponenttwo'
import { useFormik } from 'formik';
import './componenttwo.css'
function ComponentTwo() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      console.log('form value',values);
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = "required";
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = "required";
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)) {
        errors.password = 'Invalid password address';
      }
      return errors;
    }
  })
  console.log("form data", formik.errors);

  return (
    <div>
      <div className="back2">
        <div className="container1 back1122">
          <form className="form1" onSubmit={formik.handleSubmit}>
            <h2>Book now</h2>
            <div className="use1">
              <label className="l1">Email:</label
              ><input className="edit"
                type="email"
                name="email"
                placeholder="awaisraza2131@gmail.com"
                style={{ padding: "20px 10px" }}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div className="use2">
              <label className="l2">Type:</label
              ><input className="edit1"
                type="password"
                name="password"
                placeholder="personal"
                style={{ padding: "20px 10px" }}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            </div>
            <div className="big">
              <div className="use3">
                <label className="l3">Date-End:</label>
                {ObjTwo.map((All) =>
                  <select style={{ padding: "20px 8px" }}>
                    <option>{All.text1}</option>
                    <option>{All.text2}</option>
                    <option>{All.text3}</option>
                    <option>{All.text4}</option>
                    <option>{All.text5}</option>
                  </select>
                )}
              </div>
              <div className="use3extra">
                <label className="l4">Date-start:</label>
                {Obj.map((All) =>
                  <select style={{ padding: "20px 8px" }}>
                    <option>{All.text1}</option>
                    <option>{All.text2}</option>
                    <option>{All.text3}</option>
                    <option>{All.text4}</option>
                    <option>{All.text5}</option>
                  </select>
                )}
              </div>
            </div>
            <div className="use4">
              <input className="check" type="checkbox" name="policy" id="policy" value="policy" />
              <p>
                I agree to the<span className="color"> Terms of
                  Service</span> and <span className="color"> policy</span
                  >
                of Cospace company
              </p>
            </div>
            <button type="button" className="use5">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export { ComponentTwo }