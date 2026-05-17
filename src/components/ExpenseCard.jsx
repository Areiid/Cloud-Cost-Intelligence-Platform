export default function ExpenseCard({ title, value }) {
  return <div className="card"><p>{title}</p><h2>{value}</h2></div>;
}
