import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import { Button, FormGroup, Label, Input } from "reactstrap";
import * as Yup from "yup";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { render } from "react-dom";
// import styled from "styled-components";

const StoryForm = ({ errors, touched, values, status }) => {
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
    <div className="story-form center">
      <h1 className="main-header">
        {" "}
        We would love to hear about your journey!{" "}
      </h1>
      <h2 className="sub-header">
        Fill out the form below and someone from our amazing admin team will
        contact you
      </h2>
      <Form>
        <h1 className="header"> Submit your Story below</h1>
        <label className="text-container">Full Name</label>
        <Field
          component="input"
          type="text"
          name="name"
          placeholder="Full Name"
        />

        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <label className="text-container">Photo</label>

        <button className="SignUpButton">Attach</button>
        {touched.photo && errors.photo && (
          <p className="error">{errors.photo}</p>
        )}
        <label className="text-container">Story Title</label>
        <Field
          component="input"
          type="text"
          name="title"
          placeholder="Story Title"
        />
        {touched.title && errors.title && (
          <p className="error">{errors.title}</p>
        )}
        <label className="text-container">Tell us about your story</label>
        <Field
          component="textarea"
          type="text"
          name="story"
          placeholder="Story"
        />
        {touched.story && errors.story && (
          <p className="error">{errors.story}</p>
        )}

        <button className="SignUpButton" type="submit">
          Submit!
        </button>

        <NavLink to="/">
          <button className="SignUpButton">Back</button>
        </NavLink>
      </Form>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ name, photo, title, story }) {
    return {
      name: name || "",
      photo: photo || "",
      title: title || "",
      story: story || false
    };
  },
  // validationSchema: Yup.object().shape({
  //   name: Yup.string().required("not a good input"),
  //   email: Yup.number().required(),
  //   password: Yup.string().required("please enter a password")
  // }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post(
        "https://refugee-stories-backend-1.herokuapp.com/submitStory",
        values
      )
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data);
        localStorage.setItem("token", res.data.token);
        resetForm();
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});
const OnboardingFormWithFormik = formikHOC(StoryForm);

export default OnboardingFormWithFormik;

// const token = localStorage.getItem("token");
// axios.post("https://disney-parents-buddy.herokuapp.com/api/posts", post, {
//   headers: { Authorization: token }
// });
