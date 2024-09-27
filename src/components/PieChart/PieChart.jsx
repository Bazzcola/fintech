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
  // https://www.creative-tim.com/templates/react-free
  // https://www.creative-tim.com/product/light-bootstrap-dashboard-react#
  // https://mui.com/x/react-charts/pie-demo/
  // https://mui.com/x/react-charts/pie/
  return (
    <div className="chart">
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 15, // если вмешается в уго показывает
            arcLabelRadius: "60%", // положение
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
            // arcLabel: (item) => `${item.value}%`,
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
