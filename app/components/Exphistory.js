import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);
export default function WeekHistory({
  baseWeekData,
  unionWeekData,
  popWeekData,
}) {
  const data = {
    labels: ["7일전", "6일전", "5일전", "4일전", "3일전", "2일전", "1일전"],
    datasets: [
      {
        label: "%",
        data: [
          baseWeekData[6].character_exp_rate,
          baseWeekData[5].character_exp_rate,
          baseWeekData[4].character_exp_rate,
          baseWeekData[3].character_exp_rate,
          baseWeekData[2].character_exp_rate,
          baseWeekData[1].character_exp_rate,
          baseWeekData[0].character_exp_rate,
        ],
        borderWidth: 1,
        backgroundColor: `rgba(26, 188, 156,1.0)`,
        borderRadius: 5,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "경험치 히스토리",
      },
    },

    scales: {
      y: {
        max: 100,
        beginAtZero: true,
      },
    },
  };
  const data2 = {
    labels: ["7일전", "6일전", "5일전", "4일전", "3일전", "2일전", "1일전"],
    datasets: [
      {
        label: "Lv",
        data: [
          baseWeekData[6].character_level,
          baseWeekData[5].character_level,
          baseWeekData[4].character_level,
          baseWeekData[3].character_level,
          baseWeekData[2].character_level,
          baseWeekData[1].character_level,
          baseWeekData[0].character_level,
        ],
        borderWidth: 1,
        backgroundColor: `rgba(26, 188, 156,1.0)`,
        borderRadius: 5,
      },
    ],
  };
  const options2 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "레벨 히스토리",
      },
    },

    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  const data3 = {
    labels: ["7일전", "6일전", "5일전", "4일전", "3일전", "2일전", "1일전"],
    datasets: [
      {
        label: "Lv",
        data: [
          unionWeekData[6].union_level,
          unionWeekData[5].union_level,
          unionWeekData[4].union_level,
          unionWeekData[3].union_level,
          unionWeekData[2].union_level,
          unionWeekData[1].union_level,
          unionWeekData[0].union_level,
        ],
        borderWidth: 1,
        backgroundColor: `rgba(26, 188, 156,1.0)`,
        borderRadius: 5,
      },
    ],
  };
  const options3 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "유니온 레벨",
      },
    },

    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };
  const data4 = {
    labels: ["7일전", "6일전", "5일전", "4일전", "3일전", "2일전", "1일전"],
    datasets: [
      {
        label: "Lv",
        data: [
          unionWeekData[6].union_artifact_level,
          unionWeekData[5].union_artifact_level,
          unionWeekData[4].union_artifact_level,
          unionWeekData[3].union_artifact_level,
          unionWeekData[2].union_artifact_level,
          unionWeekData[1].union_artifact_level,
          unionWeekData[0].union_artifact_level,
        ],
        borderWidth: 1,
        backgroundColor: `rgba(26, 188, 156,1.0)`,
        borderRadius: 5,
      },
    ],
  };
  const options4 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "아티팩트 레벨",
      },
    },

    scales: {
      y: {
        suggestedMin: 30,
        suggestedMax: 40,
        beginAtZero: false,
      },
    },
  };

  const data5 = {
    labels: ["7일전", "6일전", "5일전", "4일전", "3일전", "2일전", "1일전"],
    datasets: [
      {
        label: "인기도",
        data: [
          popWeekData[6].popularity,
          popWeekData[5].popularity,
          popWeekData[4].popularity,
          popWeekData[3].popularity,
          popWeekData[2].popularity,
          popWeekData[1].popularity,
          popWeekData[0].popularity,
        ],
        borderWidth: 1,
        backgroundColor: `rgba(26, 188, 156,1.0)`,
        borderRadius: 5,
      },
    ],
  };
  const options5 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "인기도",
      },
    },

    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
      <div className="my-5"></div>
      <Line data={data2} options={options2} />
      <div className="my-5"></div>
      <Line data={data3} options={options3} />
      <div className="my-5"></div>
      <Line data={data4} options={options4} />
      <div className="my-5"></div>
      <Line data={data5} options={options5} />
    </div>
  );
}
