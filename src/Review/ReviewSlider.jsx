import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReviewSlider() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className="bg-gray-900">
      <div className="w-3/4 m-auto mt-20">
        <h2 className="text-white text-center text-3xl font-semibold mb-6">
          Testimonials
        </h2>
        <div>
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-[450px] text-black rounded-xl"
              >
                <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
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
    img: "/students/images1.webp",
    review:
      "IIT Indore MUN was an exceptional experience with well-organized committees and engaging debates. Highly recommend for anyone looking to enhance their diplomatic skills.",
  },
  {
    name: "Aryan Golcha",
    img: "/students/images1.webp",
    review:
      "The hospitality and professionalism at IIT Indore MUN were top-notch. The quality of discussions and the diversity of delegates made it a memorable event",
  },
  {
    name: "Ravi Raj",
    img: "/students/images1.webp",
    review:
      "Participating in IIT Indore MUN was a fantastic opportunity to network and debate with brilliant minds. The event was flawlessly executed",
  },
  {
    name: "Shubhangi Shukla",
    img: "/students/images1.webp",
    review:
      "IIT Indore MUN exceeded my expectations with its meticulous planning and vibrant atmosphere. A great platform for aspiring diplomats and enthusiasts.",
  },
];

export default ReviewSlider;
