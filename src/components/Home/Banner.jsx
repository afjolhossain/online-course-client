import { Link } from "react-router-dom";
import BannerBg from "../../../public/images/edu-banner.jpg";
import BannerPic from "../../../public/images/edu.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${BannerBg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-1"></div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="hero-content text-start text-neutral-content grid md:grid-cols-2 sm:grid-cols-2"
      >
        <div>
          <h1 className="mb-5 text-5xl font-bold text-white font-serif z-index-7">
            BEST EDUCATION FOR EDUZONE UNIVERSITY
          </h1>
          <p className="mb-5 font-medium">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-emerald-500	w-1/4 mt-3">Read More</button>
          <button className="btn btn-outline btn-accent ml-4 w-1/4 mt-3">
            <Link className="text-white" to="about">
              About-US
            </Link>
          </button>
        </div>
        <div data-aos="fade-right" data-aos-duration="2000">
          <img src={BannerPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
