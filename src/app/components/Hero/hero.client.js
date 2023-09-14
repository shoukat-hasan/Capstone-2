"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const HeroClient = () => {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    // Get the current page title based on the path
    const pathSegments = window.location.pathname.split("/");
    const currentPath = pathSegments[pathSegments.length - 1];

    const capitalizedTitle = capitalizeFirstLetter(currentPath);

    // Set the page title based on the current path
    setPageTitle(`${capitalizedTitle}`);
  }, []);

  return (
    <div className="container-fluid hero">
      <div className="container text-center text-white p-5">
        <div className="row">
          <div className="col-lg-12 p-5">
            <h1 className="fs-4">{pageTitle} Page</h1>
            <nav
              style={{ "--bs-breadcrumb-divider": ">" }}
              aria-label="breadcrumb"
              className="d-flex justify-content-center"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item greater-sign">
                  <Link
                    href="/"
                    className="text-decoration-none text-white fs-6"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active primary-color fs-6"
                  aria-current="page"
                >
                  {pageTitle}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroClient;
