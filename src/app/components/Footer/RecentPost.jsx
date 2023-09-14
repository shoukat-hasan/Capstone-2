import Image from "next/image";
import React from "react";

const RecentPost = (data) => {
  
  return (
    <div className="container mt-3 d-flex justify-content-center">
      <Image src={data.imageSrc} alt="Post Image" className="img-fluid" />
      <div className="card-body p-2">
        <span>{data.title}</span>
        <p className="text-white-50">{data.date}</p>
      </div>
    </div>
  );
};

export default RecentPost;
