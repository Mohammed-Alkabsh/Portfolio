import React, { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

export default function HeaderAccountNav({ logout }) {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleDropDownOpen = () => setOpenDropDown(!openDropDown);
  return (
    <nav className="auth-nav">
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item position-relative">
          <a
            className={`nav-link ${openDropDown ? "open" : ""}`}
            onClick={handleDropDownOpen}
          >
            <FaUser />
            <div className="dropdown">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a href="javascript;" className="nav-link" onClick={logout}>
                    <span>Log out</span> <FaSignOutAlt />
                  </a>
                </li>
              </ul>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
