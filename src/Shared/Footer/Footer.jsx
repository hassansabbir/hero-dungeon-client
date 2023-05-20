import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo-black.png";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#0f0f0f] text-white">
        <div>
          <img className="w-9/12" src={logo} alt="" />
          <p className="text-center">
            Hero Dungeon Industries Ltd.
            <br />
            Providing wonderful toys since 1995
          </p>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">herodungeon44@gmail.com</a>
          <a className="link link-hover">herodungeon4784@gmail.com</a>
          <a className="link link-hover">+88016*****563</a>
          <a className="link link-hover">+88016*****563</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer items-center p-4 bg-[#0f0f0f] text-neutral-content">
        <div className="items-center grid-flow-col">
          <img className="w-14" src={logo} alt="" />
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <h2>
            <span className="text-xl font-bold text-gray-400">Address</span>{" "}
            <br /> 32, Orchid plaza, Mirpur Road House - 4,Road no-11,
            Bicharpoti Abdul Rehman sarok, Dhaka 1209
          </h2>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link>
            <FaTwitter className="h-7 w-7" />
          </Link>
          <Link>
            <FaYoutube className="h-7 w-7" />
          </Link>
          <Link>
            <FaFacebookF className="h-7 w-7" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
