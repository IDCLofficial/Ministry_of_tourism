import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import { AppLink } from "../components/AppLink";
import TeamGridSection from "./TeamGridSection";
import { teamMembers } from "./team";

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Tourism, Hospitality and Culture" />
            <AboutSection 
                aboutText="The Imo State Ministry of Tourism, Creative Arts, and Culture is a government agency responsible for promoting tourism, preserving cultural heritage, and fostering creative arts in Imo State, Nigeria. The ministry plays a key role in developing tourist attractions, organizing cultural events, and boosting the state’s economy through tourism."
                imgSrc="/images/museum.jpeg" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <MVSSection />   
            <ObjectivesSection />
            <TeamGridSection members={teamMembers} />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Join Us to Promote Tourism and Culture in Imo State"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}