import { Link } from "react-router-dom";
import logo from "../../../public/logo-white.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const navBarItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/allToys">All Toys</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/addAToy">Add A Toy</ActiveLink>
      </li>
      {user?.email && (
        <li>
          <ActiveLink to="/myToys">My Toys</ActiveLink>
        </li>
      )}
      <li>
        <ActiveLink to="/blogs">Blogs</ActiveLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBarItems}
          </ul>
        </div>
        <img className="w-3/12 hidden md:block" src={logo} alt="" />
        <a className="btn btn-ghost normal-case text-lg md:text-3xl">
          <span className="text-purple-600">Hero</span> Dungeon
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarItems}</ul>
      </div>
      <div className="navbar-end space-x-5">
        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
          {user && (
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              src={user.photoURL}
              alt=""
            />
          )}
        </div>
        {user?.email ? (
          <Link to="/">
            <button
              onClick={handleSignOut}
              className="btn btn-outline text-purple-600 border-purple-600 hover:bg-purple-600"
            >
              LogOut
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline text-purple-600 border-purple-600 hover:bg-purple-600">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
