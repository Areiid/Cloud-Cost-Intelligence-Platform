export default function AIInsightPanel({ recommendations }) {
  return (
    <section className="panel">
      <h2>AI Optimization Recommendations</h2>
      <ul>
        {recommendations.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </section>
  );
}
