import { Link } from "react-router-dom";
import logo from "../../../public/Annotation 2023-05-18 093448.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

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
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      <li>
        <Link to="/addAToy">Add A Toy</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
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
        <img className="w-3/12" src={logo} alt="" />
        <a className="btn btn-ghost normal-case text-3xl">
          <span className="text-purple-600">Hero</span> Dungeon
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
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
