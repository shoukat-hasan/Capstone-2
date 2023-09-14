import Image from "next/image";
import React from "react";

const SocialIcon = (props) => {
  return (
    <div className="card social-icon bg-white mt-2 mx-3 p-1">
      <Image src={props.src} alt={props.alt} className="img-fluid" />
    </div>
  );
};

export default SocialIcon;
