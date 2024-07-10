import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleCourseData = ({ course }) => {
  const { title, fees, instractor, image, _id } = course;
  return (
    <div className="mb-10">
      <div className="card w-11/12 h-11/12 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body text-left">
          <h2 className="font-bold font-serif">{title}</h2>
          <p className="font-bold font-serif">Teacher: {instractor}</p>
          <h2 className="font-bold font-serif"> Course fee: {fees}</h2>
          <Link to={`/courses/${_id}`}>
            <button className="btn btn-outline w-full">See-Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseData;
