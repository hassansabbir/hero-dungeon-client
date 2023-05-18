import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-zinc-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img
            src={
              "https://ih1.redbubble.net/image.2552425800.2344/st,small,507x507-pad,600x600,f8f8f8.jpg"
            }
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl text-purple-600 font-bold">Login Now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="divider">OR</div>
            <button className="btn btn-outline gap-2 bg-info border-none">
              <FaGoogle /> Login with Google
            </button>
            <div className="form-control mt-6">
              <button className="btn bg-purple-600 border-none">Login</button>
            </div>
            <h2 className="font-bold text-center my-5">
              New to Hero Dungeon?
              <Link to="/register" className="link ml-2 text-purple-600">
                Sign Up Now!
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
