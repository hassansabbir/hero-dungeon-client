import { Link } from "react-router-dom";
import errorPage from "../../../public/error.jpg";

const ErrorPage = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn mt-10">Back to Home</button>
      </Link>
      <div className="flex flex-col my-20 justify-center items-center">
        <img className="w-6/12" src={errorPage} alt="" />
        <div>
          <h2 className="text-4xl font-bold text-center">
            The page you are trying to find is now found. <br /> Please, recheck
            your internet connection & page url, and try again.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
