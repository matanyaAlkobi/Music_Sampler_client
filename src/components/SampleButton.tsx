import * as Tone from "tone";
type SampleButtonProps = {
  sample: string;
};

export default function SampleButton({ sample }: SampleButtonProps) {
  const playSample = async () => {
    await Tone.start();
    const player = new Tone.Player(`/piano/${sample}`).toDestination();
    player.autostart = true;
  };

  return (
    <button className="sample-btn" onClick={playSample}>
      {sample.replace(".wav", "")}
    </button>
  );
}
