import { NavLink, Outlet } from "react-router-dom";

const DeshboardLayOut = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-300">
          <li>
            <NavLink
              to="home"
              className="font-bold shadow-sm shadow-pink-950	mt-6 text-1xl "
            >
              <a>Profile</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="allcourse"
              className=" font-bold shadow-sm shadow-pink-950	mt-6 text-1xl"
            >
              <a>ALL-COURCES</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addCources"
              className=" font-bold shadow-sm shadow-pink-950	mt-4 text-1xl"
            >
              <a>ADD-COURCES</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="bookingDetails"
              className=" font-bold shadow-sm shadow-pink-950	mt-4 text-1xl"
            >
              <a>BOOKINGS</a>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className=" font-bold shadow-sm shadow-pink-950	 mt-4 text-1xl bg-slate-100 "
            >
              <a className="text-red-700 mx-auto">BACK-HOME</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeshboardLayOut;
