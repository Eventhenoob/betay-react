"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Crew from "./Crew";
import CustomButtonPrev from "./Crew/CustomButtonPrev";
import CustomButtonNext from "./Crew/CustomButtonNext";
import Slider from "react-slick";

const CrewTray = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <CustomButtonPrev />,
    prevArrow: <CustomButtonNext />,
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
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-20 slider-container">
      {/* <Slider {...settings} className="w-full"> */}
      <Slider {...settings} className=" relative ">
        <Crew
          bigImage="e1.jpg"
          name="Even"
          post="Web Developer"
          smallImage="e1.jpg"
        />
        <Crew
          bigImage="e1.jpg"
          name="Even"
          post="Web Developer"
          smallImage="e1.jpg"
        />
        <Crew
          bigImage="e1.jpg"
          name="Even"
          post="Web Developer"
          smallImage="e1.jpg"
        />
        <Crew
          bigImage="e1.jpg"
          name="Even"
          post="Web Developer"
          smallImage="e1.jpg"
        />
        <Crew
          bigImage="e1.jpg"
          name="Even"
          post="Web Developer"
          smallImage="e1.jpg"
        />
      </Slider>
    </div>
  );
};

export default CrewTray;
