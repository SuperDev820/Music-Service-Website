const sparklineChartData = {
    sparkChart1: [
        6,
        2,
        8,
        4,
        3,
        8,
        1,
        3,
        6,
        5,
        9,
        2,
        8,
        1,
        4,
        8,
        9,
        8,
        2,
        1
    ],
    sparkChart2: [
        6,
        2,
        8,
        4,
        -3,
        8,
        1,
        -3,
        6,
        -5,
        9,
        2,
        -8,
        1,
        4,
        8,
        9,
        8,
        2,
        1
    ],
    sparkChart3: [
        6,
        2,
        8,
        4,
        3,
        8,
        1,
        3,
        6,
        5,
        9,
        2,
        8,
        1,
        4,
        8,
        9,
        8,
        2,
        1
    ],
    reflineStyle: {
        strokeOpacity: 1,
        strokeDasharray: "3, 3"
    },
    style: {
        stroke: "#02a499",
        fill: "#02a499"
    }
};

const salesDonutChart = {
    data: {
        series: [54, 28, 17],
        labels: [1, 2, 3]
    },
    options: {
        donut: true,
        showLabel: false
    }
};

const radialBarChart = {
    chartOptions: {
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "45%"
                },
                dataLabels: {
                    value: {
                        show: false
                    },
                    name: {
                        show: false
                    }
                }
            }
        },
        colors: ["#02a499"]
    }
};

const userData = [
    {
        name: "www",
        email: "www@mail.ru",
        date: "2021-01-15 01:17:23",
    }
];

const courseData = [
    {
        title: "Novation AFX Station Review with King Unique",
        rate: 0.99,
        detail: "We got our hands on the Novation AFX Station this week and of course King Unique was the obvious choice to dive into everything this Aphex Twin remixed monosynth has to offer!",
        category: "HOW TO USE",
        genre: "DEEP HOUSE",
        tutor: "",
    }
];

export { sparklineChartData, salesDonutChart, radialBarChart, userData, courseData }