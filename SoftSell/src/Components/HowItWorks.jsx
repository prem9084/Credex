import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">How It Works</h2>
      <div className="flex justify-around mt-10">
        <div className="text-center">
          <h3 className="font-semibold">Upload License</h3>
          <p>Submit your software license for evaluation.</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold">Get Valuation</h3>
          <p>Receive a fair market valuation for your license.</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold">Get Paid</h3>
          <p>Receive payment directly to your account.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
