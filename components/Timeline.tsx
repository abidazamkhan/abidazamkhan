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
            <p className="py-2 alt-font">Please look what I have done so far in my life.</p>
          </div>
          <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
            <h2 className="m-0 text-yellow main-font">31</h2>
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
                      <li><a href="#" data-date="16/01/2017" className="older-event selected">2015</a></li>
                      <li><a href="#" data-date="20/05/2017" style={{ left: 200 }}>2017</a></li>
                      <li><a href="#" data-date="20/09/2017" style={{ left: 400 }}>2019</a></li>
                      <li><a href="#" data-date="20/10/2017" style={{ left: 600 }}>2020</a></li>
                      <li><a href="#" data-date="20/02/2018" style={{ left: 800 }}>2022</a></li>
                      <li><a href="#" data-date="20/04/2018" style={{ left: 1000 }}>2023</a></li>
                      <li><a href="#" data-date="20/10/2018" style={{ left: 1200 }}>2026</a></li>
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
                        <h4 className="text-yellow main-font font-weight-normal">2015</h4>
                        <h2 className="main-font">BEGAN MY PROFESSIONAL AND ACADEMIC JOURNEY</h2>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3 pl-md-0">
                        <div className="sub-content">
                            <h5 className="text-uppercase main-font text-yellow">ACADEMIC START</h5>
                            <p className="alt-font">Admitted to Daffodil International University to pursue my Bachelor of Science in Computer Science.</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-3">
                        <div className="sub-content">
                            <h5 className="text-uppercase main-font text-yellow">PROFESSIONAL DEBUT</h5>
                            <p className="alt-font">Started my career as a full-time Programmer at the Window IT Solution software agency.</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-3">
                        <div className="sub-content">
                            <h5 className="text-uppercase main-font text-yellow">WORK-STUDY BALANCE</h5>
                            <p className="alt-font">Managed a full-time programming job alongside my university studies to gain real-world software skills.</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-3 pr-md-0">
                        <div className="sub-content">
                            <h5 className="text-uppercase main-font text-yellow">MOTIVATION & GOAL</h5>
                            <p className="alt-font">Showed strong self-reliance by funding my own education to build a successful technical future.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-date="20/05/2017">
                    <div className="col-12 pl-md-0">
                        <div className="main-content text-uppercase">
                            <h4 className="text-yellow main-font font-weight-normal">02 July 2017</h4>
                            <h2 className="main-font">BECAME SYSTEM ARCHITECT AT FIREFLY</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 pl-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">CORE RESPONSIBILITIES</h5>
                                <p className="alt-font">Architected globally distributed cloud infrastructure and advanced algorithms for Firefly&apos;s essential systems.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pr-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">My Achievements</h5>
                                <p className="alt-font">Specialized in building high-performance, low-latency solutions, deeply immersed in cloud architecture and system resilience.</p>
                            </div>
                        </div>
                    </div>
                  </li>
                  <li data-date="20/09/2017">
                    <div className="col-12 pl-md-0">
                        <div className="main-content text-uppercase">
                            <h4 className="text-yellow main-font font-weight-normal">13 June 2019</h4>
                            <h2 className="main-font">GRADUATED (BACHELOR IN COMPUTER SCIENCE)</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 pl-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">MAJOR SUBJECTS</h5>
                                <p className="alt-font">Final year studies specialized in machine learning applications and globally distributed system solutions.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pr-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">MY ACHIEVEMENTS</h5>
                                <p className="alt-font">Successfully completed BS degree, having balanced intensive technical leadership with consecutive academic semesters.</p>
                            </div>
                        </div>
                    </div>
                  </li>
                  <li data-date="20/10/2017">
                    <div className="col-12 pl-md-0">
                        <div className="main-content text-uppercase">
                            <h4 className="text-yellow main-font font-weight-normal">09 January 2020</h4>
                            <h2 className="main-font">BEGAN PARTNERING WITH ONLINE & OFFLINE CLIENTS</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 pl-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">GLOBAL REACH</h5>
                                <p className="alt-font">Started delivering custom full-stack software solutions for international online clients and local offline businesses.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pr-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">PROVEN SUCCESS</h5>
                                <p className="alt-font">Built a successful independent consulting business, maintaining a flawless 100% client project success rate.</p>
                            </div>
                        </div>
                    </div>
                  </li>
                  <li data-date="20/02/2018">
                    <div className="col-12 pl-md-0">
                        <div className="main-content text-uppercase">
                            <h4 className="text-yellow main-font font-weight-normal">17 March 2022</h4>
                            <h2 className="main-font">JOINED HEAD-HUNTERS AGENCY</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 pl-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">SENIOR SOFTWARE ENGINEER</h5>
                                <p className="alt-font">Started a fully remote position with this international agency to develop highly scalable systems.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pr-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">GLOBAL COLLABORATION</h5>
                                <p className="alt-font">Collaborated across international time zones to deliver premium full-stack applications for global enterprise clients.</p>
                            </div>
                        </div>
                    </div>
                  </li>
                  <li data-date="20/04/2018">
                    <div className="col-12 pl-md-0">
                        <div className="main-content text-uppercase">
                            <h4 className="text-yellow main-font font-weight-normal">07 February 2023</h4>
                            <h2 className="main-font">LAUNCHED FREELANCE CAREER ON UPWORK</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 pl-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">FREELANCE DEVELOPMENT</h5>
                                <p className="alt-font">Started delivering premium full-stack web and mobile applications as an exclusive independent Upwork freelancer.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pr-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">TOP RATED SUCCESS</h5>
                                <p className="alt-font">Achieved Top Rated status within the same year, maintaining a flawless job success rate.</p>
                            </div>
                        </div>
                    </div>
                  </li>
                  <li data-date="20/10/2018">
                    <div className="col-12 pl-md-0">
                        <div className="main-content text-uppercase">
                            <h4 className="text-yellow main-font font-weight-normal">01 January 2026</h4>
                            <h2 className="main-font">FOUNDED UNIPIXER & BECAME CEO</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 pl-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">COMPANY LAUNCH</h5>
                                <p className="alt-font">Started a custom software company delivering premium solutions for fintech, healthcare, and education sectors.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pr-md-0">
                            <div className="sub-content">
                                <h5 className="text-uppercase main-font text-yellow">EXECUTIVE LEADERSHIP</h5>
                                <p className="alt-font">Leading the technical strategy and business operations as Chief Executive Officer for international clients.</p>
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
