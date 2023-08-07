import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import TimerForm from "./components/TimerForm";

function App() {
  const [timer, setTimer] = useState(0);

  const startTimer = (seconds: string) => {
    setTimer(Number(seconds));
  };

  return (
    <>
      <TimerForm startTimer={startTimer} />
      <br />
      <br />
      <Timer value={timer} />
    </>
  );
}

export default App;
