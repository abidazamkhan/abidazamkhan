"use client";

export default function ContactForm() {
  return (
    <section className="section slide5 contact-bg" id="contact">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 col-md-7">
            <h3 className="main-font text-uppercase">
              <span className="text-yellow d-block text-uppercase"> Contact Me </span> 
              <span> Lets Get In Touch </span>
            </h3>
            <p className="py-2 alt-font">I am available all the time for any project according to my skills.</p>
          </div>
          <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
            <h2 className="m-0 text-yellow main-font font-weight-bold">MEGA.ONE</h2>
            <p className="alt-font">My Skype ID</p>
          </div>
        </div>
        <form className="contact-form" id="contact-form-data">
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
                />
              </div>

              <div className="form-group">
                <input 
                  className="form-control" 
                  type="tel" 
                  placeholder="Contact No" 
                  id="phone" 
                  name="userPhone" 
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
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
