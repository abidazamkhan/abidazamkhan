import Image from 'next/image';

const Hero = () => {
  return (
    <section className="section slide1 p-0" id="home">
      <div className="slider-area" id="slider-area">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 image-order">
            <div className="slider-image">
              <Image
                src="/personal-hotspot/images/slider-img.png"
                alt="Abid Azam Khan Portfolio"
                width={600}
                height={600}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 text-md-center text-lg-left">
            <div className="slider-content">
              <h1 className="main-font text-uppercase">
                <span className="slider-text px-2"> Hello, I am </span> 
                <span className="d-block text-yellow"> Abid Azam Khan.</span>
              </h1>
              <p className="pt-3 alt-font content-para">
                I am a Top Rated Full Stack Developer in Upwork with over a decade of industry experience. I specialize in delivering high-performance web and mobile applications using React, Next.js, Angular, Node, and Laravel.
              </p>
            </div>
          </div>
        </div>
        
        <div className="circle-one">
          <span data-tootik="About" data-tootik-conf="right dark square shadow">
            <a href="#about">
              <span className="animated-circle position-relative"></span>
            </a>
          </span>
        </div>
        
        <div className="circle-two">
          <span data-tootik="Timeline" data-tootik-conf="left dark square shadow">
            <a href="#timeline">
              <span className="animated-circle position-relative"></span>
            </a>
          </span>
        </div>
        
        <div className="circle-three">
          <span data-tootik="Portfolio" data-tootik-conf="top dark square shadow">
            <a href="#portfolio">
              <span className="animated-circle position-relative"></span>
            </a>
          </span>
        </div>
        
        <div className="circle-four">
          <span data-tootik="Testimonials" data-tootik-conf="bottom dark square shadow">
            <a href="#testimonial">
              <span className="animated-circle position-relative"></span>
            </a>
          </span>
        </div>
        
        <div className="circle-five">
          <span data-tootik="Contact" data-tootik-conf="bottom dark square shadow">
            <a href="#contact">
              <span className="animated-circle position-relative"></span>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
