import { useLoaderData } from "react-router-dom";
import AllCourse from "./AllCourse";
import { useState } from "react";

const AllCourses = () => {
  const courseData = useLoaderData();
  const [products, setProducts] = useState([]);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
      <h1>this is allcourse</h1>
      <div className="grid md:grid-cols-3 gap-3 sm:grid-cols-4 p-4">
        {courseData.map((course) => (
          <AllCourse
            course={course}
            key={course.id}
            onDelete={handleDeleteProduct}
          ></AllCourse>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
