/* eslint-disable react/no-unescaped-entities */

import { FaPaintbrush,FaBook,FaRegUser,FaCalendar, FaGraduationCap,FaClock} from "react-icons/fa6";


const UniversityWelcome = () => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 ">
          <div><img src="https://eduzone.dexignzone.com/xhtml/images/student1.png" /></div>
          <div className="col-span-2 mt-8 py-4">
            <h1 className="text-4xl font-bold leading-6">Welcome To University</h1>
            <p className="mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

           <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8 p-6 ">
           <div>
                <div className="flex justify-center">
                  <div className="bg-indigo-950	 w-14 h-10 text-white rounded-full">
                  < FaPaintbrush className="mx-auto mt-2 text-xl"/>
                  </div>                 
                    <div className="ml-4">
                    <h1 className="text-xl font-serif font-bold">  Special Education</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
                    </div>
                </div>
                <div className="flex justify-center mt-5 leading-6">
                    <div className="bg-cyan-500 w-14 h-10 text-white rounded-full">
                        <FaBook className="mx-auto mt-2 text-xl"/>
                    </div>
                  <div className="ml-4">
                      <h1 className="text-xl font-serif font-bold">Full Day Session</h1>
                       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
                  </div>
                </div>
                
                <div className="flex justify-center mt-5 leading-6">
                    <div className="bg-indigo-950 w-14 h-10 text-white rounded-full">
                        <FaRegUser className="mx-auto mt-2 text-xl"/>
                    </div>
                    <div className="ml-4">
                        <h1 className="text-xl font-serif font-bold">Qualified Teachers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center leading-6">
                    <div className="bg-indigo-950 w-14 h-10 text-white rounded-full"><FaCalendar className="mx-auto mt-2 text-xl"/>
                    </div>
                   <div className="ml-4">
                   <h1 className="text-xl font-serif font-bold"> Events</h1>                 
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
                   </div>
                </div>
                <div className="flex justify-center mt-5 leading-6">
                     <div className="bg-cyan-500 w-14 h-10 text-white rounded-full">
                        <FaGraduationCap className="mx-auto mt-2 text-xl" />
                    </div>
                  <div className="ml-4 ">
                    <h1 className="text-xl font-serif font-bold"> Pre Classes</h1>
                     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
                </div>
                </div>
                <div className="flex justify-center mt-5 leading-6">
                    <div className="bg-indigo-950 w-14 h-10 text-white rounded-full">
                        <FaClock className="mx-auto mt-2 text-xl"/>
                    </div>
                   <div className="ml-4">
                   <h1 className="text-xl font-serif font-bold">24/7 Supports</h1>
                   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam..</p>
                   </div>
                </div>
            </div>
           </div>
          </div>
         <div>
            
           
         </div>
        </div>
    );
};

export default UniversityWelcome;