"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { finding: "S3 Public Access", manual: 45, automated: 0.3 },
  { finding: "IAM Key Violation", manual: 90, automated: 0.35 },
  { finding: "VPC Default SG", manual: 60, automated: 0.25 },
  { finding: "IAM Policy Issue", manual: 120, automated: 0.4 },
  { finding: "Cat B (Alert)", manual: 100, automated: 0.2 },
];

interface TooltipPayload {
  name: string;
  value: number;
  color: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "12px 16px",
        fontSize: "12px",
      }}
    >
      <p style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "8px" }}>
        {label}
      </p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color, margin: "4px 0" }}>
          {p.name}: {p.value < 1 ? `${(p.value * 60).toFixed(0)}s` : `${p.value} min`}
        </p>
      ))}
    </div>
  );
}

export default function CapstoneChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }} barGap={6}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255,255,255,0.05)"
          vertical={false}
        />
        <XAxis
          dataKey="finding"
          tick={{ fill: "#475569", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          interval={0}
          angle={-15}
          textAnchor="end"
          height={50}
        />
        <YAxis
          tick={{ fill: "#475569", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          label={{
            value: "Minutes",
            angle: -90,
            position: "insideLeft",
            fill: "#475569",
            fontSize: 11,
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: "12px", color: "#94a3b8", paddingTop: "8px" }}
        />
        <Bar dataKey="manual" name="Manual (min)" radius={[4, 4, 0, 0]} fill="#c4962d" maxBarSize={32}>
          {data.map((_, i) => (
            <Cell key={i} fill={i % 2 === 0 ? "#c4962d" : "#a87a24"} />
          ))}
        </Bar>
        <Bar dataKey="automated" name="Automated (min)" radius={[4, 4, 0, 0]} fill="#06b6d4" maxBarSize={32}>
          {data.map((_, i) => (
            <Cell key={i} fill={i % 2 === 0 ? "#06b6d4" : "#0891b2"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
