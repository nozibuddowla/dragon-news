import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
        <h2 className="font-semibold text-2xl text-center">
          Register an account
        </h2>
        <hr className="my-4 text-base-300" />
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Name"
            />

            <label className="label">Photo URL </label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Photo"
            />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-5">
              Already have an account?{" "}
              <Link className="text-secondary " to="/auth/login">
                Login
              </Link>{" "}
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
