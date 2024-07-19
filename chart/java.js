const charData = {
  labels: ["python", "java", "c++", "javascript", "others"],
  data: [30, 40, 17, 7, 39],
};
const mychart = document.querySelector(".my-chart");
const ul = document.querySelector(".chart-heading .details ul");

new Chart(mychart, {
  type: "doughnut",
  data: {
    labels: charData.labels,
    datasets: [
      {
        label: "language popularity",
        data: charData.data,
      },
    ],
  },
  options: {
    borderWidth: 3,
    borderRadius: 2,
    hoverBorderWidth: 0,
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  charData.labels.forEach((a, i) => {
    let li = document.createElement("li");
    li.innerHTML =
      "$[a]: <span class= 'percentage'>${charData.data[i]}%</span>";
    ul.appendChild(li);
  });
};
populateUl();

// chart - two

const data = {
  labels: ["mon", "tus", "wed", "thu", "fri", "sat", "sun"],
  datasets: [
    {
      label: "weekly sales",
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        "rgba(255, 26, 104, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(133, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0, 0, 0, 0.2)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(133, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
    },
    {
      label: "weekly cost",
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        "rgba(255, 26, 104, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(133, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0, 0, 0, 0.2)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(133, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "line",
  data,
  options: {
    scales: {
      y: {
        brginAtZero: true,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
function generateLegend() {
  const chatbox = document.querySelector(".chartbox");
  const div = document.createElement("DIV");
  div.setAttribute("id", "custumLegend");

  const ul = document.createElement("UL");
  console.log(myChart.legend.legendItems);
  chatbox.appendChild(div);

  myChart.legend.legendItems.forEach((dataset, index) => {
    const text = dataset.text;
    const datasetIndex = dataset.datasetIndex;
    const bgColor = dataset.fillStyle;
    const bColor = dataset.strokeStyle;
    const fontColor = dataset.fontColor;

    const li = document.createElement("LI");

    const spanbox = document.createElement("SPAN");
    spanbox.style.borderColor = bColor;
    spanbox.style.backgroundColor = bgColor;

    const p = document.createElement("P");
    const textNote = document.createTextNode(text);

    ul.appendChild(li);
    li.appendChild(spanbox);
    li.appendChild(p);
    p.appendChild(textNote);
  });
  chatbox.appendChild(div);
  div.appendChild(ul);
}

generateLegend();

// chart 3
