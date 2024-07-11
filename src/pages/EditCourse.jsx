import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditCourse = () => {
  const UpdateData = useLoaderData();
  const { title, fees, details, instractor, image, _id } = UpdateData;

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title_course.value;
    const fees = form.fees_course.value;
    const details = form.details_course.value;
    const instractor = form.instractor_course.value;
    const image = form.image_course.value;
    const courseData = { title, fees, details, instractor, image };
    console.log(courseData);

    await fetch(`https://online-course-server-beta.vercel.app/courses/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
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
  };

  return (
    <div>
      <h1 className="text-center text-4xl m-6">Update-Course-Data</h1>
      <div className="w-full">
        <form onSubmit={handleUpdateSubmit} className="text-center">
          <div>
            <input
              required
              defaultValue={title}
              name="title_course"
              type="text"
              placeholder="Course-Name"
              className="input input-bordered w-full max-w-md "
            />
          </div>
          <div>
            <input
              value={fees}
              required
              type="text"
              name="fees_course"
              placeholder="Course-Fee"
              className="input input-bordered w-full max-w-md mt-3"
            />
          </div>
          <div>
            <input
              required
              value={details}
              type="text"
              name="details_course"
              placeholder="Course-Details"
              className="input input-bordered w-full max-w-md mt-3"
            />
          </div>
          <div>
            <input
              required
              type="text"
              value={instractor}
              name="instractor_course"
              placeholder="Instractor Name"
              className="input input-bordered w-full max-w-md mt-3"
            />
          </div>
          <div>
            <input
              required
              type="text"
              value={image}
              name="image_course"
              placeholder="Image-live-link"
              className="input input-bordered w-full max-w-md mt-3"
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline btn-accent w-full max-w-md mt-3 text-white"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
