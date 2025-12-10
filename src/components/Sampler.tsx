import { useSamples } from "../context/SampleContext";
import Grid from "./Grid";
import InstrumentSelector from "./InstrumentSelector";
import Buttons from "./buttons/Buttons";

export default function SamplerGrid() {
  const { columns, setColumns } = useSamples();

  return (
    <>
    <InstrumentSelector/>
      <div>
        <button
          className="add-remove-btn"
          onClick={() => setColumns(columns + 1)}
        >
          add column
        </button>
        {columns >= 2 && (
          <button
            className="add-remove-btn"
            onClick={() => setColumns(columns - 1)}
          >
            remove column
          </button>
        )}
      </div>
      <Grid />
      <Buttons />
    </>
  );
}
