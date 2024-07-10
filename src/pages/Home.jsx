import { useLoaderData } from "react-router-dom";
import Banner from "../components/Home/Banner";
import Cources from "../components/Home/Cources";
import Subscribe from "../components/Home/Subscribe";
import UniversityWelcome from "../components/Home/UniversityWelcome";
import CountUp from "../components/Home/CountUp";
import Teacher from "../components/Home/Teacher";

const Home = () => {
  const courseData = useLoaderData();
  return (
    <div className="max-w-screen-xl	mx-auto">
      <Banner />
      <Cources courseData={courseData} />
      <Subscribe />
      <UniversityWelcome />
      <CountUp />
      <Teacher />
    </div>
  );
};

export default Home;
