import ColumnsCreator from "./ColumnCreator";

type GridProps = {
  files: string[];
  columns: number;
};

export default function Grid({ files, columns }: GridProps) {
  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${columns},60px)` }}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <ColumnsCreator key={index} files={files} />
      ))}
    </div>
  );
}
