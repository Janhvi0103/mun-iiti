import "./App.scss";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSlider from "./Review/ReviewSlider";
import Hero from "./Hero/Hero";
import ImgSlider from "./ImageSlider/ImgSlider";
import Content from "./Content/content";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
function Past() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <Content />
      </div>
      <div>
        <ReviewSlider />
      </div>
      <div>
        <ImgSlider />
      </div>
      <Footer />
    </>
  );
}

export default Past;
