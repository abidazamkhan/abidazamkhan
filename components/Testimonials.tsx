import React from "react";
import Image from "next/image";
import { testimonials } from "@/utils/testimonial";

const Testimonials = () => {
  return (
    <section className="section slide6 testimonial-bg" id="testimonial">
      <div className="container">
        <div className="row pb-5 heading-row">
          <div className="col-12 col-md-7">
            <h3 className="main-font text-uppercase">
              <span className="text-yellow d-block text-uppercase"> Customers </span> 
              <span> love the work i do </span>
            </h3>
            <p className="py-2 heading-row alt-font">Please look what my clients say about my exceptional work</p>
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
                  <div className="testimonial-img mt-4 relative inline-block">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover mx-auto"
                    />
                  </div>
                  <div className="testimonial-tittle mt-3 mb-3"><h4 className="mb-0 text-yellow main-font font-weight-normal text-uppercase">{testimonial.name}</h4></div>
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
