import Link from "next/link";
import React from "react";

const NavLink = (props) => {
  
  return (
    <li className="nav-item mx-2">
      <Link href={props.href} className="nav-link text-white">
        {props.text}
      </Link>
    </li>
  );
};

export default NavLink;
