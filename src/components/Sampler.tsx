import { useSamples } from "../context/SampleContext";
import Grid from "./Grid";

export default function Sampler() {
  const { columns, setColumns } = useSamples();

  return (
    <>
    
      <div>
        <button
          className="add-remove-btn"
          onClick={() => setColumns(columns + 1)}
        >
          add column
        </button>
        {columns >= 1 && (
          <button
            className="add-remove-btn"
            onClick={() => setColumns(columns - 1)}
          >
            remove column
          </button>
        )}
      </div>
      <Grid/>
    </>
  );
}
