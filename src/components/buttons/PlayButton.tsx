import { useState, useRef } from "react";
import * as Tone from "tone";
import { useSamples } from "../../context/SampleContext";

export default function PlayButton() {
  const { columns, activeColumns, players } = useSamples();
  const [isPlaying, setIsPlaying] = useState(false);
  const sequenceRef = useRef<Tone.Sequence | null>(null);
  const interval = 0.5;

  const startSequence = async () => {
    await Tone.start();
    if (sequenceRef.current) {
      sequenceRef.current.stop();
      sequenceRef.current.dispose();
    }

    const colIndices = Array.from({ length: columns }, (_, i) => i);

    sequenceRef.current = new Tone.Sequence(
      (time, colIndex) => {
        for (let row = 0; row < players.length; row++) {
          if (activeColumns[colIndex][row]) {
            players[row].start(time);
          }
        }
      },
      colIndices,
      interval
    );

    sequenceRef.current.start(0);
    Tone.Transport.start();
    setIsPlaying(true);

    // Stop Transport at the end
    Tone.Transport.scheduleOnce(() => {
      Tone.Transport.stop();
      setIsPlaying(false);
    }, `+${columns * interval}`);
  };

  const handlePlayPause = () => {
    if (!isPlaying) {
      if (Tone.Transport.state === "paused") {
        Tone.Transport.start();
        setIsPlaying(true);
      } else {
        startSequence();
      }
    } else {
      Tone.Transport.pause();
      setIsPlaying(false);
    }
  };
                        
  const handleStop = () => {
    Tone.Transport.stop();
    Tone.Transport.position = 0;
    if (sequenceRef.current) {
      sequenceRef.current.stop();
      sequenceRef.current.dispose();
      sequenceRef.current = null;
    }
    setIsPlaying(false);
  };

  return (
    <div className="play-controls">
      <button className="play-btn" onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button className="stop-btn" onClick={handleStop}>Stop</button>
    </div>
  );
}
