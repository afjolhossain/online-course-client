import { useContext, useEffect, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const DashBoard = () => {
  const { user } = useContext(authContext);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://online-course-server-pdwu.onrender.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);

  const handleUpdateBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const country = form.country.value;
    const gender = form.gender.value;
    const last_study = form.last_study.value;
    const about = form.about.value;
    const updatedData = {
      name,
      phone,
      country,
      gender,
      last_study,
      about,
    };

    fetch(
      `https://online-course-server-pdwu.onrender.com/user/${userInfo?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Your courses has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    form.reset();
  };

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1">
      <div className="mx-auto">
        <h1 className="text-center p-3 text-3xl">
          Welcome Back
          <span className="text-rose-800 text-3xl font-sans font-bold ml-2">
            {userInfo?.name}
          </span>
        </h1>
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>
          <div className="flex justify-center ">
            <input
              type="text"
              defaultValue={userInfo?.name}
              placeholder="Type here"
              className="input input-bordered input-success w-full max-w-xs text-center mt-6"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              defaultValue={userInfo?.email}
              placeholder="Type here"
              className="input input-bordered input-success w-full max-w-xs text-center mt-4"
            />
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <div className="flex justify-center">
            <button
              className="btn  w-full max-w-xs  mt-4 bg-teal-600 text-white font-sans font-bold"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              UPDATE PROFILE
            </button>
          </div>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form onSubmit={handleUpdateBtn}>
                <div className="flex justify-center">
                  <input
                    type="text"
                    name="name"
                    defaultValue={userInfo?.name}
                    placeholder="Type here"
                    className="input input-bordered input-success w-full max-w-xs text-center mt-4"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    defaultValue={userInfo?.email}
                    placeholder="Type here"
                    className="input input-bordered input-success w-full max-w-xs text-center mt-4"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    name="phone"
                    type="text"
                    placeholder="YOUR PHONE NUMBER"
                    className="input input-bordered input-success w-full max-w-xs text-center mt-4"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    name="gender"
                    placeholder="MALE/FEMALE"
                    className="input input-bordered input-success w-full max-w-xs text-center mt-4"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    name="country"
                    placeholder="NATIONALITY"
                    className="input input-bordered input-success w-full max-w-xs text-center mt-4"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    name="last_study"
                    placeholder="LAST STUDY"
                    className="input input-bordered input-success w-full max-w-xs text-center mt-4"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    name="about"
                    placeholder="ABOUT YOURSELF WITHIN 30 WORDS"
                    className="input input-bordered input-success w-full max-w-xs text-center mt-4"
                  />
                </div>
                <div className="modal-action">
                  <div className="flex justify-between items-center w-full max-w-xs mx-auto">
                    <button className="btn btn-outline bg-teal-600 w-auto  max-w-md text-white">
                      SUBMIT
                    </button>

                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-outline bg-teal-600 w-auto max-w-md text-white">
                        CLOSE
                      </button>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-serif font-bold text-green-800 p-3">
          Updated your Prifile
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            defaultValue={user?.displayName}
            placeholder="Type here"
            className="input input-bordered input-success w-full max-w-xs text-center mt-4"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            defaultValue={user?.email}
            placeholder="Type here"
            className="input input-bordered input-success w-full max-w-xs text-center mt-4"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            value={userInfo?.phone}
            placeholder="YOUR PHONE NUMBER"
            className="input input-bordered input-success w-full max-w-xs text-center mt-4"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="MALE/FEMALE"
            value={userInfo?.gender}
            className="input input-bordered input-success w-full max-w-xs text-center mt-4"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="NATIONALITY"
            value={userInfo?.country}
            className="input input-bordered input-success w-full max-w-xs text-center mt-4"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="LAST STUDY"
            value={userInfo?.last_study}
            className="input input-bordered input-success w-full max-w-xs text-center mt-4"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="ABOUT YOURSELF WITHIN 30 WORDS"
            value={userInfo?.about}
            className="input input-bordered input-success w-full max-w-xs text-center mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
