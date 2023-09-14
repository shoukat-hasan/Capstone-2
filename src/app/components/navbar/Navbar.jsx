import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import NavIcon from "./NavIcon";
import Search from "../assets/Search.svg";
import User from "../assets/User.svg";
import Cart from "../assets/cart.svg";

const Navbar = () => {
  const NavList = {
    home: "Home",
    menu: "Menu",
    blog: "Blog",
    pages: "Pages",
    about: "About",
    shop: "Shop",
    contact: "Contact",
  };
  return (
    <div className="container-fluid bg-color">
      <div className="container text-white">
        <nav className="navbar navbar-expand-lg bg-black">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link className="navbar-brand text-white fw-bold" href="/">
                Food<span className="primary-color">tuck</span>
              </Link>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <NavLink href="/" text="Home" />
                <NavLink href="/pages/menu" text={NavList.menu} />
                <NavLink href="/pages/blog" text={NavList.blog} />
                <NavLink href="/pages/pages" text={NavList.pages} />
                <NavLink href="/pages/about" text={NavList.about} />
                <NavLink href="/pages/shop" text={NavList.shop} />
                <NavLink href="/pages/contact" text={NavList.contact} />
              </ul>
              <div className="d-flex">
                <NavIcon
                  href="/pages/menu"
                  icon={Search}
                  altText="Search Icon"
                />
                <NavIcon
                  href="/pages/userinput/signin"
                  icon={User}
                  altText="User Icon"
                />
                <NavIcon href="/pages/shop" icon={Cart} altText="Cart Icon" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
