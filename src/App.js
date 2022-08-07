import { useState, useEffect } from "react";
import Box from "./components/Box";
import Button from "./components/Button";

const App = () => {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("red");
  const [color3, setColor3] = useState("red");
  const [color4, setColor4] = useState("red");

  const [isStart, setIsStart] = useState(false);

  const getRandomColor = () => {
    setColor1("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColor2("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColor3("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColor4("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  const toggleDisco = () => {
    console.log(isStart);
    if (!isStart) {
      getRandomColor();
      setIsStart(true);
    } else {
      setIsStart(false);
    }
  };

  useEffect(() => {
    let autoDisco;
    if (isStart) {
      autoDisco = setInterval(() => {
        getRandomColor();
      }, 2000);
    }
    return () => clearInterval(autoDisco);
  }, [isStart]);

  return (
    <div>
      <div>
        <Box color={color1} />
        <Box color={color2} />
        <Box color={color3} />
        <Box color={color4} />
      </div>
      <Button onClick={toggleDisco} />
    </div>
  );
};

export default App;
