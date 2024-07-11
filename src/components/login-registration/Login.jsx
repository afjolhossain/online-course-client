/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerPic from "../../../public/images/register.jpg";
import registerill from "../../../public/images/Mobile login-amico (1).png";
import { useContext, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { user, userLogin, loading } = useContext(authContext);
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginBtn = (e) => {
    setSignUPError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);

        const user = { email };
        axios
          .post("https://online-course-server-beta.vercel.app/jwt", user)
          .then((res) => {
            if (res.data.success) {
              navigate(location.state?.from?.pathname || "/");
            }
          });
      })
      .catch((error) => {
        setSignUPError(error.message);
      });
  };

  return (
    <div
      className="hero min-h-screen max-w-screen-xl	mx-auto"
      style={{ backgroundImage: `url(${registerPic})` }}
    >
      <div className="hero-overlay bg-opacity-80">
        <div
          style={{
            backgroundImage: `url${registerPic}`,
          }}
          className="w-full min-h-screen"
        >
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 text-white p-5">
            <div>
              <img src={registerill} alt="" />
            </div>
            <div className="my-auto">
              <h1 className="text-3xl font-bold font-serif ">LOGIN</h1>
              <p className="mt-4">
                If you have't an account with us,
                <Link
                  to="/register"
                  className="font-serif text-green-500	 font-bold ml-3"
                >
                  please register.
                </Link>
              </p>

              <form onSubmit={handleLoginBtn}>
                <label className=" w-full max-w-xs ">
                  <div className="label">
                    <span className="label-text font-serif font-bold  text-white">
                      EMAIL
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email id"
                    className="input input-bordered w-full max-w-md text-black"
                  />
                </label>
                <label className=" w-full max-w-xs">
                  <div className="label">
                    <span className="label-text font-serif font-bold  text-white">
                      PASSWORD
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-md text-black"
                  />
                </label>
                <br />
                <button className="btn btn-outline  w-full max-w-md text-white mt-3">
                  Login
                </button>
              </form>

              {loading && (
                <span className="loading loading-spinner text-error">
                  {loading}
                </span>
              )}
              {user?.uid?.email && (
                <div role="alert" className="alert alert-success max-w-md mt-3">
                  <span>User logged in successfully.</span>
                </div>
              )}
              {signUpError && (
                <div role="alert" className="alert alert-warning max-w-md">
                  <span>{signUpError}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
