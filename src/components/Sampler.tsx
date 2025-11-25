import { useSamples } from "../context/SampleContext";
import Grid from "./Grid";
import PlayButton from "./PlayButton";

export default function SamplerGrid() {
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
        {columns >= 2 && (
          <button
            className="add-remove-btn"
            onClick={() => setColumns(columns - 1)}
          >
            remove column
          </button>
        )}
        <PlayButton />
      </div>
      <Grid />
    </>
  );
}
