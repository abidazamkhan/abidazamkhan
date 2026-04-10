"use client";

import { useEffect, useRef, useState } from "react";
import { hasHtmlContent, toSafeHtml } from "@/utils/html-render";
import { getTechIcon } from "@/utils/techicon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CgClose } from "react-icons/cg";

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
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

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
      className="raw-html-content leading-8 text-white"
      dangerouslySetInnerHTML={toSafeHtml(html)}
    />
  );
};

const PortfolioSection = ({ portfolio }: { portfolio: PortfolioItem[] }) => {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const previousScrollYRef = useRef(0);

  const handleOpenModal = (item: PortfolioItem) => {
    previousScrollYRef.current = window.scrollY;
    setActiveItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseModal = () => {
    setActiveItem(null);
    const previousScrollY = previousScrollYRef.current;

    requestAnimationFrame(() => {
      window.scrollTo({ top: previousScrollY, behavior: "smooth" });
    });
  };

  return (
    <>
      <section
        id="portfolio"
        className="section slide4 portfolio-bg scroll-mt-24"
      >
        <div className="container">
          <div className="row pb-5 heading-row items-end gap-y-4">
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
                    onOpen={() => handleOpenModal(item)}
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
        <PortfolioModal item={activeItem} onClose={handleCloseModal} />
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
      <div className="team-data-img group">
        <button
          onClick={onOpen}
          type="button"
          className="w-full cursor-pointer border-0 bg-transparent p-0 text-left"
        >
          <div className="single-work overflow-hidden">
            <img
              src={imageUrl}
              alt={item.title || "Portfolio item"}
              className="img-responsive w-full transition-transform duration-300 group-hover:scale-[1.02]"
              data-no-retina
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
        <div className="portfolio-content mt-4 text-left">
          <h5 className="text-yellow main-font mb-2 text-uppercase">
            {item?.title || "Untitled"}
          </h5>
          <p className="cursor-pointer text-capitalize" onClick={onOpen}>
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
  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Always reveal the start of the modal content when opening.
    modalContainerRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [item.id]);

  const imageUrl =
    item.coverImage ||
    item.thumbnail ||
    item.images?.[0] ||
    "/personal-hotspot/images/portfolio-placeholder.jpg";
  const technologies = (item.technologies || []).slice(0, 12);
  const tags = getTagItems(item.tags);
  const sliderImages = item?.images || []
  const hasMultipleSlides = sliderImages.length > 1;
  const quoteText = stripHtml(item.quote || item.howItWorks || "").replace(
    /^"+|"+$/g,
    "",
  );
  const keyFeaturesSource = item.feature || item.keyFeatures || item.howItWorks;
  const processSource = item.processResults;
  const developmentSource = item.development || item.challengesAndDevelopment;

  return (
    <div
      className="fixed inset-0 z-9999 flex w-full items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={modalContainerRef}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-2xl border border-[#393939] bg-[#111111] shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 pt-16 sm:p-8 sm:pt-16">
          <div className="absolute right-2 top-4 z-10 flex items-center gap-2">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-full border border-[#6d5b1a] bg-linear-to-r from-[#d8ba1a] to-[#c9a611] px-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#ffffff] transition-colors duration-200 hover:text-gray-300!"
              >
                View Live
              </a>
            )}
            <button
              onClick={onClose}
              type="button"
              aria-label="Close modal"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold text-white transition duration-200  hover:text-[#c9a611]"
            >
              <CgClose className="hover:text-[#c9a611]" />
            </button>
          </div>

        


          <p className="mt-0 mb-2 text-[35px] leading-tight text-[#dabd1d]">
            {item?.title?.toUpperCase() || "Untitled"}
          </p>
          <p className="mb-4 text-base leading-8 text-[#d0d0d0]">
            {stripHtml(item.howItWorks || "") ||
              "This project combines clean UX and scalable engineering to solve real user problems."}
          </p>

          <div className="mb-4 overflow-hidden bg-black/20">
            <img
              src={item?.coverImage || item?.thumbnail || imageUrl}
              alt={item?.title || "thumbnail"}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* 
          <p className="mb-6 text-[13px] uppercase tracking-[0.08em] text-[#b6b6b6]">
            {item.category?.[0] || "Project"}
            {item.publishedAt
              ? ` - ${new Date(item.publishedAt).toLocaleDateString()}`
              : ""}
          </p> */}
          {hasHtmlContent(keyFeaturesSource) && (
            <>
              <h3 className="mt-2 mb-2 text-[36px] leading-tight text-white">
                Key Features
              </h3>
              <RawHtmlBlock html={keyFeaturesSource || ""} />
            </>
          )}

          {technologies.length > 0 && (
            <>
              <h3 className="mt-2 mb-2 text-[36px] leading-tight text-white">
                Languages And Frameworks
              </h3>

              <div className="mb-5 flex flex-wrap items-center gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full  bg-gray-400 px-3 py-1.5 font-medium text-gray-900"
                    style={{
                      display: "inline-flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {(() => {
                      const techMeta = getTechIcon(tech);
                      const Icon = techMeta?.icon;

                      return Icon ? (
                        <Icon
                          aria-hidden="true"
                          className="shrink-0 text-xl"
                          style={{ color: techMeta.color }}
                        />
                      ) : null;
                    })()}
                    <span className="whitespace-nowrap">{tech}</span>
                  </span>
                ))}
              </div>
            </>
          )}

          {quoteText && (
            <blockquote className="portfolio-quote">
              <p>{quoteText}</p>
              {(item.quoteAuthor || item.client) && (
                <cite>— {item.quoteAuthor || item.client}</cite>
              )}
            </blockquote>
          )}

          <div className="mb-7">
            <Swiper
              modules={[Pagination]}
              key={item.id}
              className="portfolio-image-slider"
              slidesPerView={2}
              spaceBetween={16}
              allowTouchMove={hasMultipleSlides}
              grabCursor={hasMultipleSlides}
              loop={hasMultipleSlides}
              // pagination={hasMultipleSlides ? { clickable: true } : false}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
            >
              {sliderImages.map((image, index) => (
                <SwiperSlide key={`${image}-${index}`}>
                  <img
                    src={image}
                    alt={`${item.title || "Portfolio"} preview ${index + 1}`}
                    className="h-60 w-full rounded-2xl object-cover select-none"
                    draggable={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {hasHtmlContent(processSource) && (
            <>
              <h3 className="mt-1 mb-2 text-[36px] leading-tight text-white">
                Process & Results
              </h3>
              <RawHtmlBlock html={processSource || ""} />
            </>
          )}

          {hasHtmlContent(developmentSource) && (
            <>
              <h3 className="mt-1 mb-2 text-[36px] leading-tight text-white">
                Challenges And Development
              </h3>
              <RawHtmlBlock html={developmentSource || ""} />
            </>
          )}

          {tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#5a4a1c] bg-linear-to-r from-[#1f1a0d] to-[#151515] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#e6d27a] transition duration-200 hover:border-[#dabd1d] hover:text-[#f6df77]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap justify-end gap-2.5">
            <button
              onClick={onClose}
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#d8ba1a] via-[#e7c848] to-[#cfaf14] px-6 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-[#ffffff] shadow-[0_8px_20px_rgba(218,189,29,0.3)] transition duration-300 hover:shadow-[0_12px_26px_rgba(218,189,29,0.4)]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
