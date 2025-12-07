import { useState } from "react";
import * as Tone from "tone";

export default function VolumeControl() {
  const [volume, setVolume] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = Number(e.target.value);
    setVolume(newVol);

    Tone.Destination.volume.value = newVol;
  };

  return (
    <div>
      <label>
        Volume: {volume} dB
        <input
          type="range"
          min={-40}
          max={6}
          value={volume}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
