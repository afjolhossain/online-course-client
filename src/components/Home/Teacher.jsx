/* eslint-disable react/no-unescaped-entities */
const Teacher = () => {
  return (
    <div className="my-4">
      <h1 className="text-4xl text-center my-8">Meet The Teacher</h1>
      <div className="w-2/4 text-center mx-auto font-serif mb-4">
        <p>
          There are many variations of passages of Lorem Ipsum typesetting
          industry has been the industry's standard dummy text ever since the
          been when an unknown printer.
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-1">
        <div className="card w-72 h-auto bg-base-100 shadow-xl mx-auto">
          <figure>
            <img
              src="https://eduzone.dexignzone.com/xhtml/images/our-team/pic17.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center ">
            <h2 className=" text-2xl font-bold text-red-800">
              Nashid Martines
            </h2>
            <p>DIRECTOR</p>
          </div>
        </div>
        <div className="card w-72	 h-auto bg-base-100 shadow-xl mx-auto">
          <figure>
            <img
              src="https://eduzone.dexignzone.com/xhtml/images/our-team/pic18.jpg"
              alt=""
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-2xl font-bold text-red-800">
              Roke Willingham
            </h2>
            <p>DEVELOPER</p>
          </div>
        </div>
        <div className="card w-72 h-auto bg-base-100 shadow-xl mx-auto">
          <figure>
            <img
              src="https://eduzone.dexignzone.com/xhtml/images/our-team/pic15.jpg"
              alt=""
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-2xl font-bold text-red-800">Konne Root</h2>
            <p>MANAGER</p>
          </div>
        </div>
        <div className="card w-72 h-auto bg-base-100 shadow-xl mx-auto">
          <figure>
            <img
              src="https://eduzone.dexignzone.com/xhtml/images/our-team/pic16.jpg"
              alt=""
            />
          </figure>
          <div className="card-body text-center">
            <h2 className=" text-2xl font-bold text-red-800">
              Konne Backfield
            </h2>
            <p>DESIGNER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
