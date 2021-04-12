import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ id, username, role, ...props }) {
  const [navState, setNavState] = useState({
    openAccountDropdown: false,
    headerScrolled: false,
  });

  const handleScroll = function (event) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentScrolled = Math.ceil((winScroll / height) * 100);
    const bannerHeight = document.querySelector("#banner").offsetHeight;

    if (winScroll > bannerHeight) {
      document.querySelector("#banner").classList.add("active");
      setNavState({ ...navState, headerScrolled: true });
    } else {
      document.querySelector("#banner").classList.remove("active");
      setNavState({ ...navState, headerScrolled: false });
    }

    const hashedLinks = document.querySelectorAll(".hashed-link");
    for (var i = 0; i < hashedLinks.length; i++) {
      const ancorSelector = `#${hashedLinks[i].href.split("#")[1]}`;
      const section = document.querySelector(ancorSelector);
      if (
        winScroll > section.offsetTop - bannerHeight &&
        winScroll < section.offsetTop + section.offsetHeight - bannerHeight
      ) {
        hashedLinks[i].classList.add("is-active");
      } else {
        hashedLinks[i].classList.remove("is-active");
      }
    }
  };

  const handleBurgerClick = () =>
    setNavState({
      ...navState,
      openAccountDropdown: !navState.openAccountDropdown,
    });
  const closeNav = () =>
    setNavState({
      ...navState,
      openAccountDropdown: false,
    });

  const logout = (e) => {
    e.preventDefault();
    props.logout();
  };

  useEffect(() => {
    let _isMounted = true;

    if (_isMounted) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      _isMounted = false;
    };
  }, []);

  const hashedLinks = [
    { href: "/#hero", name: "home" },
    { href: "/#about", name: "about" },
    { href: "/#projects", name: "projects" },
    { href: "/#contact", name: "contact" },
  ];

  const hashedATags = hashedLinks.map((a, i) => {
    return (
      <li className="nav-item" key={`nav-hashed${i}`}>
        <a className={`nav-link hashed-link`} href={a.href} onClick={closeNav}>
          {a.name}
        </a>
      </li>
    );
  });

  return (
    <header id="banner">
      <div className="container">
        <NavLink
          to="/"
          onClick={closeNav}
          exact={true}
          className="navbar-brand logo-container d-flex"
        >
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 102 21"
          >
            <path d="M32.47,19.25a.57.57,0,0,1-.49.86c-1.19,0-2.3,0-3.41,0-.2,0-.44-.38-.58-.63-2-3.43-4-6.87-6-10.3h0a.58.58,0,0,0-1,0c-.49.84-.95,1.63-1.39,2.42a1.08,1.08,0,0,1-1.12.67c-.93,0-1.86,0-2.88,0a.58.58,0,0,1-.51-.86L21,1.17a.57.57,0,0,1,1,0Z" />
            <path
              className="cls-1"
              d="M11.71,1.39a.73.73,0,0,1,1.26,0c.54.93,1,1.78,1.5,2.65a1,1,0,0,1-.12.77Q10.09,12.21,5.8,19.6c-.12.2-.33.49-.51.49-1,0-2,0-3.14,0A.74.74,0,0,1,1.52,19C4.93,13.12,8.29,7.32,11.71,1.39Z"
            />
            <path d="M11.21,20.07a.66.66,0,0,1-.57-1c.51-.89,1-1.73,1.5-2.54a1,1,0,0,1,.75-.37c2.71,0,5.41,0,8.12,0a.89.89,0,0,1,.68.33c.52.83,1,1.68,1.53,2.58a.66.66,0,0,1-.57,1Z" />
            <text className="cls-2" transform="translate(37.12 8.48)">
              Mohammed
              <tspan className="cls-3">
                <tspan x="0" y="9">
                  Alkabsh
                </tspan>
              </tspan>
            </text>
          </svg>{" "}
        </NavLink>
        <div
          id="hamburger"
          className={navState.openAccountDropdown ? "open" : ""}
          onClick={handleBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav
          className={`main-nav ${navState.openAccountDropdown ? "open" : ""}`}
        >
          <ul className="nav navbar-nav navbar-right">
            {hashedATags}
            {username ? (
              <Fragment>
                <li className="nav-item">
                  <a
                    onClick={closeNav}
                    className="nav-link"
                    activeClassName="is-active"
                    href={`/dashboard`}
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={closeNav}
                    className="nav-link"
                    activeClassName="is-active"
                    href={`/exercises`}
                  >
                    Exercises
                  </a>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    exact={true}
                    onClick={closeNav}
                    activeClassName="is-active"
                    href="/signup"
                  >
                    Sign up
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    exact={true}
                    onClick={closeNav}
                    activeClassName="is-active"
                    href="/login"
                  >
                    Log in
                  </a>
                </li> */}
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
