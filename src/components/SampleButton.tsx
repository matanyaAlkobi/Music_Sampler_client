type SampleButtonProps = {
  sample: string;
};

export default function SampleButton({ sample }: SampleButtonProps) {
  const playSample = () => {
    const audio = new Audio(`./piano/${sample}`);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <button className="sample-btn" onClick={playSample}>
      {sample.replace(".wav", "")}
    </button>
  );
}
