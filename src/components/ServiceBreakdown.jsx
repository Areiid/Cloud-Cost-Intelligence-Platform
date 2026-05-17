export default function ServiceBreakdown({ services, anomalies }) {
  return (
    <div className="panel">
      <h2>Service Breakdown</h2>
      {services.map((item) => (
        <div className="row" key={item.service}>
          <span>{item.service}</span>
          <strong>${item.cost}</strong>
        </div>
      ))}
      <h3>Anomalies</h3>
      {anomalies.length ? anomalies.map((a) => <p key={a.service}>⚠️ {a.message}</p>) : <p>No anomalies detected.</p>}
    </div>
  );
}
