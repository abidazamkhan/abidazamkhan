import React from "react";
import { UPWORK_HREF } from "@/utils/social";

const Footer = () => {
  return (
    <div className="slider-bottom">
      <div className="slider-footer w-auto">
        <ul className="social-icons-simple">
          <li>
            <a
              className="social-icon"
              href={UPWORK_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
            >
              <i className="fab fa-upwork"></i>{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
      <span className="slider-copyright text-grey">© 2026 Abid Azam Khan.</span>
    </div>
  );
};

export default Footer;
