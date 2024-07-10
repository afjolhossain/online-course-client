/* eslint-disable no-undef */
import { Link, useNavigate } from "react-router-dom";
import registerPic from "../../../public/images/register.jpg";
import registerill from "../../../public/images/Mobile login-amico (1).png";
import { useContext, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { user, createUser, loading } = useContext(authContext);
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    setSignUPError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(email, password, name);

    //------------- RegisterUser ---------------------------
    createUser(email, password, name)
      .then((data) => {
        const createUser = data.user;
        console.log(createUser);
        updateProfile(data.user, {
          displayName: name,
        })
          .then(() => {})
          .catch((err) => console.log(err));

        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            name: name,
          };
          fetch("https://online-course-server-pdwu.onrender.com/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      })

      .catch((error) => {
        setSignUPError(error.message);
      });
    navigate(from, { replace: true });
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
              <h1 className="text-3xl font-bold font-serif ">
                PERSONAL INFORMATION
              </h1>
              <p className="mt-6">
                If you have an account with us,
                <Link
                  to="/login"
                  className="font-serif text-green-500	 font-bold ml-3"
                >
                  please Login.
                </Link>
              </p>

              <form onSubmit={handleRegister}>
                <label className=" w-full max-w-xs ">
                  <div className="label">
                    <span className="label-text font-serif font-bold text-white">
                      NAME
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-md text-black"
                  />
                </label>
                <label className=" w-full max-w-xs">
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
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-md text-black"
                  />
                </label>
                <br />
                <button className="btn btn-outline mt-4 w-full  max-w-md   text-white">
                  CREATE
                </button>
              </form>

              {loading && (
                <span className="loading loading-spinner text-error ">
                  {loading}
                </span>
              )}
              {user?.email?.uid && (
                <div role="alert" className="alert alert-success max-w-md mt-3">
                  <span>User Registred successfully.</span>
                </div>
              )}
              {signUpError && (
                <div role="alert" className="alert alert-warning max-w-md mt-3">
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

export default Register;
