import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {

// initalise the formik

const signUpForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    }
});


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
                    <form className="mx-1 mx-md-4" onSubmit={
                        signUpForm.handleSubmit
                    }>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
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
                        type="submit"
                          className="btn btn-primary btn-lg w-100"
                        >
                          Register
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
