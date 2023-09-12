import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import UseAppContext from "../AppContext";

const Login = () => {

const {setLoggedin} = UseAppContext();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(values), // in this we are converting js to json using stringify
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login successful",
        });

        const data = await res.json();
        console.log(data);

        sessionStorage.setItem('user',JSON.stringify(data));  // set the token in the session storage

        setLoggedin(true);
        
      } else if (res.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
  });

  return (
    <section className="vh-100" style={{ backgroundColor: "yellow" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={loginForm.handleSubmit}>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  onChange={loginForm.handleChange}
                  className="form-control form-control-lg"
                  placeholder="e.g.  kriti@gmail.com"
                />
                <label className="form-label">Email address</label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                  className="form-control form-control-lg"
                  placeholder="**********"
                />
                <label className="form-label">Password</label>
              </div>
              <div className="d-flex justify-content-left  align-items-center mb-4">
                {/* Checkbox */}
                <div className="form-check me-5 ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="form1Example3"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <Link to="/Login">Forgot password?</Link>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign in
              </button>
              <div className="divider justify-content-evenly d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              <Link
                className="btn btn-primary btn-lg btn-block m-3 rounded-pill"
                style={{ backgroundColor: "#3b5998" }}
                to="/Login"
                role="button"
              >
                Continue with Facebook
              </Link>
              <Link
                className="btn btn-primary btn-lg  rounded-pill"
                style={{ backgroundColor: "#55acee" }}
                to="/Login"
                role="button"
              >
                Continue with Twitter
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
