import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";

const SignupForm = ({ errors, touched, status }) => {
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
        <label className="text-container">Username</label>
        <Field
          component="input"
          type="text"
          name="username"
          placeholder="Username"
        />
        {touched.username && errors.username && (
          <p className="error">{errors.email}</p>
        )}
        <label className="text-container">Password</label>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button className="SignUpButton" type="submit">
          Sign Up!
        </button>
      </Form>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  // validationSchema: Yup.object().shape({
  //   name: Yup.string().required("not a good input"),
  //   email: Yup.number().required(),
  //   password: Yup.string().required("please enter a password")
  // }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://refugee-stories-backend-1.herokuapp.com/signup", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data);
        localStorage.setItem("token", res.data.token);
        resetForm();
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});
const OnboardingFormWithFormik = formikHOC(SignupForm);

export default OnboardingFormWithFormik;
