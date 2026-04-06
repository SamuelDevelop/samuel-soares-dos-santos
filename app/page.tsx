import ApresentationSection from "@/components/ApresentationSection/ApresentationSection";
import Footer from "@/components/Footer/Footer";
import HomePageSections from "@/components/PageSection/HomePageSections";

export default function Home() {
  return (
    <>
      <ApresentationSection />
      <HomePageSections /> 
      <Footer 
        bgColor="bgWhite"      
      /> 
    </>

  );
}
