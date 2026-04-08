import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import ContactForm from "@/components/ContactForm";
import ClientScripts from "@/components/ClientScripts";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Abid Azam Khan | Full-Stack Web, Mobile & Desktop App Developer",
  description: "Senior Software Engineer & CEO of UNIPIXER. Specializing in high-performance web, mobile & desktop apps using React, Next.js, Node.js & secure APIs.",
  keywords: "Abid Azam Khan, Full-Stack Developer, Web Developer, Mobile App Developer, Desktop App Developer, Senior Software Engineer, System Architect, UNIPIXER, React, Next.js, Angular, React Native, Flutter, Electron.js, Node.js, C# ASP.NET, Laravel, Custom Software Development",
  openGraph: {
    title: "Abid Azam Khan | Portfolio",
    description: "Senior Software Engineer & CEO of UNIPIXER. Digital Creative Director & Product Designer with 10+ years of experience.",
    images: ["/personal-hotspot/images/slider-img.png"],
  },
};

async function getPortfolioData() {
  try {
    const response = await fetch("https://core.unipixer.com/api/v1/portfolio/published", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    const data = await response.json();
    if (data.success && data.data && data.data.portfolios) {
      return {
        portfolios: data.data.portfolios,
        total: data.data.pagination.total,
      };
    }
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
  }
  return { portfolios: [], total: 0 };
}

export default async function Home() {
  const { portfolios, total } = await getPortfolioData();

  return (
    <>
      <ClientScripts />
      
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".portfolio-fallback{display:none}.no-js .portfolio-fallback{display:block}.no-js #portfolio-loading{display:none}",
        }}
      />


      <Navbar />

      <div id="pagepiling">
        <Hero />
        <About />
        <Timeline />
        <PortfolioSection initialPortfolios={portfolios} totalCount={total} />
        <Testimonials />
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}
