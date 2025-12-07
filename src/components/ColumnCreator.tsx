import { useSamples } from "../context/SampleContext";
import SampleButton from "./SampleButton";

export default function ColumnsCreator({ colIndex }: { colIndex: number }) {
  const { samples, activeColumns, toggleCell } = useSamples();
  return (
    <div className="column">
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
