import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-20 bg-blue-600 text-white mt-2">
      <h1 className="text-4xl font-bold">Welcome to SoftSell</h1>
      <p className="mt-4 text-lg">
        Sell your software licenses easily and quickly!
      </p>
      <button className="mt-6 px-4 py-2 bg-white text-blue-600 font-semibold rounded cursor-pointer">
        Get a Quote
      </button>
    </section>
  );
};

export default HeroSection;
