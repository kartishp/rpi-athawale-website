import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#022176",
        fontSize: "32px",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#022176",
        fontSize: "32px",
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
};

export { PrevArrow, NextArrow };
