import { useSamples } from "../context/SampleContext";
import Grid from "./Grid";
import InstrumentSelector from "./InstrumentSelector";
import Buttons from "./buttons/Buttons";

export default function SamplerGrid() {
  const { columns, setColumns } = useSamples();

  return (
    <>
      <div className="instrument-section">
        <InstrumentSelector />
      </div>

      <div className="column-controls">
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
      <div className="control-buttons">
        <Buttons />
      </div>
    </>
  );
}
