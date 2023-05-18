import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createNewUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateUserDetails(user, name, photo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUserDetails = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleRegister} className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            src={
              "https://images-na.ssl-images-amazon.com/images/I/71t5O25oa4L._AC_UL600_SR600,600_.jpg"
            }
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl text-red-500 font-bold">Register Now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
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
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photo"
                className="input input-bordered"
              />
            </div>

            <div className="divider">OR</div>
            <button className="btn btn-outline gap-2 bg-info border-none">
              <FaGoogle /> Login with Google
            </button>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 border-none">Sign Up</button>
            </div>
            <h2 className="font-bold text-center my-5">
              Already have an account?
              <Link to="/login" className="link ml-2 text-red-500">
                Login Now!
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
