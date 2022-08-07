import { useState } from "react";
import Button from "./components/Button";
import BoxRow from "./containers/BoxRow";
import "./App.css";

const App = () => {
  const [isStart, setIsStart] = useState(false);

  const toggleDisco = () => {
    if (!isStart) {
      setIsStart(true);
    } else {
      setIsStart(false);
    }
  };

  return (
    <div className="center">
      <div className="center">
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
