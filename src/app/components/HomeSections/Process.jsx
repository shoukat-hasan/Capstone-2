import Image from "next/image";
import React from "react";
import play from "../assets/play.svg";

const Process = () => {
  const contentData = [
    {
      title: "Restaurant Active Process",
      description: "Document Every Food Bean Process until it is saved.",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna.",
      buttonText: "Read More",
      playVideoText: "Play Video",
    },
  ];
  return (
    <div className="container-fluid my-5">
      <div className="row processBg">
        <div className="col-sm-6"></div>
        <div className="col-sm-6 text-end my-5 px-5">
          {contentData.map((item, index) => (
            <div key={index} className="mb-4">
              <div>
                <p className="primary-color fs-4 Great-Vibes">{item.title}</p>
              </div>
              <div>
                <p className="fs-2 fw-bold text-sm-white">
                  <span className="primary-color fs-2 fw-bold">We </span>
                  {item.description}
                </p>
              </div>
              <div>
                <p className="fs-6">{item.para}</p>
              </div>
              <div className="container">
                <button
                  type="button"
                  className="btn search-bar rounded-pill text-white mx-5 my-2 px-5 py-2"
                >
                  {item.buttonText}
                </button>
                <Image src={play} alt="play" className="img-fluid me-2" />
                {item.playVideoText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
