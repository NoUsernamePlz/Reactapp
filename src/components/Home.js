import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={require("../images/video2.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center ">
        <h1 className="text-2xl mb-8 rounded-md text-white font-bold">
          Welcome User :)
        </h1>
        <Link to={"/data"}>
          <button className="px-6 py-3 text-xl bg-gray-500 border border-white cursor-pointer rounded-md">
            Explore more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
