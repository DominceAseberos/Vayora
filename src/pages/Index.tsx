import Navbar from "@/components/voyara/Navbar";
import Hero from "@/components/voyara/Hero";
import TrustStrip from "@/components/voyara/TrustStrip";
import Destinations from "@/components/voyara/Destinations";
import PhotoAlbum from "@/components/voyara/PhotoAlbum";
import HowItWorks from "@/components/voyara/HowItWorks";
import Testimonials from "@/components/voyara/Testimonials";
import MeetCurator from "@/components/voyara/MeetCurator";
import LeadCapture from "@/components/voyara/LeadCapture";
import FinalCTA from "@/components/voyara/FinalCTA";
import Footer from "@/components/voyara/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <TrustStrip />
    <Destinations />
    <PhotoAlbum />
    <HowItWorks />
    <Testimonials />
    <MeetCurator />
    <LeadCapture />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
