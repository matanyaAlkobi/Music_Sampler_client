import { useSamples } from "../context/SampleContext";
import SampleButton from "./SampleButton";

export default function ColumnsCreator({ colIndex }: { colIndex: number }) {
  const { samples, activeColumns, toggleCell } = useSamples();

  if (samples.length === 0) return <p>Loading samples...</p>;

  return (
    <div className="grid-column">
      {samples.map((sample, rowIndex) => (
        <SampleButton
          key={rowIndex}
          sample={sample}
          active={activeColumns[colIndex]?.[rowIndex]}
          onToggle={() => toggleCell(colIndex, rowIndex)}
        />
      ))}
    </div>
  );
}
