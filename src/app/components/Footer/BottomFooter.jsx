import React from "react";
import FacebookIcon from "../assets/Facebook Icon.svg";
import TwitterIcon from "../assets/Twitter Icon.svg";
import InstagramIcon from "../assets/Instagram Icon.svg";
import YoutubeIcon from "../assets/Youtube Icon.svg";
import PinterestIcon from "../assets/Pinterest Icon.svg";
import SocialIcon from "./SocialIcon";

const BottomFooter = () => {
  return (
    <footer className="container-fluid bg-gray-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <p className="p-2 my-2">
              Copyright © 2022 by Ayeman. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center">
              <SocialIcon src={FacebookIcon} alt="Facebook" />
              <SocialIcon src={TwitterIcon} alt="Twitter" />
              <SocialIcon src={InstagramIcon} alt="Instagram" />
              <SocialIcon src={YoutubeIcon} alt="Youtube" />
              <SocialIcon src={PinterestIcon} alt="Pinterest" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default BottomFooter;
