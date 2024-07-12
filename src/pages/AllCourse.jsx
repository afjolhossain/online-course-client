import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllCourse = ({ course, onDelete }) => {
  const { title, image, fees, instractor, _id } = course;

  const handleDelete = async () => {
    await fetch(`https://y-phi-beryl.vercel.app/courses/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        onDelete(_id);
      });
  };

  return (
    <div className="card w-82  bg-base-100 shadow-xl mx-auto">
      <figure>
        <img className="w-72" src={image} alt="course" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>{details}</p> */}
        <h1 className="font-bold">Teacher:{instractor}</h1>
        <h3 className="font-bold">Course-Fee : {fees}</h3>
        <div className="card-actions mx-auto">
          <button className="btn btn-outline btn-primary w-15">BUY</button>

          <Link to={`edit/${_id}`}>
            <button className="btn btn-outline btn-accent w-15">EDIT</button>
          </Link>

          <Link>
            <button
              onClick={handleDelete}
              className="btn btn-outline btn-secondary w-15"
            >
              DELETE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCourse;
