"use client";
import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import Navbar from "@/app/components/Navbar/Navbar";
import Link from "next/link";
import React, { useState } from "react";

const SignInPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState(
    "You will use this when you log in and if you ever need to reset your password."
  );
  const [showEmailError, setShowEmailError] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [passwordMsg, setPasswordMsg] = useState(
    "Enter a combination of at least six numbers, letters and puntuation marks (such as ! and &)."
  );
  const [showPasswordError, setShowPasswordError] = useState(false);

  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
    if (userEmail !== "") {
      setEmailMsg("Looks Good!");
    }
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
    if (userPassword !== "") {
      setPasswordMsg("Looks Good!");
    }
  };

  const userFormSubmitHandler = (e) => {
    e.preventDefault();

    if (userEmail === "") {
      setShowEmailError(true);
    }

    if (userPassword === "") {
      setShowPasswordError(true);
    }
  };
  return (
    <div className="container-fliud">
      <Navbar />
      <Hero />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="my-5">
          <div className="">
            <div className="container-fluid mb-5">
              <div className="card mb-5 px-3" style={{ maxWidth: '350px' }}>
                <form onSubmit={userFormSubmitHandler}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="container my-3">
                          <h3 className="fw-bold fs-3">Sign In</h3>
                        </div>

                        <div className="container d-flex justify-content-center my-2">
                          <input
                            type="text"
                            value={userEmail}
                            onChange={userEmailHandler}
                            className="form-control rounded-0"
                            placeholder="Email"
                          />
                          <div className="position-absolute top-0 end-0">
                            {showEmailError && emailMsg !== "Looks Good!"}
                          </div>
                        </div>
                        <div className="container">
                          {showEmailError && (
                            <p
                              className={`text-white ${
                                emailMsg === "Looks Good!"
                                  ? "bg-success"
                                  : "bg-danger"
                              } fw-bold mx-2 my-1 px-2 rounded`}
                            >
                              {emailMsg}
                            </p>
                          )}
                        </div>
                        <div className="container d-flex justify-content-center my-2">
                          <input
                            type="password"
                            value={userPassword}
                            onChange={userPasswordHandler}
                            className="form-control rounded-0"
                            placeholder="Password"
                          />
                        </div>
                        <div className="container">
                          {showPasswordError && (
                            <p
                              className={`text-white ${
                                passwordMsg === "Looks Good!"
                                  ? "bg-success"
                                  : "bg-danger"
                              } fw-bold mx-2 my-1 px-2 rounded`}
                            >
                              {passwordMsg}
                            </p>
                          )}
                        </div>
                        <div className="container my-3">
                          <div className="form-check">
                            <input
                              className="form-check-input rounded-0 btn-color shadow-none"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckChecked"
                            >
                              Remember Me?
                            </label>
                          </div>
                        </div>
                        <div className="container text-center my-3 ">
                          <button
                            type="submit"
                            className="btn btn-color text-white rounded-0 w-100"
                          >
                            <Link
                              className="text-decoration-none text-white"
                              href={""}
                            >
                              Sign In
                            </Link>
                          </button>
                        </div>
                        <div className="container px-2 mb-4">
                          <div className="text-end">
                            <Link
                              href="/pages/userinput/forgot"
                              className="text-decoration-none"
                            >
                              <span className="fs-6 text-muted">
                                Forget Password?
                              </span>
                            </Link>
                          </div>
                          <div className="text-end mt-2">
                            <Link
                              href="/pages/userinput/signup"
                              className="text-decoration-none"
                            >
                              <span className="fs-6 text-muted">
                                Create Your Account
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;
