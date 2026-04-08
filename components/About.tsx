import React from 'react';

const About = () => {
  return (
    <section className="section slide2 skills" id="about">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 col-md-7 pl-md-0">
            <h3 className="main-font text-uppercase">
              <span className="text-yellow d-block"> FULL STACK WEB, MOBILE & </span> 
              <span> DESKTOP APP DEVELOPER </span>
            </h3>
            <p className="py-2 alt-font">Specialized in high-performance and secure app development.</p>
          </div>
          <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
            <h2 className="m-0 text-yellow main-font">10+</h2>
            <p className="alt-font">Years of Experience</p>
          </div>
        </div>
        <div className="row pt-md-5 skill-box">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-6 text-center text-md-left pl-md-0">
                <h4 className="main-font text-yellow skill">FULL-STACK DEVELOPMENT</h4>
                <p className="alt-font text-white mt-3">Building seamless custom web applications using React, Next.js, and Angular for real business results.</p>
              </div>
              <div className="col-12 col-md-6 pt-5 pt-md-0 pr-md-0 text-center text-md-left">
                <h4 className="main-font text-yellow skill">CROSS-PLATFORM APPS</h4>
                <p className="alt-font text-white mt-3">Developing powerful mobile and desktop applications using React Native, Flutter, and Electron.js.</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-md-6 text-center text-md-left pl-md-0">
                <h4 className="main-font text-yellow skill">BACK-END & DATABASES</h4>
                <p className="alt-font text-white mt-3">Developing secure APIs using Node.js, C# ASP.NET, and Laravel, integrating MySQL, PostgreSQL, and MongoDB.</p>
              </div>
              <div className="col-12 col-md-6 pt-5 pt-md-0 text-center text-md-left pr-md-0">
                <h4 className="main-font text-yellow skill">QUALITY & TESTING</h4>
                <p className="alt-font text-white mt-3">Writing reliable TypeScript code, ensuring flawless execution through rigorous unit, black-box, and white-box testing.</p>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-5 offset-md-1 text-left pr-md-0 bars-section">
            <ul className="progress-bar-side">
              <li className="custom-progress text-white">
                <h6 className="mb-0 text-capitalize mons-font">Front-End (React, Next.js, Angular)<span className="float-right"><b className="numscroller">98</b>%</span></h6>
                <div className="progress">
                  <div className="progress-bar bg-yellow" role="progressbar" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} style={{ width: '98%' }}></div>
                </div>
              </li>
              <li className="custom-progress text-white">
                <h6 className="mb-0 text-capitalize mons-font">Back-End (Node.js, Laravel, ASP.NET)<span className="float-right"><b className="numscroller">95</b>%</span></h6>
                <div className="progress">
                  <div className="progress-bar bg-yellow" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{ width: '95%' }}></div>
                </div>
              </li>
              <li className="custom-progress text-white">
                <h6 className="mb-0 text-capitalize mons-font">Mobile & Desktop Apps (React Native, Electron)<span className="float-right"><b className="numscroller">93</b>%</span></h6>
                <div className="progress">
                  <div className="progress-bar bg-yellow" role="progressbar" aria-valuenow={93} aria-valuemin={0} aria-valuemax={100} style={{ width: '93%' }}></div>
                </div>
              </li>
              <li className="custom-progress text-white">
                <h6 className="mb-0 text-capitalize mons-font">Database Architecture (SQL & NoSQL)<span className="float-right"><b className="numscroller">91</b>%</span></h6>
                <div className="progress">
                  <div className="progress-bar bg-yellow" role="progressbar" aria-valuenow={91} aria-valuemin={0} aria-valuemax={100} style={{ width: '91%' }}></div>
                </div>
              </li>
              <li className="custom-progress text-white">
                <h6 className="mb-0 text-capitalize mons-font">Custom Automation & Scripting<span className="float-right"><b className="numscroller">90</b>%</span></h6>
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
