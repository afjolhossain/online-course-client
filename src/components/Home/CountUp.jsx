import bg from "../../../public/images/register.jpg";
import Countup from "react-countup";

const CountUp = () => {
  return (
    <div
      className="hero h-72 mt-10 mx-3"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay bg-opacity-70 flex justify-around  items-center flex-wrap text-white ">
        <div>
          <Countup
            end={1226}
            duration={10}
            className="mx-auto font-serif text-6xl"
          />
          <h1 className="text-xl leading-9">Happy Students</h1>
        </div>
        <div className="align-cneter">
          <Countup
            end={1552}
            duration={10}
            className="mx-auto  font-serif text-6xl"
          />
          <h1 className="text-xl leading-9">Approved Courses</h1>
        </div>
        <div>
          <Countup
            end={1156}
            duration={10}
            className="mx-auto  font-serif text-6xl"
          />
          <h1 className="text-xl leading-9">Certified Teachers</h1>
        </div>
        <div>
          <Countup
            end={2100}
            duration={10}
            className="mx-auto  font-serif text-6xl"
          />
          <h1 className="text-xl leading-9">Graduate Students</h1>
        </div>
      </div>
    </div>
  );
};

export default CountUp;
