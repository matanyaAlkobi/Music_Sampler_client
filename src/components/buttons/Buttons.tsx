import BpmControl from "./BpmControl";
import PlayButton from "./PlayButton";
import VolumeControl from "./VolumeControl";

export default function Buttons() {
  return (
    <>
      <div className="buttons">
        <PlayButton />
        <BpmControl/>
        <VolumeControl/>
      </div>
    </>
  );
}
