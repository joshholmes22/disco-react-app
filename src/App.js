import { useEffect, useState } from "react";
import Button from "./components/Button";
import BoxRow from "./containers/BoxRow";
import "./App.css";
import audioFile from "./assets/audio/disco-music.mp3";

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [background, setBackground] = useState("white");
  const [sound, setAudio] = useState(new Audio(audioFile));

  const toggleDisco = () => {
    if (!isStart) {
      setIsStart(true);
    } else {
      setIsStart(false);
    }
  };

  const toggleAudio = () => {
    isStart ? sound.play() : sound.pause();
  };

  useEffect(() => {
    if (isStart) {
      setBackground("black");
      toggleAudio();
    } else {
      setBackground("white");
      toggleAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStart]);

  return (
    <div className="center" style={{ backgroundColor: background }}>
      <div>
        <BoxRow isStart={isStart} />
        <BoxRow isStart={isStart} />
        <BoxRow isStart={isStart} />
        <BoxRow isStart={isStart} />
      </div>
      <Button onClick={toggleDisco} isStart={isStart} />
    </div>
  );
};

export default App;
