import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type SampleContextType = {
  samples: string[];
  columns: number;
  setColumns: (n: number) => void;
  setSamples: (arr: string[]) => void;
  activeColumns: boolean[][];
  toggleCell: (col: number, row: number) => void;
};

const SampleContext = createContext<SampleContextType | undefined>(undefined);

export const useSamples = () => {
  const context = useContext(SampleContext);
  if (!context) throw new Error("useSamples must be used within SampleProvider");
  return context;
};

type SampleProviderProps = { children: ReactNode };

export const SampleProvider = ({ children }: SampleProviderProps) => {
  const [samples, setSamples] = useState<string[]>([
    "A.wav",
    "B.wav",
    "C.wav",
    "D.wav",
    "E.wav",
    "F.wav",
    "G.wav",
  ]);
  const [columns, setColumns] = useState<number>(2);

  const [activeColumns, setActiveColumns] = useState<boolean[][]>(
    Array.from({ length: columns }, () => Array(samples.length).fill(false))
  );

  useEffect(() => {
    setActiveColumns(prev => {
      const newState = Array.from({ length: columns }, (_, colIndex) =>
        prev[colIndex] ? [...prev[colIndex]] : Array(samples.length).fill(false)
      );
      return newState;
    });
  }, [columns, samples.length]);

  const toggleCell = (col: number, row: number) => {
    setActiveColumns(prev => {
      const newState = prev.map(c => [...c]);
      newState[col][row] = !newState[col][row];
      return newState;
    });
  };

  return (
    <SampleContext.Provider
      value={{ samples, columns, setColumns, setSamples, activeColumns, toggleCell }}
    >
      {children}
    </SampleContext.Provider>
  );
};
