import { useState } from "react";
import * as Tone from "tone";
type SampleButtonProps = {
  sample: string;
};

export default function SampleButton({ sample }: SampleButtonProps) {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = async () => {
        const newActive = !active;
    setActive(newActive);

    if (newActive) {
      await Tone.start();
      const player = new Tone.Player(`/piano/${sample}`).toDestination();
      player.autostart = true;
    }
  };

  return (
    <button className="sample-btn" onClick={handleClick} style={{background: active ? "red": "#eee"}}>
      {sample.replace(".wav", "")}
    </button>
  );
}
