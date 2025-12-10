import { useSamples } from "../context/SampleContext";

export default function InstrumentSelector() {
  const { instrument, setInstrument } = useSamples();

  return (
    <div className="instrument-selector">
      <label>Choose instrument: </label>
      <select
        value={instrument}
        onChange={(e) => setInstrument(e.target.value)}
      >
        <option value="piano">Piano</option>
        <option value="accordion">Accordion</option>
        <option value="guitar">Guitar</option>
      </select>
    </div>
  );
}
