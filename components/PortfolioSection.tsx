"use client"

import { useState } from "react";

type PortfolioItem = {
  category: string[];
  id: string;
  title?: string;
  thumbnail?: string;
  images?: string[];
  howItWorks?: string;
  liveUrl?: string;
  tags?: string;
  client?: string;
  technologies?: string[];
  publishedAt?: string;
  processResults?: string;
};

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const getPortfolioSummary = (item: PortfolioItem) => {
  const source = item.processResults || item.howItWorks || "";
  if (!source) return "No project summary available.";
  const plainText = stripHtml(source);
  return plainText.length > 220 ? `${plainText.slice(0, 220).trim()}...` : plainText;
};

const PortfolioSection = ({portfolio}: {portfolio: PortfolioItem[];})  => {

  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <>
    
      <section className="section slide4 portfolio-bg" id="portfolio">
          <div className="container">
            <div className="row pb-5 heading-row">
              <div className="col-12 col-md-7">
                <h3 className="main-font text-uppercase">
                  <span className="text-yellow d-block"> PORTFOLIO </span>{" "}
                  <span> MY RECENT WORK </span>
                </h3>
                <p className="py-1 alt-font">
                  I believe in art and that is my passion throughout my life.
                </p>
              </div>
              <div className="col-12 col-md-5 text-md-right pt-4 pt-md-0">
                <h2 className="m-0 text-yellow main-font">{portfolio.length}</h2>
                <p className="alt-font">Portfolio Items</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="team-classic owl-team owl-carousel text-center">
                  {portfolio.map((item) => (
                    <PortfolioCard key={item.id} item={item} onOpen={() => setActiveItem(item)} />
                  ))}
                </div>
                <a className="circle ini-customPrevBtn" id="team-circle-left">
                  <i className="lni-chevron-left"></i>
                </a>
                <a className="circle ini-customNextBtn" id="team-circle-right">
                  <i className="lni-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {activeItem && (
          <PortfolioModal item={activeItem} onClose={() => setActiveItem(null)} />
        )}
        </>
  )
}

export default PortfolioSection

const PortfolioCard = ({ item, onOpen }: { item: PortfolioItem; onOpen: () => void }) => {
  const imageUrl = item.thumbnail || item.images?.[0] || "/personal-hotspot/images/portfolio-placeholder.jpg";
  
  return (
    <div className="item">
      <div className="team-data-img">
        <button
          onClick={onOpen}
          type="button"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            width: "100%",
          }}
        >
          <div className="single-work">
            <img
              src={imageUrl}
              alt={item.title || "Portfolio item"}
              className="img-responsive"
              data-no-retina
              style={{ cursor: "pointer" }}
            />
            <div className="overlay-text center-block">
              <div className="cases-image-inner">
                <span className="cases-line top"></span>
                <span className="cases-line top-right"></span>
                <span className="cases-line bottom"></span>
                <span className="cases-line bottom-left"></span>
                <h6 className="text-white text-uppercase alt-font">
                  {item?.category?.[0] || "View"}
                </h6>
              </div>
            </div>
          </div>
        </button>
        <div className="portfolio-content">
          <h5 className="text-yellow main-font mb-2 text-uppercase">
           {item?.title || "Untitled"}
          </h5>
          <p className="text-capitalize" style={{ cursor: "pointer" }} onClick={onOpen}>
            {getPortfolioSummary(item).slice(0, 100)}...
          </p>
        </div>
      </div>
    </div>
  );
};

const PortfolioModal = ({ item, onClose }: { item: PortfolioItem; onClose: () => void }) => {
  const imageUrl = item.thumbnail || item.images?.[0] || "/personal-hotspot/images/portfolio-placeholder.jpg";
  
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(5px)",
        zIndex: 9999,
        padding: "20px",
        width: "100%",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#1a1a1a",
          borderRadius: "12px",
          maxWidth: "800px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          border: "1px solid #dabd1d",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        

        {/* Content */}
        <div style={{ padding: "30px" }}>
            {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "#dabd1d",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              zIndex: 10,
              color: "#111",
            }}
          >
            ×
          </button>
          <h2 style={{ color: "#dabd1d", marginTop: 0, marginBottom: "10px", fontSize: "28px" }}>
            {item?.title?.toUpperCase() || "Untitled"}
          </h2>

          <h3 style={{ color: "#ffffff", marginTop: "20px", marginBottom: "10px" , fontSize: "18px"}}>
            {item?.howItWorks?.toUpperCase() || ""}
          </h3>

          <div style={{ position: "relative" }}>
        

          {/* Image */}
          <img
            src={imageUrl}
            alt={item.title}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "12px 12px 0 0",
            }}
          />
        </div>
          

          <h3 style={{ color: "#dabd1d", marginTop: "20px", marginBottom: "10px" }}>About Project</h3>
          <p style={{ color: "#ccc", lineHeight: "1.6", marginBottom: "20px" }}>
            {getPortfolioSummary(item)}
          </p>

          {item.technologies && item.technologies.length > 0 && (
            <>
              <h3 style={{ color: "#dabd1d", marginTop: "20px", marginBottom: "10px" }}>Technologies</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      backgroundColor: "#dabd1d",
                      color: "#111",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}

          {item.client && (
            <>
              <h3 style={{ color: "#dabd1d", marginBottom: "10px" }}>Client</h3>
              <p style={{ color: "#ccc", marginBottom: "20px" }}>{item.client}</p>
            </>
          )}

          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#dabd1d",
                color: "#111",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
                marginTop: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              View Live →
            </a>
          )}

          <button
            onClick={onClose}
            style={{
              display: "inline-block",
              backgroundColor: "transparent",
              color: "#dabd1d",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              marginTop: "10px",
              marginLeft: "10px",
              border: "2px solid #dabd1d",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
