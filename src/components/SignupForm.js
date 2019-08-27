import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import { Button, FormGroup, Label, Input } from "reactstrap";
import * as Yup from "yup";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SignupForm = ({ errors, touched, values, status }) => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  //   )
  // };

  return (
    <div className="register-form center">
      <Form>
        <h1 className="header"> Sign up to submit a story!</h1>
        <label className="text-container">First Name</label>
        <Field
          component="input"
          type="text"
          name="firstname"
          placeholder="First Name"
        />

        {touched.firstname && errors.firstname && (
          <p className="error">{errors.firstname}</p>
        )}
        <label className="text-container">Last Name</label>
        <Field
          component="input"
          type="text"
          name="lastname"
          placeholder="Last Name"
        />
        {touched.lastname && errors.lastname && (
          <p className="error">{errors.lastname}</p>
        )}
        <label className="text-container">Email</label>
        <Field component="input" type="text" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <label className="text-container">Password</label>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <label className="checkbox-container">
          I would like to join the mailing list
          <Field type="checkbox" name="mail" checked={values.terms} />
          <span className="checkmark" />
        </label>

        <button>Sign Up!</button>
      </Form>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ firstname, lastname, email, password, list }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      email: email || "",
      password: password || "",
      list: list || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("not a good input"),
    email: Yup.number().required(),
    password: Yup.string().required("please enter a password")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://refugee-stories-backend-bw.herokuapp.com/signup", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});
const OnboardingFormWithFormik = formikHOC(SignupForm);

export default OnboardingFormWithFormik;
