import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import * as Tone from "tone";
import { fetchSamples } from "../utils/fetchSamples";

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
  if (!context) throw new Error("useSamples must be used within SampleProvider");
  return context;
};

type SampleProviderProps = { children: ReactNode };

export const SampleProvider = ({ children }: SampleProviderProps) => {
  const [samples, setSamples] = useState<string[]>([]);
  const [columns, setColumns] = useState(4);
  const [activeColumns, setActiveColumns] = useState<boolean[][]>([]);
  const [players, setPlayers] = useState<Tone.Player[]>([]);

  // Fetch samples from server on mount
  useEffect(() => {
    async function loadSamples() {
      const files = await fetchSamples("piano");
      setSamples(files);
    }
    loadSamples();
  }, []);

  // Initialize activeColumns when samples or columns change
  useEffect(() => {
    if (samples.length === 0) return;

    setActiveColumns(
      Array.from({ length: columns }, () => Array(samples.length).fill(false))
    );
  }, [samples, columns]);

  //Load Tone.Player for each sample URL
  useEffect(() => {
    const newPlayers = samples.map((url) => new Tone.Player(url).toDestination());
    setPlayers(newPlayers);
  }, [samples]);

  const toggleCell = (col: number, row: number) => {
    setActiveColumns((prev) => {
      const newState = prev.map((c) => [...c]);
      newState[col][row] = !newState[col][row];
      return newState;
    });
  };

  return (
    <SampleContext.Provider
      value={{ samples, columns, setColumns, activeColumns, toggleCell, players }}
    >
      {children}
    </SampleContext.Provider>
  );
};
