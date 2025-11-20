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
  const [columns, setColumns] = useState<number>(2);

  return (
    <>
      <Grid files={files} columns={columns} />
    </>
  );
}
