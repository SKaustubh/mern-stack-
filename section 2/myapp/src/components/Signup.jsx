import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate, } from "react-router-dom";
import Swal from "sweetalert2";

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")

    .required("Password is Required"),
});
const Signup=() =>{
  // initalise the formik
const nav=useNavigate();
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      setTimeout(() => {
        console.log("Form is submitted ", values);
        setSubmitting(false);
      }, 3000);

      console.log(values);

      // send the data to the server

      const res = await fetch("http://localhost:5000/user/add", {
        method: "POST",
        body: JSON.stringify(values), // in this we are converting js to json using stringify
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);
      if(res.status===200)
      {
        Swal.fire({
          icon: 'success',
          title: 'Nice',
          text:'You have signed successfully'
        })
       nav('/')
      }
      
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
  },
    validationSchema: SignupSchema,
  });


  const uploadFile =async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    console.log(file);
     
    const fd=new FormData();
    fd.append('myfile' ,file);

    const res = await fetch('http://localhost:5000/utils/uploadfile',{
      method:'POST',
      body:fd
    });
   console.log(res.status);
  }

  return (
    <section className="vh-75 bg-danger">
      <div className="container h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-white "
              style={{ borderRadius: 25, backgroundColor: "#2a2a2957" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form
                      className="mx-1 mx-md-4"
                      onSubmit={signUpForm.handleSubmit}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <span style={{ fontsize: "0.8em", color: "skyblue" }}>
                            {signUpForm.touched.name && signUpForm.errors.name}
                          </span>
                          <input
                            type="text"
                            name="name"
                            onChange={signUpForm.handleChange}
                            value={signUpForm.values.name}
                            className="form-control"
                            placeholder="e.g.  King"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <span style={{ fontsize: "0.8em", color: "skyblue" }}>
                            {signUpForm.touched.email &&
                              signUpForm.errors.email}
                          </span>
                          <input
                            type="email"
                            name="email"
                            onChange={signUpForm.handleChange}
                            value={signUpForm.values.email}
                            className="form-control"
                            placeholder="e.g.  king@example.com"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <span style={{ fontsize: "0.8em", color: "skyblue" }}>
                            {signUpForm.touched.password &&
                              signUpForm.errors.password}
                          </span>
                          <input
                            type="password"
                            name="password"
                            onChange={signUpForm.handleChange}
                            value={signUpForm.values.password}
                            className="form-control"
                            placeholder="e.g. pasword234"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            placeholder="e.g. pasword234"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                        </div>
                      </div>
                      <div className="form-check d-flex  mb-5">
                        <input
                          className="form-check-input me-2 "
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label">
                          I agree all statements in{" "}
                          <Link to="/Signup">Terms of service</Link>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center align-content-center  mb-3 mb-lg-4">
                        <button
                          disabled={signUpForm.isSubmitting}
                          type="submit"
                          className="btn btn-primary btn-lg w-100"
                        >
                          {signUpForm.isSubmitting ? (
                            <>
                              <span
                                class="spinner-border spinner-border-sm"
                                aria-hidden="true"
                              ></span>
                              <span class="visually-hidden" role="status">
                                Loading...
                              </span>
                            </>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">
                    <img
                      src="https://c4.wallpaperflare.com/wallpaper/127/164/7/kid-luffy-monkey-d-luffy-one-piece-anime-hd-wallpaper-preview.jpg"
                      className="img-fluid"
                      alt=""
                      style={{ height: 500, width: 500, margin: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
