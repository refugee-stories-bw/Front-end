import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import { Button, FormGroup, Label, Input } from "reactstrap";
import * as Yup from "yup";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { render } from "react-dom";

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
        <label className="text-container">Photo</label>
        <Field
          component="input"
          type="text"
          name="photo"
          placeholder="Photo Title"
        />
        <button>Attach</button>
        {touched.photo && errors.photo && (
          <p className="error">{errors.photo}</p>
        )}
        <label className="text-container">Title</label>
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
          name="notes"
          placeholder="Story"
        />
        {touched.notes && errors.notes && (
          <p className="error">{errors.notes}</p>
        )}

        {/* <label className="text-container">Password</label>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <label className="checkbox-container">
          I would like to join the mailing list
          <Field type="checkbox" name="mail" checked={values.terms} />
          <span className="checkmark" />
        </label> */}

        <button>Submit!</button>

        <NavLink to="/">
          <button>Back</button>
        </NavLink>
      </Form>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ firstname, lastname, email, photo, title, story }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      email: email || "",
      photo: photo || "",
      title: title || "",
      story: story || false
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
const OnboardingFormWithFormik = formikHOC(StoryForm);

export default OnboardingFormWithFormik;

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex"
};

class App extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: []
    };
  }

  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    this.setState({ files: [...this.state.files, ...filesArr] });
  }

  removeFile(f) {
    this.setState({ files: this.state.files.filter(x => x !== f) });
  }

  render() {
    return (
      <div style={styles}>
        <label className="custom-file-upload">
          <input type="file" multiple onChange={this.onChange} />
          <i className="fa fa-cloud-upload" /> Attach
        </label>
        {this.state.files.map(x => (
          <div className="file-preview" onClick={this.removeFile.bind(this, x)}>
            {x.name}
          </div>
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
