import { Image } from "react-bootstrap";
import arrow from "../images/arrow.png";

const Arrow = () => {
  return (
    <Image className="arrow-img bounce" src={arrow} onClick={handleClick} />
  );
};

export default Arrow;
