import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-o w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1631799146456-9ee9fde0bd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="gundam"
      />
      <div className="bg-black/50 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>"The Moving Gundam"</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Gundam Factory Yokohama
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            The magnificent world view held in the story of "Gundam" spurs,
            inspires, and moves the imagination and passion of many people
            involved in the project. Dreams become reality, and that reality
            creates new dreams.
          </p>
          <button className="bg-white text-black font-bold">Buy Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
