import { useEffect, useState } from 'react';
import { getSummary, getServices, getRecommendations, getAlerts, getAnomalies } from '../api/api.js';
import Navbar from './Navbar.jsx';
import ExpenseCard from './ExpenseCard.jsx';
import CostChart from './CostChart.jsx';
import ServiceBreakdown from './ServiceBreakdown.jsx';
import AIInsightPanel from './AIInsightPanel.jsx';
import BudgetAlert from './BudgetAlert.jsx';

export default function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [services, setServices] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [anomalies, setAnomalies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      const [summaryRes, servicesRes, recRes, alertsRes, anomaliesRes] = await Promise.all([
        getSummary(), getServices(), getRecommendations(), getAlerts(), getAnomalies()
      ]);
      setSummary(summaryRes.data);
      setServices(servicesRes.data);
      setRecommendations(recRes.data.recommendations);
      setAlerts(alertsRes.data.alerts);
      setAnomalies(anomaliesRes.data.anomalies);
    }
    loadData().catch((err) => {
      console.error(err);
      setError('Could not load dashboard data. Make sure the backend API is running on http://127.0.0.1:8000.');
    });
  }, []);

  if (error) return <main className="container"><div className="status-panel">{error}</div></main>;
  if (!summary) return <main className="container"><h2>Loading dashboard...</h2></main>;

  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero">
          <h1>Areiid Cloud Cost Intelegnce Platform</h1>
          <p>Track AWS spending, detect cost spikes, and get AI-powered optimization recommendations.</p>
        </section>

        <section className="cards">
          <ExpenseCard title="Monthly Spend" value={`$${summary.total_monthly_cost}`} />
          <ExpenseCard title="Previous Month" value={`$${summary.previous_monthly_cost}`} />
          <ExpenseCard title="Change" value={`$${summary.change}`} />
          <ExpenseCard title="Highest Service" value={summary.highest_service.service} />
        </section>

        <BudgetAlert alerts={alerts} />
        <section className="grid">
          <CostChart data={services} />
          <ServiceBreakdown services={services} anomalies={anomalies} />
        </section>
        <AIInsightPanel recommendations={recommendations} />
      </main>
    </>
  );
}
