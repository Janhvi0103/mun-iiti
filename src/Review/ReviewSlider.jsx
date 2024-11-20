import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-25px" }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 4l8 8-8 8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-25px" }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 4l-8 8 8 8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ReviewSlider() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      <div className="w-3/4 m-auto mt-20">
        <div>
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-[450px] text-black rounded-xl border shadow-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-[0px_10px_15px_rgba(255,0,150,0.3),0px_15px_20px_rgba(0,255,255,0.3)] group cursor-pointer"
              >
                <div className="h-56 rounded-t-xl bg-white flex justify-center items-center relative cursor-pointer">
                  <div className="h-44 w-44 rounded-full overflow-hidden relative group-hover:animate-pulse">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="h-full w-full rounded-full relative"
                    />
                    <div className="absolute inset-0 rounded-full bg-green-300 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p>{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Shrey Singhal",
    img: "/students/image 6.jpg",
    review:
      "IIT Indore MUN was an exceptional experience with well-organized committees and engaging debates. Highly recommend for anyone looking to enhance their diplomatic skills.",
  },
  {
    name: "Aryan Golcha",
    img: "/students/image 21.jpg",
    review:
      "The hospitality and professionalism at IIT Indore MUN were top-notch. The quality of discussions and the diversity of delegates made it a memorable event",
  },
  {
    name: "Ravi Raj",
    img: "/students/image 23.jpg",
    review:
      "Participating in IIT Indore MUN was a fantastic opportunity to network and debate with brilliant minds. The event was flawlessly executed",
  },
  {
    name: "Vedant Jain",
    img: "/students/image 16.jpg",
    review:
      "IIT Indore MUN exceeded my expectations with its meticulous planning and vibrant atmosphere. A great platform for aspiring diplomats and enthusiasts.",
  },
];

export default ReviewSlider;
