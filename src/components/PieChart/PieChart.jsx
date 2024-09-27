import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "../../utils/webUsageStats";

const data = [
  { label: "Group A", value: 400 },
  { label: "Group B", value: 300 },
  { label: "Group C", value: 300 },
  { label: "Group D", value: 200 },
  { label: "Group E", value: 278 },
  { label: "Group F", value: 189 },
];

export default function StraightAnglePieChart() {
  return (
    <div className="chart">
      <PieChart
        series={[
          {
            startAngle: -90,
            endAngle: 90,
            data,
          },
        ]}
        height={400}
        width={600}
        sx={{
          "& .MuiChartsLegend-column": {
            position: "absolute",
            top: "50%",
            left: "45%", // Позиционирование справа от графика
            transform: "translateY(-21%)",
          },
        }}
      />

      <PieChart
        series={[
          {
            data: desktopOS,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            valueFormatter,
          },
        ]}
        height={200}
      />
    </div>
  );
}
