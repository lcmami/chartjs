// 1. 基本折線圖
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
    datasets: [
      {
        label: "網站流量",
        data: [120, 180, 160, 220, 260, 310],
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.1)",
        fill: true,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "每月網站流量折線圖"
      },
      legend: {
        display: true,
        position: "top"
      }
    }
  }
});

// 2. 多重資料集折線圖
new Chart(document.getElementById("multiLineChart"), {
  type: "line",
  data: {
    labels: ["第一次", "第二次", "第三次", "第四次"],
    datasets: [
      {
        label: "甲班",
        data: [75, 80, 78, 86],
        borderColor: "red",
        tension: 0.3
      },
      {
        label: "乙班",
        data: [70, 76, 83, 88],
        borderColor: "green",
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false
    },
    plugins: {
      title: {
        display: true,
        text: "班級成績比較圖"
      },
      tooltip: {
        enabled: true
      }
    }
  }
});

// 3. 混合圖表
new Chart(document.getElementById("mixedChart"), {
  data: {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
    datasets: [
      {
        type: "bar",
        label: "銷售量",
        data: [30, 45, 40, 60, 75, 90],
        backgroundColor: "orange"
      },
      {
        type: "line",
        label: "成長率 (%)",
        data: [5, 10, 8, 14, 18, 23],
        borderColor: "purple",
        yAxisID: "y1",
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "銷售量與成長率混合圖"
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        position: "left",
        title: {
          display: true,
          text: "銷售量"
        }
      },
      y1: {
        beginAtZero: true,
        position: "right",
        grid: {
          drawOnChartArea: false
        },
        title: {
          display: true,
          text: "成長率 (%)"
        }
      }
    }
  }
});