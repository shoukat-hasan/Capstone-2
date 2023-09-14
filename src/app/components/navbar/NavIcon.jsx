import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavIcon = (props) => {
  return (
    <div className="icon-link">
      <Link href={props.href}>
        <Image src={props.icon} alt={props.altText} className="mx-2" />
      </Link>
    </div>
  );
};

export default NavIcon;
