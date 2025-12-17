import { useSamples } from "../context/SampleContext";
import ColumnsCreator from "./ColumnCreator";

export default function Grid() {
  const { columns, samples } = useSamples();

  if (samples.length === 0) return <p>Loading samples...</p>;

  return (
    <div className="grid-scroll-wrapper">
      <div
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${columns},60px)` }}
      >
        {Array.from({ length: columns }).map((_, index) => (
          <ColumnsCreator key={index} colIndex={index} />
        ))}
      </div>
    </div>
  );
}
