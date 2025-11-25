import * as Tone from "tone";
type SampleButtonProps = {
  sample: string;
  active: boolean;
  onToggle: () => void;
};

export default function SampleButton({
  sample,
  active,
  onToggle,
}: SampleButtonProps) {

  const handleClick = async () => {
    onToggle();
    if (!active) {
      await Tone.start();
      const player = new Tone.Player(`/piano/${sample}`).toDestination();
      player.autostart = true;
    }
  };

  return (
    <button
      className="sample-btn"
      onClick={handleClick}
      style={{ background: active ? "red" : "#eee" }}
    >
      {sample.replace(".wav", "")}
    </button>
  );
}
