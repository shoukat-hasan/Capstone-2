import Link from "next/link";
import React from "react";

const HelpSection = () => {
  const helpLinks = [
    { text: "FAQ", href: "/" },
    { text: "Terms & Conditions", href: "/" },
    { text: "Reporting", href: "/" },
    { text: "Documentation", href: "/" },
    { text: "Support Policy", href: "/" },
    { text: "Privacy", href: "/" },
  ];
  return (
    <div className="col-lg-2 mb-5">
      <span className="fs-5 fw-bold">Useful Links</span>
      <div className="list-group mt-3">
        {helpLinks.map((link) => (
          <Link
            href={link.href}
            className="text-decoration-none text-white my-2"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
