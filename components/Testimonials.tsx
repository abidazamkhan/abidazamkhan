import React from 'react';

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
              <div className="item text-center">
                <div className="icon-quotes mb-4"><i className="fas fa-quote-right"></i></div>
                <div className="description">
                  <p className="text-grey paragraph">Philip's attention to detail and creative vision transformed our brand. Highly recommended!</p>
                </div>
                <div className="testimonial-img mt-4"><img src="/personal-hotspot/images/testimonial-img-1.png" alt="Sara Jones" /></div>
                <div className="testimonial-tittle mt-3 mb-3"><h4 className="mb-0 text-yellow main-font font-weight-normal text-uppercase">Sara Jones</h4></div>
              </div>
              <div className="item text-center">
                <div className="icon-quotes mb-4"><i className="fas fa-quote-right"></i></div>
                <div className="description">
                  <p className="text-grey paragraph">Exceptional work and very professional approach to digital media. Truly impressive!</p>
                </div>
                <div className="testimonial-img mt-4"><img src="/personal-hotspot/images/testimonial-img-2.png" alt="Ricky Clark" /></div>
                <div className="testimonial-tittle mt-3 mb-3"><h4 className="mb-0 text-yellow main-font font-weight-normal text-uppercase">Ricky Clark</h4></div>
              </div>
              <div className="item text-center">
                <div className="icon-quotes mb-4"><i className="fas fa-quote-right"></i></div>
                <div className="description">
                  <p className="text-grey paragraph">Great experience working with him. He delivered exactly what we needed and more.</p>
                </div>
                <div className="testimonial-img mt-4"><img src="/personal-hotspot/images/testimonial-img-3.png" alt="Johnson Smith" /></div>
                <div className="testimonial-tittle mt-3 mb-3"><h4 className="mb-0 text-yellow main-font font-weight-normal text-uppercase">Johnson Smith</h4></div>
              </div>
              <div className="item text-center">
                <div className="icon-quotes mb-4"><i className="fas fa-quote-right"></i></div>
                <div className="description">
                  <p className="text-grey paragraph">Very talented and creative individual. The best choice for digital design.</p>
                </div>
                <div className="testimonial-img mt-4"><img src="/personal-hotspot/images/testimonial-img-4.png" alt="Ellie Joe" /></div>
                <div className="testimonial-tittle mt-3 mb-3"><h4 className="mb-0 text-yellow main-font font-weight-normal text-uppercase">Ellie Joe</h4></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
