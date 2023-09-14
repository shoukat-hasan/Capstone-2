import React from "react";
import BottomFooter from "./BottomFooter";
import SupportTextSection from "./SupportTextSection";
import SubscriptionSection from "./SubscriptionSection";
import AboutUsSection from "./AboutUsSecton";
import LinksSection from "./LinkSection";
import HelpSection from "./HelpSection";
import Mayo from "../assets/mayo sauce.svg";
import RecentPost from "./RecentPost";

const Footer = () => {
  const recentPosts = [
    {
      title: "Is fast food good for your body?",
      date: "February 28, 2022",
      imageSrc: Mayo,
    },
  ];
  return (
    <div className="container-fluid bg-black mb-0 text-white">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <SupportTextSection />
          <SubscriptionSection />
          <hr className="primary-color" />
        </div>
      </div>
      <div className="container my-5 text-white">
        <div className="row d-flex justify-content-center">
          <AboutUsSection />
          <LinksSection />
          <HelpSection />
          <div className="col-lg-4 mt-3">
            {recentPosts.map((post, index) => (
              <React.Fragment key={index}>
                <RecentPost
                  title={post.title}
                  date={post.date}
                  imageSrc={post.imageSrc}
                />
                <RecentPost
                  title={post.title}
                  date={post.date}
                  imageSrc={post.imageSrc}
                />
                <RecentPost
                  title={post.title}
                  date={post.date}
                  imageSrc={post.imageSrc}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default Footer;
