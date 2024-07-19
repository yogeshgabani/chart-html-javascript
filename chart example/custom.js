//chart-1

var buyerData = {
    labels : ["January","February","March","April","May","June"],
    datasets: [
        {
            fillColor : "rgba(172,194,132,0.4)",
            strokeColor : "#ACC26D",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",
            data : [203,156,99,251,305,247]
        }
    ]
  }
  var buyers = document.getElementById('buyers').getContext('2d');
  new Chart(buyers).Line(buyerData);
   
  // chart-2
  var pieData = [
    {
        value: 80,
        color:"#878BB6"
    },
    {
        value : 40,
        color : "#4ACAB4"
    },
    {
        value : 40,
        color : "#FF8153"
    },
    {
        value : 30,
        color : "#FFEA88"
    }
];
 var pieOptions = {
    segmentShowStroke : false,
    animateScale : true,
}
var countries= document.getElementById("countries").getContext("2d");
new Chart(countries).Pie(pieData, pieOptions);

// chart-3

var barData = {
    labels : ["January","February","March","April","May","June"],
    datasets : [
        {
            fillColor : "#48A497",
            strokeColor : "#48A4D1",
            data : [456,479,324,569,702,600]
        }
    ]
}
var income = document.getElementById("income").getContext("2d");
new Chart(income).Bar(barData);


// chart-4

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});



