// import Header from "../components/header.jsx";
import Header from "@/components/header/header.jsx";
import AboutUs from "@/components/about/about-us";
import Services from "@/components/services/services";
import Location from "@/components/location/location";
import ContactUs from "@/components/contactus/contact-us";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <AboutUs></AboutUs>
      <Services />
      <Location />
      <ContactUs />
      <Footer />
    </>
  );
}
