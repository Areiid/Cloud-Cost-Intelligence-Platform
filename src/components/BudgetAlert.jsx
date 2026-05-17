export default function BudgetAlert({ alerts }) {
  return <section className="alert">{alerts.map((alert, index) => <p key={index}>{alert}</p>)}</section>;
}
