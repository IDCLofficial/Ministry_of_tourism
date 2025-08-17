import { Hero } from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
import LatestNews from "@/app/components/LatestNews";
// import Stats from "@/app/components/Stats";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import FeaturedInitiatives from "./components/FeaturedInitiatives";
import { getProject } from "./projects/projects";
import { Project } from "../../lib/types";
import { contentfulService } from "../../lib/contentful";

export default async function Home() {
  const projects = await getProject()
  const ministries = await contentfulService.getMinistries()
  console.log(ministries)
  
  return (
    <div className="h-screen w-full bg-red-400">
      <Hero
        title="Imo State Ministry of Tourism, Hospitality and Culture" 
        caption="Showcasing Imo's cultural assets through events, festivals, and heritage sites." 
        subtitle="Promoting tourism, celebrating hospitality, and preserving the rich cultural heritage of Imo State."
      />
      <AboutSection 
        title="About Us"
        subtitle="To establish Imo State as a premier tourism destination in Nigeria, renowned for its rich cultural heritage, dynamic creative sector, and world-class hospitality, thereby attracting both local and international visitors while enhancing the state’s global image."
        image1="/images/arts_training.jpg"
        image2="/images/culture.jpg"
      />
      <AboutCommisioner 
        imgSrc="/images/commissioner.png" 
        title="About The Commissioner" 
      />
      <section className="w-full flex flex-col gap-4">
        <FeaturedInitiatives projects = {projects as unknown as Project[]}/>
        {/* <TourismSites /> */}
        <QuickLinks />
        {/* <Advertisement /> */}
      </section>
      {/* <Stats /> */}
      {/* <FeaturedPartners /> */}
      <CTASection 
        heading="Partner with Us Today!"
        subtext="You can partner with us in various ways, including but not limited to: Sponsoring our events, providing financial support, or partnering with us on a project."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer/>
    </div>
  );
}
