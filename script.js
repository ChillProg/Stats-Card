let data = {
  labels: ["2000-01-01", "2000-01-01"],
  datasets: [
    {
      label: "Yesterday",
      data: [
        { x: "2000-01-01 00:00", y: 0 },
        { x: "2000-01-01 02:00", y: 0 },
        { x: "2000-01-01 04:00", y: 3 },
        { x: "2000-01-01 05:00", y: 0 },
        { x: "2000-01-01 10:00", y: 0 },
        { x: "2000-01-01 12:00", y: 3 },
        { x: "2000-01-01 16:00", y: 3 },
        { x: "2000-01-01 18:00", y: 0 },
        { x: "2000-01-02 24:00", y: 0 },
      ],
      borderWidth: 3,
      backgroundColor: "#8d8d8d",
      borderColor: "#8d8d8d",
    },
    {
      label: "Today",
      data: [
        { x: "2000-01-01 00:00", y: 0 },
        { x: "2000-01-01 06:00", y: 0 },
        { x: "2000-01-01 07:00", y: 5 },
        { x: "2000-01-01 09:00", y: 0 },
        { x: "2000-01-01 11:00", y: 0 },
        { x: "2000-01-01 14:00", y: 5 },
      ],
      borderWidth: 3,
      backgroundColor: "#48a2ff",
      borderColor: "#48a2ff",
    },
  ],
};

const config = {
  type: "line",
  data,
  options: {
    scales: {
      x: {
        border: {
          dash: [5, 5],
        },
        type: "time",
        min: "2000-01-01 00:00",
        max: "2000-01-01 24:00",
        time: {
          displayFormat: {
            hour: "hh",
          },
        },
        ticks: {
          stepSize: 4,
          autoSkip: false,
          font: {
            size: 15,
            weight: 400,
          },
          callback: function (val, index, values) {
            hour = new Date(val).getHours();
            if (hour == 0 || hour == 8 || hour == 16 || hour == 23) {
              const ampm = hour >= 12 ? "PM" : "AM";
              const hours12 = hour % 12 || 12;
              return hours12 + " " + ampm;
            } else {
              return "";
            }
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
          stepSize: 1,
          autoSkip: false,
        },
        min: 0,
        max: 6,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "end",
        labels: {
          useBorderRadius: true,
          borderRadius: 4,
          boxWidth: 8,
          boxHeight: 8,
          font: {
            size: 13,
            weight: "400",
            family: "'Poppins', sans-serif",
          },
        },
      },
    },
  },
};

new Chart(document.getElementById("myChart"), config);

data = {
  labels: ["2000-01-01", "2000-01-01"],
  datasets: [
    {
      label: "Firs Time",
      data: [
        { x: "2000-01-01 00:00", y: 0 },
        { x: "2000-01-01 03:00", y: 2 },
        { x: "2000-01-01 04:00", y: 4 },
        { x: "2000-01-01 05:00", y: 5 },
        { x: "2000-01-01 07:00", y: 2 },
        { x: "2000-01-01 09:00", y: 3 },
        { x: "2000-01-01 10:00", y: 1 },
        { x: "2000-01-01 12:00", y: 2 },
        { x: "2000-01-01 14:00", y: 1 },
      ],
      borderWidth: 3,
      backgroundColor: "#f98600",
      borderColor: "#f98600",
      fill: true,
    },
    {
      label: "Repeat",
      data: [
        { x: "2000-01-01 00:00", y: 3 },
        { x: "2000-01-01 01:00", y: 5 },
        { x: "2000-01-01 03:00", y: 4 },
        { x: "2000-01-01 04:00", y: 11 },
        { x: "2000-01-01 05:00", y: 6 },
        { x: "2000-01-01 06:00", y: 7 },
        { x: "2000-01-01 07:00", y: 3 },
        { x: "2000-01-01 08:00", y: 4 },
        { x: "2000-01-01 09:00", y: 8 },
        { x: "2000-01-01 10:00", y: 5 },
        { x: "2000-01-01 11:00", y: 2 },
        { x: "2000-01-01 12:00", y: 4 },
        { x: "2000-01-01 13:00", y: 6 },
        { x: "2000-01-01 14:00", y: 3 },
      ],
      borderWidth: 3,
      backgroundColor: "#fee7cc",
      borderColor: "#fee7cc",
      fill: true,
    },
  ],
};

const config2 = {
  type: "line",
  data,
  options: {
    scales: {
      x: {
        border: {
          dash: [5, 5],
        },
        type: "time",
        min: "2000-01-01 00:00",
        max: "2000-01-01 24:00",
        time: {
          displayFormat: {
            hour: "hh",
          },
        },
        ticks: {
          stepSize: 4,
          autoSkip: false,
          font: {
            size: 15,
            weight: 400,
          },
          callback: function (val, index, values) {
            hour = new Date(val).getHours();
            if (hour == 0 || hour == 8 || hour == 16 || hour == 23) {
              const ampm = hour >= 12 ? "PM" : "AM";
              const hours12 = hour % 12 || 12;
              return hours12 + " " + ampm;
            } else {
              return "";
            }
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 4,
          autoSkip: false,
          font: {
            size: 15,
            weight: 400,
          },
        },
        min: 0,
        max: 12,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "end",
        labels: {
          useBorderRadius: true,
          borderRadius: 4,
          boxWidth: 8,
          boxHeight: 8,
          font: {
            size: 13,
            weight: "400",
            family: "'Poppins', sans-serif",
          },
        },
      },
    },
  },
};

new Chart(document.getElementById("myChart2"), config2);
