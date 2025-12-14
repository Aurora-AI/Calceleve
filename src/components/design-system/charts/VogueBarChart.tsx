"use client";

import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

// As Cores Profundas que pediu
const VOGUE_PALETTE = ["#1e3a8a", "#c2410c", "#15803d", "#b91c1c", "#eab308"];

const MOCK_DATA = [
  { name: "Matriz", value: 120 },
  { name: "Norte", value: 98 },
  { name: "Sul", value: 86 },
  { name: "Leste", value: 72 },
  { name: "Oeste", value: 45 },
];

type VogueBarChartProps = {
  data?: { name: string; value: number }[];
};

export function VogueBarChart({ data = MOCK_DATA }: VogueBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#09090b", fontSize: 12, fontWeight: 700, dy: 10 }}
        />
        <Tooltip
          cursor={{ fill: "#f4f4f5" }}
          content={({ active, payload }) => {
            if (active && payload?.[0]) {
              return (
                <div className="bg-brand-primary text-white text-xs font-bold px-3 py-2 rounded shadow-xl">
                  {payload[0].value} Registros
                </div>
              );
            }
            return null;
          }}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={VOGUE_PALETTE[index % VOGUE_PALETTE.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
