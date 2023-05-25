// import Header from "../components/header.jsx";
import Header from "@/components/header/header.jsx";
import AboutUs from "@/components/about/about-us";
import Services from "@/components/services/services";
import Location from "@/components/location/location";

export default function Home() {
  return (
    <>
      <Header></Header>
      <AboutUs></AboutUs>
      <Services />
      <Location />
    </>
  );
}
