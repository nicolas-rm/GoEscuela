



var profit = {
  series: [
    {
      name: "Profit",
      data: [60, 40, 37, 35, 35, 20, 30],
    },
    {
      name: "Expenses",
      data: [15, 30, 15, 35, 25, 30, 30],
    },
  ],
  colors: ["var(--bs-primary)", "#fb977d"],
  chart: {
    type: "bar",
    fontFamily: "Plus Jakarta Sans', sans-serif",
    foreColor: "#adb0bb",
    width: "100%",
    height: 300,
    stacked: true,
    toolbar: {
      show: !1,
    },
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "27%",
      borderRadius: 6,
    },
  },
  dataLabels: {
    enabled: false,
  },

  grid: {
    borderColor: "#E4EBF0",
    padding: { top: 0, bottom: -8, left: 20, right: 20 },
  },
  tooltip: {
    theme: "dark",
  },
  toolbar: {
    show: false,
  },
  xaxis: {
    categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
};

var chart = new ApexCharts(document.querySelector("#profit"), profit);
chart.render();




var test = {
  series: [
    {
      color: "var(--bs-primary)",
      name: "Test Results",
      data: [13, 15, 14, 17, 16, 19, 17],
    },
  ],
  chart: {
    height: 240,
    type: "area",
    fontFamily: "Plus Jakarta Sans', sans-serif",
    foreColor: "#626b81",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "rgba(0,0,0,0.1)",
    strokeDashArray: 4,
    strokeWidth: 1,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  // colors: ["var(--bs-primary)"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      inverseColors: false,
      opacityFrom: 0.20,
      opacityTo: 0,
      stops: [20, 180],
    },
  },
  stroke: {
    curve: "smooth",
    width: "2",
  },
  xaxis: {
    categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
};

var chart = new ApexCharts(document.querySelector("#test"), test);
chart.render();



var netsells = {
  series: [
    {
      name: "BTC",
      data: [10, 30, 20, 30, 27, 45, 100, 70, 60, 40, 90]
    },
    {
      name: "ETH",
      data: [20, -25, 5, 10, -10, 25, -20, -25, -25, 15, -20]
    },
  ],
  chart: {
    ffontFamily: "Plus Jakarta Sans', sans-serif",
    foreColor: "#adb0bb",
    height: 260,
    type: "line",
    toolbar: {
      show: false,
    },
    offsetX: -5,
    stacked: true
  },
  legend: {
    show: false,
  },
  stroke: {
    width: 2,
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
  },
  colors: ["#0085db", "#5AC8FA"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#6993ff"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
  markers: {
    size: 0,
  },
  xaxis: {
    // labels: {
    //   show: false,
    // },
    type: 'category',
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov"
      ],
    axisTicks: {
      show: false,
    }
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
};
new ApexCharts(document.querySelector("#netsells"), netsells).render();



var total_orders = {
  series: [
    {
      name: "Last Year ",
      data: [29, 52, 38, 47, 56, 41, 46],
    },
    {
      name: "This Year ",
      data: [71, 71, 71, 71, 71, 71, 71],
    },
  ],
  chart: {
    fontFamily: "Plus Jakarta Sans', sans-serif",
    type: "bar",
    height: 150,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
    borderColor: "rgba(0,0,0,0.1)",
    strokeDashArray: 1,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
  },
  colors: ["#0085DB", "#D9D9D9"],
  plotOptions: {
    bar: {
      horizontal: false,
      // barHeight: "90%",
      columnWidth: "26%",
      borderRadius: [3],
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [["S"], ["M"], ["T"], ["W"], ["T"], ["F"], ["S"]],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  legend: {
    show: false,
  },
};

var chart_column_stacked = new ApexCharts(
  document.querySelector("#total-orders"),
  total_orders
);
chart_column_stacked.render();





var products = {
  color: "#adb5bd",
  series: [70, 18, 12],
  labels: ["2022", "2021", "2020"],
  chart: {
    height: 170,
    type: "donut",
    fontFamily: "Plus Jakarta Sans', sans-serif",
    foreColor: "#adb0bb",
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      endAngle: 360,
      donut: {
        size: '85%',
      },
    },
  },
  stroke: {
    show: false,
  },

  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  colors: ["var(--bs-primary)", "#FB977D", "#5AC8FA"],

  tooltip: {
    theme: "dark",
    fillSeriesColor: false,
  },
};

var chart = new ApexCharts(document.querySelector("#products"), products);
chart.render();



var grade = {
  series: [5368, 3319, 3500, 4106],
  labels: ["5368", "Direct Traffic", "Refferal Traffic", "Oragnic Traffic"],
  chart: {
    // height: 180,
    type: "donut",
    fontFamily: "Plus Jakarta Sans', sans-serif",
    foreColor: "#c6d1e9",
  },

  tooltip: {
    theme: "dark",
    fillSeriesColor: false,
  },

  colors: ["#e7ecf0", "#f8c076", "#fb977d", "var(--bs-primary)"],
  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },

  stroke: {
    show: false,
  },

  plotOptions: {
    pie: {
      donut: {
        size: "68%",
        background: "none",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "18px",
            color: undefined,
            offsetY: 5,
          },
          value: {
            show: false,
            color: "#98aab4",
          },
        },
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#grade"), grade);
chart.render();




var options = {
  series: [35],
  chart: {
    type: 'radialBar',
    // offsetY: -5,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#D9D9D9",
        strokeWidth: '85%',
        margin: 15, // margin is in pixels
      },
    }
  },
  grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    colors: "#0085DB",
    type: 'solid',
    gradient: {
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    },
  },
  labels: [''],
};

var chart = new ApexCharts(document.querySelector("#paying"), options);
chart.render();



var options = {
  chart: {
    id: "customers",
    type: "area",
    height: 103,
    sparkline: {
      enabled: true,
    },
    group: 'sparklines',
    fontFamily: "Plus Jakarta Sans', sans-serif",
    foreColor: "#adb0bb",
  },
  series: [
    {
      name: 'monthly earnings',
      color: "var(--bs-primary)",
      data: [25, 66, 20, 40, 12, 30],
    },
  ],
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      inverseColors: false,
      opacityFrom: 0.05,
      opacityTo: 0,
      stops: [20, 180],
    },
  },


  markers: {
    size: 0,
  },
  tooltip: {
    theme: "dark",
    fixed: {
      enabled: true,
      position: "right",
    },
    x: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector("#customers"), options).render();
