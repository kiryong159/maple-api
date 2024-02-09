export default function StatBox({ Name, Value, Percent }) {
  return (
    <div className="px-5 flex justify-between">
      <span className="font-bold">{Name} </span>
      {Percent === "Y" ? <span>{Value} %</span> : <span>{Value}</span>}
    </div>
  );
}
