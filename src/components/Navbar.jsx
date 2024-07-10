import { Link, NavLink } from "react-router-dom";
import logo from "../../public/images/logo.svg";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li className="mr-4">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
      {user && (
        <li className="mr-4">
          <NavLink to="/home">DASHBOARD</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center items-center ">
          <img className="w-10" src={logo} alt="" />
          <h1 className="ml-2 font-serif font-bold">EDUZONE</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="register">
          {user ? (
            <div className="flex justify-center items-center gap-2">
              <p className="">{user?.displayName}</p>
              <button
                onClick={handleLogOut}
                className="btn btn-outline btn-accent"
              >
                LogOut
              </button>
            </div>
          ) : (
            <button className="btn btn-outline btn-accent">Login</button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
