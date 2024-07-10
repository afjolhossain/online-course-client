import { Link } from "react-router-dom";
import { FaLocationDot, FaEnvelope, FaPhoneFlip, FaFax } from "react-icons/fa6";
const ContactUs = () => {
  return (
    <div>
      <div
        className="hero min-h-40 max-w-screen-xl mx-auto	"
        style={{
          backgroundImage:
            "url(https://eduzone.dexignzone.com/xhtml/images/banner/bnr3.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>

        <div className="hero-content text-center text-neutral-content">
          <Link className="font-bold" to="/">
            HOME
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1  max-w-screen-xl mx-5 gap-5 mt-14 mb-4 ">
        <div>
          <h1 className="font-bold font-sans text-2xl">Contact Us</h1>
          <div className="divider divider-neutral w-4/12"></div>
          <h1 className="text-4xl font-serif font-bold">
            Do You Have Any Question?
          </h1>
          <div className="flex gap-5 mt-7">
            <div>
              <FaLocationDot className="text-3xl text-teal-600" />
            </div>
            <div>
              <h1 className="text-3xl font-sans font-bold">Address</h1>
              <p className="font-sans font-bold">
                123 West Street, Melbourne Victoria 3000 Australia
              </p>
            </div>
          </div>
          <div className="flex  gap-5 mt-7">
            <div>
              <FaEnvelope className="text-4xl text-teal-600" />
            </div>
            <div>
              <h1 className="text-3xl font-sans font-bold">Email</h1>
              <p className="font-sans font-bold">info@example.com</p>
            </div>
          </div>

          <div className="flex gap-5 mt-7 ">
            <div>
              <FaPhoneFlip className="text-4xl text-teal-600" />
            </div>
            <div>
              <h1 className="text-3xl font-sans font-bold">Phone</h1>
              <p className="font-sans font-bold">+61 3 8376 6284</p>
              <p className="font-sans font-bold">+23 123 456 7890</p>
            </div>
          </div>
          <div className="flex gap-5 mt-7">
            <div>
              <FaFax className="text-4xl text-teal-600" />
            </div>
            <div>
              <h1 className="text-3xl font-sans font-bold">Fax</h1>
              <p className="font-sans font-bold">+000 123 2294 089</p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="w-full h-auto bg-teal-600 rounded-md ">
            <h1 className="flex justify-center items-center py-7 px-3 text-white  text-2xl">
              Write us a few words about your project and we’ll prepare a
              proposal for you within 24 hours
            </h1>
          </div>
          <form>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered input-md w-full max-w-md mt-3"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered input-md w-full max-w-md mt-5"
                />
              </div>
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered input-md w-full max-w-md mt-3"
                />
                <input
                  type="text"
                  placeholder="Your Email Id"
                  className="input input-bordered input-md w-full max-w-md mt-5"
                />
              </div>
            </div>
            <textarea
              placeholder="Write Something........"
              className="textarea textarea-bordered h-36  w-full mt-8 "
            ></textarea>
            <button className="btn btn-outline bg-teal-600 w-full max-w-md mt-6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
