import React from "react";

const Notification = () => (
  <div>
    <section className="h-screen px-16">
      <a>
        <p className="text-white text-5xl font-bold mt-64">Discover Events</p>
      </a>
      <div className="border-4 h-64 mt-8 border-pink-500">
        <p className="non-italic text-white font-bold my-8 ml-6 text-lg">Mar</p>
        <p className="non-italic text-pink-500 font-bold -m-12 ml-5 text-5xl">
          12
        </p>
        <div className="flex flex-row flex-no-wrap items-baseline">
          <div className="non-italic text-white font-bold text-2xl mx-40 -my-16">
            Website Banao
          </div>
          <div className="text-white non-italic font-bold text-3xl mx-64 -my-16">
            COHO
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Notification;
//<div className="border-2 h-28 w-full mt-40 border-pink-500"></div>
//<p className="non-italic text-white text-sm font-bold mx-48 my-20">12 March 2020</p>
