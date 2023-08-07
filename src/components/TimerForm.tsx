import { useState } from "react";
import Button from "./Button";

type TimerFormProps = {
  startTimer: (seconds: string) => void;
};

const TimerForm = ({ startTimer }: TimerFormProps) => {
  const [timer, setTimer] = useState("");

  const createTimer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!timer || Number(timer) < 0) {
      setTimer("");
      return;
    }
    startTimer(timer);
    setTimer("");
  };

  return (
    <form onSubmit={createTimer}>
      <input
        placeholder="Seconds"
        type="number"
        value={timer}
        onChange={(e) => setTimer(e.target.value)}
      />
      <Button type="submit">Start</Button>
    </form>
  );
};

export default TimerForm;
