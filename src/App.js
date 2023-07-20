import React from "react";
import reviews from "./data";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="font-bold text-4xl hover:tracking-widest hover:text-violet-600 transition-all duration-100 ">
          Our Testimonial
        </h1>
        <div className=" h-[4px] w-1/5 mt-1 mx-auto bg-violet-400 "></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  );
}

export default App;
