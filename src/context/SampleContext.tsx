import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type SampleContextType = {
  samples: string[];
  columns: number;
  setColumns: (n: number) => void;
  setSamples: (arr: string[]) => void;
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

  return (
    <SampleContext.Provider
      value={{ samples, columns, setColumns, setSamples }}
    >
      {children}
    </SampleContext.Provider>
  );
};
