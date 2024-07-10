import bg from "../../../public/images/bg-image.jpg";

const Subscribe = () => {
  return (
    <div
      className="hero max-w-screen-xl mx-auto my-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay bg-opacity-70">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className=" grid md:grid-cols-2 sm:grid-cols-1 mx-3"
        >
          <div className=" m-auto">
            <h1 className="mb-5 text-2xl font-bold text-white">
              Create your free account now and get immediate access to 100s of
              online courses.
            </h1>
            <div className="bg-white  grid md:grid-cols-3 sm:grid-cols-1 gap-3 rounded p-4">
              <div className=" text-center my-4 ">
                <input
                  type="text"
                  name=""
                  placeholder="Your name"
                  className=" bg-gray-200 h-10 rounded  "
                />
              </div>
              <div className="text-center my-4 ">
                <input
                  type="text"
                  name=""
                  placeholder="Your Email Address"
                  className=" bg-gray-200 h-10 rounded "
                />
              </div>
              <div className="my-auto bg-teal-500 h-10 text-center rounded">
                <button type="button" className="mt-2  font-bold text-white ">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              className="w-80 "
              src="https://eduzone.dexignzone.com/xhtml/images/pic1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
