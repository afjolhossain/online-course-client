import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const SeeDatiles = () => {
  const { user } = useContext(authContext);
  const singleCourseData = useLoaderData();
  const { title, fees, instractor, image, details } = singleCourseData;

  const handleOrder = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email?.value;
    const phonePumber = form.phone_number.value;
    const date = form.date.value;
    const courseFee = form.course_fee.value;
    const instractor = form.instractor.value;
    const title = form.title.value;
    const orderConfirmData = {
      name: name,
      email,
      phonePumber,
      date,
      courseFee,
      instractor,
      title,
    };
    console.log(orderConfirmData);

    await fetch("https://online-course-server-beta.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderConfirmData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your Order has been confirmed successfully.");
        }
        form.reset();
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 max-w-screen-xl	mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="w-full rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-serif font-bold">{title}</h1>
          <h1 className="text-2xl mt-4 font-serif font-bold text-red-800">
            Teacher : {instractor}
          </h1>
          <p className="py-6 font-serif">{details}</p>
          <h2 className="mb-4 font-serif font-bold text-red-800">
            Course fee : {fees}
          </h2>

          <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn  btn-outline w-full max-w-xs"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              BUY
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h1 className="text-center">Order</h1>

                <form onSubmit={handleOrder} className="text-center">
                  <input
                    required
                    defaultValue={user?.displayName}
                    name="name"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs mt-2"
                    value={user.email}
                    required
                  />
                  <input
                    type="text"
                    required
                    placeholder="Contact Number"
                    className="input input-bordered input-primary w-full max-w-xs mt-2"
                    name="phone_number"
                  />

                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs mt-2"
                    value={title}
                    name="title"
                    required
                  />
                  <input
                    type="date"
                    required
                    name="date"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs mt-2"
                  />
                  <input
                    type="text"
                    placeholder="Type here"
                    name="course_fee"
                    className="input input-bordered input-primary w-full max-w-xs mt-2"
                    value={fees}
                    required
                  />
                  <input
                    type="text"
                    name="instractor"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs mt-2"
                    value={instractor}
                    required
                  />
                  <br />
                  <button className="btn btn-active btn-neutral w-full max-w-xs mt-2">
                    Confirm
                  </button>
                </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          {/* <Link to="/buy">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              BUY
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SeeDatiles;
