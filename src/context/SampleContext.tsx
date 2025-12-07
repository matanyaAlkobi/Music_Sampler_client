import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import * as Tone from "tone";

type SampleContextType = {
  samples: string[];
  columns: number;
  setColumns: (n: number) => void;
  activeColumns: boolean[][];
  toggleCell: (col: number, row: number) => void;
  players: Tone.Player[];
};

const SampleContext = createContext<SampleContextType | undefined>(undefined);

export const useSamples = () => {
  const context = useContext(SampleContext);
  if (!context)
    throw new Error("useSamples must be used within SampleProvider");
  return context;
};

type SampleProviderProps = { children: ReactNode };

export const SampleProvider = ({ children }: SampleProviderProps) => {
  const [samples, setSamples] = useState([
    "A.wav",
    "B.wav",
    "C.wav",
    "D.wav",
    "E.wav",
  ]);
  const [columns, setColumns] = useState(4);
  const [activeColumns, setActiveColumns] = useState(
    Array.from({ length: columns }, () => Array(samples.length).fill(false))
  );
  const [players, setPlayers] = useState<Tone.Player[]>([]);

  // Load Tone.Player for each sample (row)
  useEffect(() => {
    const newPlayers = samples.map((s) =>
      new Tone.Player(`/piano/${s}`).toDestination()
    );
    setPlayers(newPlayers);
  }, [samples]);

  // Update activeColumns when columns change
  useEffect(() => {
    setActiveColumns((prev) =>
      Array.from({ length: columns }, (_, colIndex) =>
        prev[colIndex] ? [...prev[colIndex]] : Array(samples.length).fill(false)
      )
    );
  }, [columns, samples.length]);

  const toggleCell = (col: number, row: number) => {
    setActiveColumns((prev) => {
      const newState = prev.map((c) => [...c]);
      newState[col][row] = !newState[col][row];
      return newState;
    });
  };

  return (
    <SampleContext.Provider
      value={{
        samples,
        columns,
        setColumns,
        activeColumns,
        toggleCell,
        players,
      }}
    >
      {children}
    </SampleContext.Provider>
  );
};
