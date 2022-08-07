import Button from "react-bootstrap/Button";
import "./Button.css";

const ButtonComponent = ({ onClick, isStart }) => {
  return (
    <Button className="discoButton" onClick={onClick}>
      {!isStart ? "Start Disco" : "Stop Disco"}
    </Button>
  );
};

export default ButtonComponent;
