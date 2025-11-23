import Sampler from "./components/Sampler";
import { SampleProvider } from "./context/SampleContext";

export default function App() {
  return (
    <SampleProvider>
      <div className="app">
        <h1>Music Sampler</h1>
        <Sampler />
      </div>
    </SampleProvider>
  );
}
