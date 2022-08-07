import "./BoxRow.css";
import { useState, useEffect } from "react";
import Box from "../../components/Box";

const BoxRow = ({ isStart }) => {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("red");
  const [color3, setColor3] = useState("red");
  const [color4, setColor4] = useState("red");

  const getRandomColor = () => {
    setColor1("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColor2("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColor3("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColor4("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  useEffect(() => {
    let autoDisco;
    if (isStart) {
      getRandomColor();
      autoDisco = setInterval(() => {
        getRandomColor();
      }, 2000);
    }
    return () => clearInterval(autoDisco);
  }, [isStart]);

  return (
    <div className="boxRow">
      <Box color={color1} />
      <Box color={color2} />
      <Box color={color3} />
      <Box color={color4} />
    </div>
  );
};

export default BoxRow;
