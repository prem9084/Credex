import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">Customer Testimonials</h2>
      <div className="mt-10 space-y-4">
        <div className="text-center">
          <p>"SoftSell made selling my licenses a breeze!"</p>
          <p>- John Doe, Software Engineer at TechCorp</p>
        </div>
        <div className="text-center">
          <p>"I got a great price for my software licenses!"</p>
          <p>- Jane Smith, IT Manager at Business Inc.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
