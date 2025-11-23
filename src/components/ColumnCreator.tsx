import SampleButton from "./SampleButton";

type ColumnProps = { samples: string[] };

export default function ColumnsCreator({ samples }: ColumnProps) {
  return (
    <div className="column">
      {samples.map((sample, i) => (
        <SampleButton key={i} sample={sample} />
      ))}
    </div>
  );
}
