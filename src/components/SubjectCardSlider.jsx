import Slider from "react-slick";
import SubjectCard from "../components/SubjectCard";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../assets/icons/arrowLeft.png";
import arrowRight from "../assets/icons/arrowRight.png";
import Math from "../assets/icons/Math-icon.svg";
import English from "../assets/icons/english.png";
import Literature from "../assets/icons/literature.png";
import Chemistry from "../assets/icons/chemistry.png";
import Physics from "../assets/icons/physics.png";
import History from "../assets/icons/history.png";

const SubjectCardSlider = ({ onClick }) => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 469,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative my-5">
      <button
        onClick={slideLeft}
        className="flex justify-between items-center absolute z-20 -left-[1rem] top-[35%]"
      >
        <img src={arrowLeft} alt="" />
      </button>
      <button
        onClick={slideRight}
        className="flex justify-between items-center absolute z-20 -right-[1rem] top-[35%]"
      >
        <img src={arrowRight} alt="" />
      </button>

      <Slider ref={sliderRef} {...settings}>
        <div className="cursor-pointer" onClick={onClick}>
          <SubjectCard
            image={Math}
            subject={"Mathematics"}
            noOfStudent={"12 Students"}
          />
        </div>

        <SubjectCard
          image={English}
          subject={"English"}
          noOfStudent={"11 Students"}
        />
        <SubjectCard
          image={Literature}
          subject={"Literature"}
          noOfStudent={"15 Students"}
        />
        <SubjectCard
          image={Chemistry}
          subject={"Chemistry"}
          noOfStudent={"12 Students"}
        />
        <SubjectCard
          image={Physics}
          subject={"Physics"}
          noOfStudent={"12 Students"}
        />
        <SubjectCard
          image={History}
          subject={"History"}
          noOfStudent={"12 Students"}
        />
      </Slider>
    </div>
  );
};

export default SubjectCardSlider;
