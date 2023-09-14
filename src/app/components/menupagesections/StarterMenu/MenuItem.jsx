import React from "react";
import Link from "next/link";

function MenuItem({ title, description, calories, price }) {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="container">
          <Link
            href="#"
            className="fs-5 fw-bold text-decoration-none text-black nav-link"
          >
            {title}
            <p className="fs-6">{description}</p>
          </Link>
          <p className="fs-6 text-muted">{calories}</p>
        </div>
        <div className="ms-5">
          <h5 className="fw-bold primary-color text-end">{price}</h5>
        </div>
      </div>
      <hr className="text-muted" />
    </div>
  );
}

export default MenuItem;