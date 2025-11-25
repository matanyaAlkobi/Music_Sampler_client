import { useSamples } from "../context/SampleContext";
import ColumnsCreator from "./ColumnCreator";

export default function Grid() {
  const { columns } = useSamples();
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${columns},60px)` }}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <ColumnsCreator key={index} colIndex={index} />
      ))}
    </div>
  );
}
