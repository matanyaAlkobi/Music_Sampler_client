import SampleButton from "./SampleButton";

type ColumnProps = {
  files: string[];
};

export default function ColumnsCreator({ files }: ColumnProps) {
  return (
    <div className="column">
      {files.map((file, index) => (
        <SampleButton key={index} sample={file} />
      ))}
    </div>
  );
}
