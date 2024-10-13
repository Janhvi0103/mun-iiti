import "./App.scss";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSlider from "./Review/ReviewSlider";
import Hero from "./Hero/Hero";
import ImgSlider from "./ImageSlider/ImgSlider";
import Content from "./Content/content";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
