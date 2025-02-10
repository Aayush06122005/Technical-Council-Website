import  { useState, useEffect } from "react";
import "./index.css";
import "boxicons";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNavbar = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth < 1280) {
    return (
      <>
        
        <div className="mob-navbar-container">
          <div
            className={`${
              open
                ? "mob-navbar-toggle-icon-container2"
                : "mob-navbar-toggle-icon-container"
            } ${open ? "expanded" : ""}`}
          >
            {open ? (
              <i className="bx bx-x-circle mob-cross-img" onClick={toggleNavbar}></i>
            ) : (
              <i className="bx bx-menu mob-toggle-img" onClick={toggleNavbar}></i>
            )}

            {open ? (
              <>
                <div className="mob-nav-items">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">Home</p>
              </NavLink>

              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">About</p>
              </NavLink>

              <NavLink
                to="/Events"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">Events</p>
              </NavLink>

              <NavLink
                to="/Team"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">Team</p>
              </NavLink>

              <NavLink
                to="/Clubs"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">Clubs</p>
              </NavLink>


              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">Contact</p>
              </NavLink>
            </div>
              </>
            ) : ('')}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="navbar-container">
      <div
        className={`${
          open
            ? "navbar-toggle-icon-container2"
            : "navbar-toggle-icon-container"
        } ${open ? "expanded" : ""}`}
      >
        {open ? (
          <i className="bx bxs-x-circle" onClick={toggleNavbar}></i>
        ) : (
          <i className="bx bx-menu-alt-right" onClick={toggleNavbar}></i>
        )}
        {open ? (
          <>
            <p className="logo">
              T<span className="logo-H">C</span>
            </p>
            <div className="nav-items">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">Home</p>
              </NavLink>

              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">About</p>
              </NavLink>

              <NavLink
                to="/Events"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">Events</p>
              </NavLink>

              <NavLink
                to="/Team"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">Team</p>
              </NavLink>

              <NavLink
                to="/Clubs"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">Clubs</p>
              </NavLink>


              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "Active" : ""}`
                }
              >
                <p className="nav-items-style">Contact</p>
              </NavLink>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
