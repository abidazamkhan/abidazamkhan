type PortfolioRecord = {
  thumbnail?: string;
  images?: string[];
  tags?: string;
  category?: string[];
  howItWorks?: string;
  title?: string;
  client?: string;
  liveUrl?: string;
};

interface PortfolioSectionProps {
  initialPortfolios: PortfolioRecord[];
  totalCount: number;
}

export default function PortfolioSection({ initialPortfolios, totalCount }: PortfolioSectionProps) {
  return (
    <section className="section slide4 portfolio-bg" id="portfolio">
      <div className="container">
        <div className="row pb-5 heading-row">
          <div className="col-12 col-md-7">
            <h3 className="main-font text-uppercase">
              <span className="text-yellow d-block"> PORTFOLIO </span>
              <span> MY RECENT WORK </span>
            </h3>
            <p className="py-1 alt-font">I believe in art and that is my passion throughout my life.</p>
          </div>
          <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
            <h2 className="m-0 text-yellow main-font" id="portfolio-count">
              {totalCount}
            </h2>
            <p className="alt-font">Portfolio Items</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div
              className="team-classic owl-team owl-carousel text-center"
              id="portfolio-carousel"
            >
              {initialPortfolios.map((portfolio: PortfolioRecord, index: number) => {
                const imageUrl =
                  portfolio.thumbnail ||
                  (portfolio.images && portfolio.images.length > 0
                    ? portfolio.images[0]
                    : "/personal-hotspot/images/portfolio-placeholder.jpg");

                const category = portfolio.tags
                  ? portfolio.tags.split(",")[0].trim()
                  : portfolio.category && portfolio.category.length > 0
                    ? portfolio.category[0]
                    : "Project";

                const description = portfolio.howItWorks
                  ? portfolio.howItWorks.substring(0, 100) +
                  (portfolio.howItWorks.length > 100 ? "..." : "")
                  : "Amazing project with innovative solutions and modern design.";

                const title = portfolio.title ?? "";

                return (
                  <div className="item" key={index}>
                    <div className="team-data-img">
                      <a
                        href={portfolio.liveUrl || "#"}
                        target="_blank"
                        data-fancybox="images"
                        rel="noopener noreferrer"
                      >
                        <div className="single-work">
                          <img
                            src={imageUrl}
                            alt={title}
                            className="portfolio-images"
                            data-no-retina
                            style={{ width: '460px', height: '225px', objectFit: 'cover' }}
                          />
                          <div className="overlay-text center-block">
                            <div className="cases-image-inner">
                              <span className="cases-line top"></span>
                              <span className="cases-line top-right"></span>
                              <span className="cases-line bottom"></span>
                              <span className="cases-line bottom-left"></span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="portfolio-content">
                        <h5 className="text-yellow main-font mb-2 text-uppercase">
                          {title}
                        </h5>
                        <p className="text-capitalize">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="circle ini-customPrevBtn" id="team-circle-left" suppressHydrationWarning>
              <i className="lni-chevron-left"></i>
            </button>
            <button className="circle ini-customNextBtn" id="team-circle-right" suppressHydrationWarning>
              <i className="lni-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
