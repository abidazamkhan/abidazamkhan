import React from 'react';

const Timeline = () => {
  return (
    <section className="section slide3 timeline-bg" id="timeline">
      <div className="container">
        <div className="row pb-5 heading-row">
          <div className="col-12 col-md-7">
            <h3 className="main-font text-uppercase">
              <span className="text-yellow d-block text-uppercase"> My Career </span> 
              <span> History & Timeline </span>
            </h3>
            <p className="py-2 alt-font">A journey through my professional milestones.</p>
          </div>
          <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
            <h2 className="m-0 text-yellow main-font">29</h2>
            <p className="alt-font">Years Old</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="cd-horizontal-timeline loaded">
              <div className="timeline">
                <div className="events-wrapper">
                  <div className="events" style={{ width: 2200 }}>
                    <ol>
                      <li><a href="#" data-date="16/01/2017" className="older-event selected">2003</a></li>
                      <li><a href="#" data-date="28/02/2017" style={{ left: 200 }}>2005</a></li>
                      <li><a href="#" data-date="20/04/2017" style={{ left: 400 }}>2007</a></li>
                      <li><a href="#" data-date="20/05/2017" style={{ left: 600 }}>2009</a></li>
                      <li><a href="#" data-date="09/07/2017" style={{ left: 800 }}>2011</a></li>
                      <li><a href="#" data-date="30/08/2017" style={{ left: 1000 }}>2013</a></li>
                      <li><a href="#" data-date="15/09/2017" style={{ left: 1200 }}>2015</a></li>
                      <li><a href="#" data-date="01/11/2017" style={{ left: 1400 }}>2017</a></li>
                      <li><a href="#" data-date="10/12/2017" style={{ left: 1600 }}>2019</a></li>
                      <li><a href="#" data-date="19/01/2018" style={{ left: 1800 }}>2020</a></li>
                      <li><a href="#" data-date="03/03/2018" style={{ left: 2000 }}>2020</a></li>
                    </ol>
                    <span className="filling-line" aria-hidden="true"></span>
                  </div>
                </div>
                <ul className="cd-timeline-navigation">
                  <li><a href="#" className="prev">Prev</a></li>
                  <li><a href="#" className="next">Next</a></li>
                </ul>
              </div>
              <div className="events-content">
                <ol>
                  <li className="selected" data-date="16/01/2017">
                    <div className="col-12 pl-md-0">
                      <div className="main-content text-uppercase">
                        <h4 className="text-yellow main-font font-weight-normal">15 MAY 2003</h4>
                        <h2 className="main-font">I had graduated from university</h2>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3 pl-md-0">
                        <div className="sub-content">
                            <h5 className="text-uppercase main-font text-yellow">Major subjects</h5>
                            <p className="alt-font">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. </p>
                        </div>
                      </div>
                      <div className="col-12 col-md-3">
                        <div className="sub-content">
                            <h5 className="text-uppercase main-font text-yellow">My Achievements</h5>
                            <p className="alt-font">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. </p>
                        </div>
                      </div>
                      <div className="col-12 col-md-3">
                        <div className="sub-content">
                            <h5 className="text-uppercase main-font text-yellow">What I learned </h5>
                            <p className="alt-font">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. </p>
                        </div>
                      </div>
                      <div className="col-12 col-md-3 pr-md-0">
                        <div className="sub-content">
                            <h5 className="text-uppercase main-font text-yellow">Final year project</h5>
                            <p className="alt-font">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-date="28/02/2017">
                    <div className="col-12 pl-md-0">
                        <div className="main-content text-uppercase">
                            <h4 className="text-yellow main-font font-weight-normal">24 Sep 2005</h4>
                            <h2 className="main-font">I Took Responsibility In Life</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="sub-content">
                            <p>Progressing in my career and taking on more complex projects with greater impact.</p>
                        </div>
                    </div>
                  </li>
                  <li data-date="20/04/2017">
                    <div className="col-12 pl-md-0">
                        <div className="main-content text-uppercase">
                            <h4 className="text-yellow main-font font-weight-normal">02 Sep 2007</h4>
                            <h2 className="main-font">Started Working With Companies</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 pl-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">Major subjects</h5>
                                <p className="alt-font">Collaborated with top-tier firms to deliver high-quality digital products.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pr-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">My Achievements</h5>
                                <p className="alt-font">Recognized for excellence in UI/UX and project management.</p>
                            </div>
                        </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
