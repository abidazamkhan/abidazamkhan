import React from 'react';

const About = () => {
  return (
    <section className="section slide2 skills" id="about">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 col-md-7 pl-md-0">
            <h3 className="main-font text-uppercase">
              <span className="text-yellow d-block"> Product Designer & </span> 
              <span> Digital Creative Director </span>
            </h3>
            <p className="py-2 alt-font">Specialized in UI/UX, Branding and digital designs.</p>
          </div>
          <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
            <h2 className="m-0 text-yellow main-font">12+</h2>
            <p className="alt-font">Years of Experience</p>
          </div>
        </div>
        <div className="row pt-md-5 skill-box">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-6 text-center text-md-left pl-md-0">
                <h4 className="main-font text-yellow skill">WEB DESIGN</h4>
                <p className="alt-font text-white mt-3">High-end bespoke web designs tailored to your brand identity.</p>
              </div>
              <div className="col-12 col-md-6 pt-5 pt-md-0 pr-md-0 text-center text-md-left">
                <h4 className="main-font text-yellow skill">MARKETING</h4>
                <p className="alt-font text-white mt-3">Strategic digital marketing solutions to grow your online presence.</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-md-6 text-center text-md-left pl-md-0">
                <h4 className="main-font text-yellow skill">DEVELOPMENT</h4>
                <p className="alt-font text-white mt-3">Clean, responsive code using latest frontend technologies.</p>
              </div>
              <div className="col-12 col-md-6 pt-5 pt-md-0 text-center text-md-left pr-md-0">
                <h4 className="main-font text-yellow skill">DIGITAL MEDIA</h4>
                <p className="alt-font text-white mt-3">Creative content production for all digital platforms.</p>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-5 offset-md-1 text-left pr-md-0 bars-section">
            <ul className="progress-bar-side">
              <li className="custom-progress text-white">
                <h6 className="mb-0 text-capitalize mons-font">Adobe Photoshop<span className="float-right"><b className="numscroller">96</b>%</span></h6>
                <div className="progress">
                  <div className="progress-bar bg-yellow" role="progressbar" aria-valuenow={96} aria-valuemin={0} aria-valuemax={100} style={{ width: '96%' }}></div>
                </div>
              </li>
              <li className="custom-progress text-white">
                <h6 className="mb-0 text-capitalize mons-font">HTML / WordPress<span className="float-right"><b className="numscroller">92</b>%</span></h6>
                <div className="progress">
                  <div className="progress-bar bg-yellow" role="progressbar" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} style={{ width: '92%' }}></div>
                </div>
              </li>
              <li className="custom-progress text-white">
                <h6 className="mb-0 text-capitalize mons-font">Development<span className="float-right"><b className="numscroller">90</b>%</span></h6>
                <div className="progress">
                  <div className="progress-bar bg-yellow" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
