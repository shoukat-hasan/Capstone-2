import Link from "next/link";
import React from "react";


const LinksSection = () => {
  const links = [
    { text: 'About', href: '/' },
    { text: 'News', href: '/' },
    { text: 'Partners', href: '/' },
    { text: 'Team', href: '/' },
    { text: 'Menu', href: '/' },
    { text: 'Contact', href: '/' },
  ];
  return (
    <div className="col-lg-2 mb-5">
      <span className="fs-5 fw-bold">Useful Links</span>
      <div className="list-group mt-3">
      {links.map((link) => (
          <Link href={link.href} className="text-decoration-none text-white my-2">
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinksSection;
