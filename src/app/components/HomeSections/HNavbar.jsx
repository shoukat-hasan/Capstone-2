import React from "react";
import NavLink from "../Navbar/NavLink";
import NavIcon from "../Navbar/NavIcon";
import Link from "next/link";
import Search from "../assets/Search.svg";
import User from "../assets/User.svg";
import Cart from "../assets/Cart.svg";
import HHero from "./HHero";

const HNavbar = () => {
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
    <div className="container-fluid p-3">
      <div className="container home-bg">
        <div className="darkBg p-2">
          <div className="container text-center">
            <Link className="navbar-brand text-white fw-bold fs-3" href="/">
              <span className="primary-color">Food</span>tuck
            </Link>
          </div>
          <nav className="navbar navbar-expand-lg">
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
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <div className="container d-flex justify-content-start align-items-center">
                  <ul className="navbar-nav">
                    <NavLink href="/" text="Home" />
                    <NavLink href="/pages/menu" text={NavList.menu} />
                    <NavLink href="/pages/blog" text={NavList.blog} />
                    <NavLink href="/pages/pages" text={NavList.pages} />
                    <NavLink href="/pages/about" text={NavList.about} />
                    <NavLink href="/pages/shop" text={NavList.shop} />
                    <NavLink href="/pages/contact" text={NavList.contact} />
                  </ul>
                </div>
                <div className="d-flex">
                  <form class="d-flex" role="search">
                    <div className="position-relative">
                      <input
                        class="form-control bg-black me-2 rounded-pill search-bar"
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                      />
                      <div className="position-absolute top-0 start-50 ms-5 mt-1 ">
                        <NavIcon
                          href="/pages/menu"
                          icon={Search}
                          altText="Search Icon"
                        />
                      </div>
                    </div>
                  </form>
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
          <HHero />
        </div>
      </div>
    </div>
  );
};

export default HNavbar;
