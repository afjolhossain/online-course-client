/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const About_Us = () => {
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

      {/* hero card from here */}

      <div className="grid md:grid-cols-2 sm:grid-cols-1  max-w-screen-xl mx-auto gap-5 p-8">
        <div>
          <img
            src="https://eduzone.dexignzone.com/xhtml/images/about/about1.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl font-serif font-bold">
            A company involved in service, maintenance
          </h1>
          <p className="text-grey-300 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer There are many variations of passages
            of Lorem Ipsum available, but the majority have suffered alteration
            in some form.
          </p>
          <h3 className="text-2xl py-4 ">
            Best Education For EduZone University
          </h3>
          <div className="flex items-center">
            <div className="mt-auto bg-red-800 w-1/4 h-12 rounded-md">
              <p className="mt-3 ml-3 text-white font-sans font-bold">
                Read More
              </p>
            </div>

            <div>
              <p className="ml-5"> +91 (123) 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Us;
