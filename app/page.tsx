import PortfolioSection from "@/components/PortfolioSection";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Abid Azam Khan | Full-Stack Web, Mobile & Desktop App Developer",
  description:
    "Senior Software Engineer & CEO of UNIPIXER. Specializing in high-performance web, mobile & desktop apps using React, Next.js, Node.js & secure APIs.",
  keywords:
    "Abid Azam Khan, Full-Stack Developer, Web Developer, Mobile App Developer, Desktop App Developer, Senior Software Engineer, System Architect, UNIPIXER, React, Next.js, Angular, React Native, Flutter, Electron.js, Node.js, C# ASP.NET, Laravel, Custom Software Development",
  openGraph: {
    title: "Abid Azam Khan | Portfolio",
    description:
      "Senior Software Engineer & CEO of UNIPIXER. Digital Creative Director & Product Designer with 10+ years of experience.",
    images: ["/personal-hotspot/images/slider-img.png"],
  },
};
type PortfolioItem = {
  category: string[];
  id: string;
  title?: string;
  thumbnail?: string;
  coverImage?: string;
  images?: string[];
  howItWorks?: string;
  liveUrl?: string;
  tags?: string;
  feature?: string;
  development?: string;
  quote?: string;
  quoteAuthor?: string;
  processResults?: string;
  technologies?: string[];
  client?: string;
  publishedAt?: string;
};

type PortfolioResponse = {
  data?: {
    portfolios?: PortfolioItem[];
  };
};

const fetchPortfolio = async (): Promise<PortfolioItem[]> => {
  try {
    const res = await fetch(
      "https://core.unipixer.com/api/v1/portfolio/published",
      {
        next: { revalidate: 300 },
      },
    );

    if (!res.ok) return [];

    const data: PortfolioResponse = await res.json();
    return data.data?.portfolios ?? [];
  } catch {
    return [];
  }
};

export default async function Home() {
  const portfolio = await fetchPortfolio();
  // console.log("data", portfolio);
  return (
    <>
      <Script id="ph-body-attrs" strategy="afterInteractive">
        {`document.body.setAttribute('data-spy','scroll');document.body.setAttribute('data-target','.navbar');document.body.setAttribute('data-offset','90');`}
      </Script>

      <header>
        <nav className="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line">
          <a href="#home" title="Logo" className="logo">
            <div className="mega-logo">
              <img
                src="/personal-hotspot/images/logo.png"
                alt="logo"
                className="ml-lg-3 m-0"
              />
            </div>
          </a>

          <div className="navigation-toggle">
            <ul className="slider-social toggle-btn my-0">
              <li>
                <a
                  href="javascript:void(0);"
                  className="sidemenu_btn"
                  id="sidemenu_toggle"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="side-menu hidden">
          <span id="btn_sideNavClose">
            <i className="las la-times btn-close"></i>
          </span>
          <div className="inner-wrapper">
            <nav className="side-nav w-100">
              <a href="#home" title="Logo" className="logo navbar-brand">
                <img src="/personal-hotspot/images/logo.png" alt="logo" />
              </a>
              <ul className="navbar-nav text-capitalize">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#timeline">
                    Timeline
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="text-center sidebar_btn">
                <a
                  href="/personal-hotspot/download-resume/resume.pdf"
                  download
                  className="btn btn-medium btn-rounded btn-yellow text-capitalize"
                >
                  Download Resume
                </a>
              </div>
            </nav>

            <div className="side-footer w-100">
              <ul className="social-icons-simple">
                <li>
                  <a className="social-icon" href="javascript:void(0)">
                    <i className="fab fa-upwork"></i>{" "}
                  </a>{" "}
                </li>
                <li>
                  <a className="social-icon" href="javascript:void(0)">
                    <i className="fab fa-github"></i>{" "}
                  </a>{" "}
                </li>
                <li>
                  <a className="social-icon" href="javascript:void(0)">
                    <i className="fab fa-x-twitter"></i>{" "}
                  </a>{" "}
                </li>
                <li>
                  <a className="social-icon" href="javascript:void(0)">
                    <i className="fab fa-linkedin-in"></i>{" "}
                  </a>{" "}
                </li>
                <li>
                  <a className="social-icon" href="javascript:void(0)">
                    <i className="fab fa-facebook-f"></i>{" "}
                  </a>{" "}
                </li>
              </ul>
              <p>&copy; 2024 MegaOne. Made With Love by Themesindustry</p>
            </div>
          </div>
        </div>
        <a id="close_side_menu" href="javascript:void(0);"></a>
      </header>

      <div id="pagepiling">
        <section className="section slide1 p-0" id="home">
          <div className="slider-area" id="slider-area">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 image-order">
                <div className="slider-image">
                  <img
                    src="/personal-hotspot/images/slider-img.png"
                    alt="Slider-Image"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 text-md-center text-lg-left">
                <div className="slider-content">
                  <h1 className="main-font text-uppercase">
                    <span className="slider-text px-2"> Hello, I am </span>{" "}
                    <span className="d-block text-yellow">
                      {" "}
                      Abid Azam Khan.
                    </span>
                  </h1>
                  <p className="pt-3 alt-font content-para">
                    I am a Top Rated Full Stack Developer in Upwork with over a
                    decade of industry experience. I specialize in delivering
                    high-performance web and mobile applications using React,
                    Next.js, Angular, Node, and Laravel.
                  </p>
                </div>
              </div>
            </div>
            <div className="circle-one">
              <span
                data-tootik="About"
                data-tootik-conf="right dark square shadow"
              >
                <a href="#about">
                  <span className="animated-circle position-relative"></span>
                </a>
              </span>
            </div>
            <div className="circle-two">
              <span
                data-tootik="Timeline"
                data-tootik-conf="left dark square shadow"
              >
                <a href="#timeline">
                  <span className="animated-circle position-relative"></span>
                </a>
              </span>
            </div>
            <div className="circle-three">
              <span
                data-tootik="Portfolio"
                data-tootik-conf="top dark square shadow"
              >
                <a href="#portfolio">
                  <span className="animated-circle position-relative"></span>
                </a>
              </span>
            </div>
            <div className="circle-four">
              <span
                data-tootik="Testimonials"
                data-tootik-conf="bottom dark square shadow"
              >
                <a href="#testimonial">
                  <span className="animated-circle position-relative"></span>
                </a>
              </span>
            </div>
            <div className="circle-five">
              <span
                data-tootik="Contact"
                data-tootik-conf="bottom dark square shadow"
              >
                <a href="#contact">
                  <span className="animated-circle position-relative"></span>
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className="section slide2 skills" id="about">
          <div className="container">
            <div className="row pb-5">
              <div className="col-12 col-md-7 pl-md-0">
                <h3 className="main-font text-uppercase">
                  <span className="text-yellow d-block">
                    {" "}
                    FULL STACK WEB, MOBILE &{" "}
                  </span>{" "}
                  <span> DESKTOP APP DEVELOPER</span>
                </h3>
                <p className="py-2 alt-font">
                  Specialized in high-performance and secure app development.
                </p>
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
                    <h4 className="main-font text-yellow skill">
                      FULL-STACK DEVELOPMENT
                    </h4>
                    <p className="alt-font text-white mt-3">
                      Building seamless custom web applications using React,
                      Next.js, and Angular for real business results.
                    </p>
                  </div>
                  <div className="col-12 col-md-6 pt-5 pt-md-0 pr-md-0 text-center text-md-left">
                    <h4 className="main-font text-yellow skill">
                      CROSS-PLATFORM APPS
                    </h4>
                    <p className="alt-font text-white mt-3">
                      Developing powerful mobile and desktop applications using
                      React Native, Flutter, and Electron.js.
                    </p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12 col-md-6 text-center text-md-left pl-md-0">
                    <h4 className="main-font text-yellow skill">
                      BACK-END & DATABASES
                    </h4>
                    <p className="alt-font text-white mt-3">
                      Developing secure APIs using Node.js, C# ASP.NET, and
                      Laravel, integrating MySQL, PostgreSQL, and MongoDB.
                    </p>
                  </div>
                  <div className="col-12 col-md-6 pt-5 pt-md-0 text-center text-md-left pr-md-0">
                    <h4 className="main-font text-yellow skill">
                      QUALITY & TESTING
                    </h4>
                    <p className="alt-font text-white mt-3">
                      Writing reliable TypeScript code, ensuring flawless
                      execution through rigorous unit, black-box, and white-box
                      testing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 offset-md-1 text-left pr-md-0 bars-section">
                <ul className="progress-bar-side">
                  <li className="custom-progress text-white">
                    <h6 className="mb-0 text-capitalize mons-font">
                      Front-End (React, Next.js, Angular)
                      <span className="float-right">
                        <b className="numscroller">98</b>%
                      </span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar bg-yellow"
                        role="progressbar"
                        aria-valuenow={98}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </li>
                  <li className="custom-progress text-white">
                    <h6 className="mb-0 text-capitalize mons-font">
                      Back-End (Node.js, Laravel, ASP.NET)
                      <span className="float-right">
                        <b className="numscroller">95</b>%
                      </span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar bg-yellow"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </li>
                  <li className="custom-progress text-white">
                    <h6 className="mb-0 text-capitalize mons-font">
                      Mobile & Desktop Apps (React Native, Electron)
                      <span className="float-right">
                        <b className="numscroller">93</b>%
                      </span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar bg-yellow"
                        role="progressbar"
                        aria-valuenow={93}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </li>
                  <li className="custom-progress text-white">
                    <h6 className="mb-0 text-capitalize mons-font">
                      Database Architecture (SQL & NoSQL)
                      <span className="float-right">
                        <b className="numscroller">91</b>%
                      </span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar bg-yellow"
                        role="progressbar"
                        aria-valuenow={91}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </li>
                  <li className="custom-progress text-white">
                    <h6 className="mb-0 text-capitalize mons-font">
                      Custom Automation & Scripting
                      <span className="float-right">
                        <b className="numscroller">90</b>%
                      </span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar bg-yellow"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section slide3 timeline-bg" id="timeline">
          <div className="container">
            <div className="row pb-5 heading-row">
              <div className="col-12 col-md-7">
                <h3 className="main-font text-uppercase">
                  <span className="text-yellow d-block text-uppercase">
                    {" "}
                    My Career{" "}
                  </span>{" "}
                  <span> History & Timeline </span>
                </h3>
                <p className="py-2 alt-font">
                  Please look what I have done so far in my life.
                </p>
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
                      <div className="events" style={{ width: "2200px" }}>
                        <ol>
                          <li>
                            <a
                              href="#"
                              data-date="16/01/2017"
                              className="older-event selected"
                            >
                              2015
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-date="20/05/2017"
                              style={{ left: "200px" }}
                            >
                              2017
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-date="20/09/2017"
                              style={{ left: "200px" }}
                            >
                              2019
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-date="20/10/2017"
                              style={{ left: "200px" }}
                            >
                              2020
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-date="20/02/2018"
                              style={{ left: "200px" }}
                            >
                              2022
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-date="20/04/2018"
                              style={{ left: "200px" }}
                            >
                              2023
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-date="20/10/2018"
                              style={{ left: "200px" }}
                            >
                              2026
                            </a>
                          </li>
                        </ol>
                        <span
                          className="filling-line"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <ul className="cd-timeline-navigation">
                      <li>
                        <a href="#" className="prev">
                          Prev
                        </a>
                      </li>
                      <li>
                        <a href="#" className="next">
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="events-content">
                    <ol>
                      <li className="selected" data-date="16/01/2017">
                        <div className="col-12 pl-md-0">
                          <div className="main-content text-uppercase">
                            <h4 className="text-yellow main-font font-weight-normal">
                              2015
                            </h4>
                            <h2 className="main-font">
                              BEGAN MY PROFESSIONAL AND ACADEMIC JOURNEY
                            </h2>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-12 col-md-3 pl-md-0">
                            <div className="sub-content">
                              <h5 className="text-uppercase main-font text-yellow">
                                ACADEMIC START
                              </h5>
                              <p className="alt-font">
                                Admitted to Daffodil International University to
                                pursue my Bachelor of Science in Computer
                                Science.
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="sub-content">
                              <h5 className="text-uppercase main-font text-yellow">
                                PROFESSIONAL DEBUT
                              </h5>
                              <p className="alt-font">
                                Started my career as a full-time Programmer at
                                the Window IT Solution software agency.
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="sub-content">
                              <h5 className="text-uppercase main-font text-yellow">
                                WORK-STUDY BALANCE
                              </h5>
                              <p className="alt-font">
                                Managed a full-time programming job alongside my
                                university studies to gain real-world software
                                skills.
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-md-3 pr-md-0">
                            <div className="sub-content">
                              <h5 className="text-uppercase main-font text-yellow">
                                MOTIVATION & GOAL
                              </h5>
                              <p className="alt-font">
                                Showed strong self-reliance by funding my own
                                education to build a successful technical
                                future.
                              </p>
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

        <PortfolioSection portfolio={portfolio} />
        <section className="section slide6 testimonial-bg" id="testimonial">
          <div className="container">
            <div className="row pb-5 heading-row">
              <div className="col-12 col-md-7">
                <h3 className="main-font text-uppercase">
                  <span className="text-yellow d-block text-uppercase">
                    {" "}
                    Customers{" "}
                  </span>{" "}
                  <span> love the work i do </span>
                </h3>
                <p className="py-2 heading-row alt-font">
                  Please look what my clients say about my exceptional work
                </p>
              </div>
              <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
                <h2 className="m-0 text-yellow main-font">200+</h2>
                <p className="alt-font">Clients Worldwide</p>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-12">
                <div
                  id="testimonial-carousal"
                  className="testimonial-owl owl-carousel owl-theme"
                >
                  <div className="item text-center">
                    <div className="icon-quotes mb-4">
                      <i className="fas fa-quote-right"></i>
                    </div>
                    <div className="description">
                      <p className="text-grey paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce vitae egestas mi, vel dapibus diam.
                      </p>
                    </div>
                    <div className="testimonial-img mt-4">
                      <img
                        src="/personal-hotspot/images/testimonial-img-1.png"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-tittle mt-3 mb-3">
                      <h4 className="mb-0 text-yellow main-font font-weight-normal text-uppercase">
                        Sara Jones
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section slide5 contact-bg" id="contact">
          <div className="container">
            <div className="row pb-5">
              <div className="col-12 col-md-7">
                <h3 className="main-font text-uppercase">
                  <span className="text-yellow d-block text-uppercase">
                    {" "}
                    Contact Me{" "}
                  </span>{" "}
                  <span> Lets Get In Touch </span>
                </h3>
                <p className="py-2 alt-font">
                  I am available all the time for any project acording to my
                  skills.
                </p>
              </div>
              <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
                <h2 className="m-0 text-yellow main-font font-weight-bold">
                  hello@abidazam.com
                </h2>
                <p className="alt-font">My Mail ID</p>
              </div>
            </div>
            <form
              className="contact-form"
              id="contact-form-data"
              suppressHydrationWarning
            >
              <div className="row pt-3">
                <div className="col-12">
                  <div className="col-sm-12 px-0" id="result"></div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      required
                      id="first_name"
                      name="firstName"
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="Contact No"
                      id="phone"
                      name="userPhone"
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      name="userEmail"
                      suppressHydrationWarning
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 offset-md-1 contact-form">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Type Your Message Here"
                      id="message"
                      name="userMessage"
                    ></textarea>
                  </div>
                </div>
                <div className="col-12 px-md-0">
                  <div className="contact-btn pt-5 text-center text-lg-left">
                    <button
                      type="button"
                      className="btn btn-medium btn-rounded btn-yellow text-capitalize contact_btn"
                      suppressHydrationWarning
                    >
                      Contact Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <div className="slider-bottom">
        <div className="slider-footer w-auto">
          <ul className="social-icons-simple">
            <li>
              <a className="social-icon" href="javascript:void(0)">
                <i className="fab fa-upwork"></i>{" "}
              </a>{" "}
            </li>
            <li>
              <a className="social-icon" href="javascript:void(0)">
                <i className="fab fa-github"></i>{" "}
              </a>{" "}
            </li>
            <li>
              <a className="social-icon" href="javascript:void(0)">
                <i className="fab fa-x-twitter"></i>{" "}
              </a>{" "}
            </li>
            <li>
              <a className="social-icon" href="javascript:void(0)">
                <i className="fab fa-linkedin-in"></i>{" "}
              </a>{" "}
            </li>
          </ul>
        </div>
        <span className="slider-copyright text-grey">
          © 2026 Abid Azam Khan.
        </span>
      </div>

      <Script src="/vendor/js/bundle.min.js" strategy="afterInteractive" />
      <Script src="/vendor/js/jquery.appear.js" strategy="afterInteractive" />
      <Script
        src="/vendor/js/jquery.fancybox.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/vendor/js/owl.carousel.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/personal-hotspot/js/jquery.pagepiling.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/personal-hotspot/js/timeline.js"
        strategy="afterInteractive"
      />
      <Script src="/vendor/js/contact_us.js" strategy="afterInteractive" />
      <Script
        src="/personal-hotspot/js/script.js"
        strategy="afterInteractive"
      />
    </>
  );
}

