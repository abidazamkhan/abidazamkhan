"use client";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line">
        <a href="#home" title="Logo" className="logo">
          <div className="mega-logo">
            <img src="/personal-hotspot/images/logo.png" alt="logo" className="ml-lg-3 m-0" />
          </div>
        </a>

        <div className="navigation-toggle">
          <ul className="slider-social toggle-btn my-0">
            <li>
              <a href="#" className="sidemenu_btn" id="sidemenu_toggle">
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
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#timeline">Timeline</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
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
              <li><a className="social-icon" href="#"><i className="fab fa-facebook-f"></i> </a> </li>
              <li><a className="social-icon" href="#"><i className="fab fa-instagram"></i> </a> </li>
              <li><a className="social-icon" href="#"><i className="fab fa-x-twitter"></i> </a> </li>
              <li><a className="social-icon" href="#"><i className="fab fa-linkedin-in"></i> </a> </li>
            </ul>
            <p>&copy; 2024 MegaOne. Made With Love by Themesindustry</p>
          </div>
        </div>
      </div>
      <a id="close_side_menu" href="#"></a>
    </header>
  );
}
