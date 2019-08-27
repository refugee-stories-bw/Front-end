import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import * as Yup from "yup";
import axios from "axios";
// import { Link } from "react-router-dom";

const LoginX = ({ errors, touched, values, status }) => {
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
    <div className="user-form">
      <Form>
        <h1 className="header"> Login to submit a story or --> </h1>
        <label className="text-container">User Name</label>
        <Field component="input" type="text" name="username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <label className="text-container">Password</label>
        <Field component="input" type="password" name="password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <label className="checkbox-container">
          I have read the "Terms of Service"
          <Field type="checkbox" name="mail" checked={values.terms} />
          <span className="checkmark" />
        </label>

        <button>Login</button>
      </Form>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ name, password }) {
    return {
      username: name || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("not a good input"),
    password: Yup.string().required("please enter a password")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://refugee-stories-backend-bw.herokuapp.com/login", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});

const LoginFormik = formikHOC(LoginX);

export default LoginFormik;
