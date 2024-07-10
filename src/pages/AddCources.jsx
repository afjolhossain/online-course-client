import Swal from "sweetalert2";

const AddCources = () => {
  const handleAddSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const fees = form.fees.value;
    const details = form.details.value;
    const instractor = form.instractor.value;
    const image = form.image.value;
    const courseData = { title, fees, details, instractor, image };

    await fetch("http://localhost:5000/courses", {
      method: "POST",
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
          title: "Your courses has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });
  };
  return (
    <div>
      <h1 className="text-center text-4xl m-6">Add-Course</h1>
      <div className="w-full">
        <form onSubmit={handleAddSubmit} className="text-center">
          <div>
            <input
              required
              name="title"
              type="text"
              placeholder="Course-Name"
              className="input input-bordered w-full max-w-md "
            />
          </div>
          <div>
            <input
              required
              type="text"
              name="fees"
              placeholder="Course-Fee"
              className="input input-bordered w-full max-w-md mt-3"
            />
          </div>
          <div>
            <input
              required
              type="text"
              name="details"
              placeholder="Course-Details"
              className="input input-bordered w-full max-w-md mt-3"
            />
          </div>
          <div>
            <input
              required
              type="text"
              name="instractor"
              placeholder="Instractor Name"
              className="input input-bordered w-full max-w-md mt-3"
            />
          </div>
          <div>
            <input
              required
              type="text"
              name="image"
              placeholder="Image-live-link"
              className="input input-bordered w-full max-w-md mt-3"
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline btn-accent w-full max-w-md mt-3 text-white"
          >
            ADD-COURSE
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCources;
