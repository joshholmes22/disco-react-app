import { useState, useEffect } from "react";
import Box from "./components/Box";
import Button from "./components/Button";
import BoxRow from "./containers/BoxRow";

const App = () => {
  const [isStart, setIsStart] = useState(false);

  const toggleDisco = () => {
    if (!isStart) {
      setIsStart(true);
    } else {
      setIsStart(false);
    }
  };

  useEffect(() => {
    setIsStart(false);
  }, []);

  return (
    <div>
      <div>
        <BoxRow isStart={isStart} />
        <BoxRow isStart={isStart} />
        <BoxRow isStart={isStart} />
        <BoxRow isStart={isStart} />
      </div>
      <Button onClick={toggleDisco} />
    </div>
  );
};

export default App;
