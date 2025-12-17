import { useState } from "react";
import * as Tone from "tone";

export default function BpmControl() {
  const [bpm, setBpm] = useState(120);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBpm = Number(e.target.value);
    setBpm(newBpm);
    Tone.Transport.bpm.value = newBpm;
  };

  return (
    <div className="bpm-control">
      <label>
        BPM: {bpm}
        <input
          type="range"
          min={40}
          max={240}
          value={bpm}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
