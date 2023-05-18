import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong password! Please try again.");
        }
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogIn = () => {
    googleSignIn(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleLogin} className="hero min-h-screen bg-zinc-50">
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
                name="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-red-500 font-bold">{error}</p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-outline gap-2 bg-info border-none"
            >
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
    </form>
  );
};

export default Login;
