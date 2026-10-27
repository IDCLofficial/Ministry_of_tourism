import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description: "Services offered by the Ministry of Tourism of the Imo State Government.",
  path: "/services",
});


export default function ServicesPage() {
    return (
        <div className="bg-white">
            <ServicesHeroSection />
            <ServicesSection />
            <CTASection heading="Join Us to Promote Tourism and Culture in Imo State" buttonLabel="Contact Us" buttonHref="/contact" />
            <Footer />
        </div>
    );
}