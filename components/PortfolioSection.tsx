"use client";

import { useState } from "react";
import { hasHtmlContent, toSafeHtml } from "@/utils/html-render";

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
  client?: string;
  technologies?: string[];
  publishedAt?: string;
  processResults?: string;
  keyFeatures?: string;
  challengesAndDevelopment?: string;
  feature?: string;
  development?: string;
  quote?: string;
  quoteAuthor?: string;
};

const stripHtml = (value: string) =>
  value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const getPortfolioSummary = (item: PortfolioItem) => {
  const source = item.processResults || item.howItWorks || "";
  if (!source) return "No project summary available.";
  const plainText = stripHtml(source);
  return plainText.length > 220
    ? `${plainText.slice(0, 220).trim()}...`
    : plainText;
};

const getTagItems = (value?: string) => {
  if (!value) return [];

  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 10);
};

const RawHtmlBlock = ({ html }: { html: string }) => {
  if (!hasHtmlContent(html)) return null;

  return (
    <div
      style={{ all: "revert", display: "block" }}
      dangerouslySetInnerHTML={toSafeHtml(html)}
    />
  );
};

const PortfolioSection = ({ portfolio }: { portfolio: PortfolioItem[] }) => {
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
                  <PortfolioCard
                    key={item.id}
                    item={item}
                    onOpen={() => setActiveItem(item)}
                  />
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
  );
};

export default PortfolioSection;

const PortfolioCard = ({
  item,
  onOpen,
}: {
  item: PortfolioItem;
  onOpen: () => void;
}) => {
  const imageUrl =
    item.coverImage ||
    item.thumbnail ||
    item.images?.[0] ||
    "/personal-hotspot/images/portfolio-placeholder.jpg";

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
          <p
            className="text-capitalize"
            style={{ cursor: "pointer" }}
            onClick={onOpen}
          >
            {getPortfolioSummary(item).slice(0, 100)}...
          </p>
        </div>
      </div>
    </div>
  );
};

const PortfolioModal = ({
  item,
  onClose,
}: {
  item: PortfolioItem;
  onClose: () => void;
}) => {
  const imageUrl =
    item.coverImage ||
    item.thumbnail ||
    item.images?.[0] ||
    "/personal-hotspot/images/portfolio-placeholder.jpg";
  const technologies = (item.technologies || []).slice(0, 12);
  const tags = getTagItems(item.tags);
  const gallery = [
    imageUrl,
    ...(item.images || []).filter((img) => img && img !== imageUrl),
  ].slice(0, 2);
  const quoteText = stripHtml(item.quote || item.howItWorks || "").replace(
    /^"+|"+$/g,
    "",
  );
  const keyFeaturesSource = item.feature || item.keyFeatures || item.howItWorks;
  const processSource = item.processResults;
  const developmentSource =
    item.development || item.challengesAndDevelopment;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(17, 17, 17, 0.68)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
        padding: "20px",
        width: "100%",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#111111",
          borderRadius: "14px",
          maxWidth: "980px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          border: "1px solid #393939",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.28)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ padding: "32px 36px" }}>
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "18px",
              right: "18px",
              background: "#1f1f1f",
              border: "1px solid #4b4b4b",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              zIndex: 10,
              color: "#f4f4f4",
            }}
          >
            x
          </button>

          <h2
            style={{
              color: "#dabd1d",
              marginTop: 0,
              marginBottom: "8px",
              fontSize: "35px",
              lineHeight: 1.2,
            }}
          >
            {item?.title || "Untitled"}
          </h2>

          <p
            style={{
              color: "#b6b6b6",
              marginBottom: "22px",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {item.category?.[0] || "Project"}
            {item.publishedAt
              ? ` - ${new Date(item.publishedAt).toLocaleDateString()}`
              : ""}
          </p>

          <h3
            style={{
              color: "#dabd1d",
              marginTop: "10px",
              marginBottom: "10px",
              fontSize: "36px",
              lineHeight: 1.2,
            }}
          >
            How it Works
          </h3>
          <p
            style={{
              color: "#d0d0d0",
              lineHeight: "1.8",
              marginBottom: "16px",
              fontSize: "16px",
            }}
          >
            {stripHtml(item.howItWorks || "") ||
              "This project combines clean UX and scalable engineering to solve real user problems."}
          </p>

          {hasHtmlContent(keyFeaturesSource) && (
            <>
              <h3
                style={{
                  color: "#dabd1d",
                  marginTop: "8px",
                  marginBottom: "8px",
                  fontSize: "36px",
                  lineHeight: 1.2,
                }}
              >
                Key Features
              </h3>
              <RawHtmlBlock html={keyFeaturesSource || ""} />
            </>
          )}

          {technologies.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "20px",
              }}
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    backgroundColor: "#ebebeb",
                    color: "#4e4e4e",
                    padding: "7px 12px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 500,
                    border: "1px solid #474747",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {quoteText && (
            <blockquote
              style={{
                margin: "14px 0 26px",
                padding: "8px 0 8px 26px",
                borderLeft: "4px solid #dabd1d",
                color: "#efefef",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: 1.35,
              }}
            >
              {quoteText.length > 170
                ? `${quoteText.slice(0, 170).trim()}...`
                : quoteText}
              {(item.quoteAuthor || item.client) && (
                <div
                  style={{
                    marginTop: "18px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#9f9f9f",
                    textTransform: "uppercase",
                  }}
                >
                  {item.quoteAuthor || item.client}
                </div>
              )}
            </blockquote>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginBottom: "28px",
            }}
          >
            {gallery.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={`${item.title || "Portfolio"} preview ${index + 1}`}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  border: "1px solid #393939",
                }}
              />
            ))}
          </div>

          {hasHtmlContent(processSource) && (
            <>
              <h3
                style={{
                  color: "#dabd1d",
                  marginTop: "6px",
                  marginBottom: "8px",
                  fontSize: "36px",
                  lineHeight: 1.2,
                }}
              >
                Process & Results
              </h3>
              <RawHtmlBlock html={processSource || ""} />
            </>
          )}

          {hasHtmlContent(developmentSource) && (
            <>
              <h3
                style={{
                  color: "#dabd1d",
                  marginTop: "6px",
                  marginBottom: "8px",
                  fontSize: "36px",
                  lineHeight: 1.2,
                }}
              >
                Challenges And Development
              </h3>
              <RawHtmlBlock html={developmentSource || ""} />
            </>
          )}

          {tags.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginBottom: "20px",
              }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: "1px solid #474747",
                    backgroundColor: "#1d1d1d",
                    color: "#c4c4c4",
                    padding: "4px 10px",
                    fontSize: "12px",
                    textTransform: "lowercase",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  backgroundColor: "#111111",
                  color: "#ffffff",
                  padding: "11px 20px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                View Live
              </a>
            )}
            <button
              onClick={onClose}
              style={{
                display: "inline-block",
                backgroundColor: "#1b1b1b",
                color: "#f0f0f0",
                padding: "11px 20px",
                borderRadius: "6px",
                fontWeight: 600,
                border: "1px solid #454545",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
