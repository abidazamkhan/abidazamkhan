import React from "react";
import Image from "next/image";
import { testimonials } from "@/utils/testimonial";
import { UPWORK_HREF } from "@/utils/social";

const Testimonials = () => {
  return (
    <section className="section slide6 testimonial-bg" id="testimonial">
      <div className="container">
        <div className="row pb-5 heading-row">
          <div className="col-12 col-md-7">
            <h3 className="main-font text-uppercase">
              <span className="text-yellow d-block text-uppercase">Upwork</span>
              <span>Client feedback</span>
            </h3>
            <p className="py-2 heading-row alt-font">
              These are notes from people I have worked with on Upwork—where feedback is
              public and tied to real projects.{" "}
              <a
                className="text-yellow"
                href={UPWORK_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit my Upwork profile
              </a>{" "}
              to read the full review history and many more.
            </p>
          </div>
          <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
            <h2 className="m-0 text-yellow main-font">200+</h2>
            <p className="alt-font">Clients Worldwide</p>
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-12">
            <div id="testimonial-carousal" className="testimonial-owl owl-carousel owl-theme">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="item text-center">
                  <div className="icon-quotes mb-4"><i className="fas fa-quote-right"></i></div>
                  <div className="description">
                    <p className="text-grey paragraph">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
