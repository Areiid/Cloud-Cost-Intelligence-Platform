import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const axisStyle = { fill: '#b8c9c5', fontSize: 12 };

export default function CostChart({ data }) {
  return (
    <div className="panel">
      <h2>Service Cost Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="service" tick={axisStyle} axisLine={{ stroke: 'rgba(237, 247, 246, .18)' }} tickLine={false} />
          <YAxis tick={axisStyle} axisLine={{ stroke: 'rgba(237, 247, 246, .18)' }} tickLine={false} />
          <Tooltip
            cursor={{ fill: 'rgba(237, 247, 246, .08)' }}
            contentStyle={{ background: '#021326', border: '1px solid rgba(237, 247, 246, .18)', borderRadius: 8, color: '#edf7f6' }}
            labelStyle={{ color: '#edf7f6' }}
          />
          <Bar dataKey="cost" fill="#a98463" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
