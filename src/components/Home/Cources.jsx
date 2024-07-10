import SingleCourseData from "./SingleCourseData";

/* eslint-disable react/prop-types */
const Cources = ({ courseData }) => {
  return (
    <div className="bg-gray-100">
      <div className="text-center w-2/4 mx-auto">
        <h1 className="text-3xl font-bold font-serif p-10 ">POPULAR COURSES</h1>
        <p className=" font-serif font-bold text-gray-600">
          Suspendisse et justo. Praesent mattis commyolk augue Aliquam ornare
          hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget
          orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Suspendisse et justo. Praesent mattis commyolk augue aliquam
          ornare augue.
        </p>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-y-2 my-10">
        {courseData.slice(0, 4).map((course) => (
          <SingleCourseData course={course} key={course._id}></SingleCourseData>
        ))}
      </div>
    </div>
  );
};

export default Cources;
