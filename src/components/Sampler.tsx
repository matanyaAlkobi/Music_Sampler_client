import { useState } from "react";
import Grid from "./Grid";

export default function Sampler() {
  const files: string[] = [
    "A.wav",
    "B.wav",
    "C.wav",
    "D.wav",
    "E.wav",
    "F.wav",
    "G.wav",
  ];
  const [columns, setColumns] = useState<number>(5);

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
      <Grid files={files} columns={columns} />
    </>
  );
}
