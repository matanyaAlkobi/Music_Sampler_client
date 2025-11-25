import { useSamples } from "../context/SampleContext";
import * as Tone from "tone";

export default function PlayButton() {
  const { samples, activeColumns, columns } = useSamples();

  const handlePlay = async () => {
    await Tone.start();
    for (let col = 0; col < columns; col++) {
      for (let row = 0; row < samples.length; row++) {
        if (activeColumns[col][row]) {
          new Tone.Player(`/piano/${samples[row]}`).toDestination().autostart = true;
        }
      }
      await new Promise(res => setTimeout(res, 500));
    }
  };

  return <button onClick={handlePlay}>Play</button>;
}
