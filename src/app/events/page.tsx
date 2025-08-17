import EventsHeroSection from "./EventsHeroSection";
import EventsListSection from "./EventsListSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import PastEvents from "./PastEvents";
import getEvents from "./eventsList";
import { Events } from "../../../lib/types";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="bg-white">
      <EventsHeroSection />
      <EventsListSection events={events as unknown as Events[]} />
      <PastEvents events={events as unknown as Events[]}/>
      <CTASection 
        heading="Partner with Us Today!"
        subtext="You can partner with us in various ways, including but not limited to: Sponsoring our events, providing financial support, or partnering with us on a project."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
