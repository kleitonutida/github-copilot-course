// on window load
window.onload = function () {
  function getIncomeValues() {
    // get input value for januaryIncome
    var januaryIncome = document.getElementById("januaryIncome").value;
    // get input value for februaryIncome
    var februaryIncome = document.getElementById("februaryIncome").value;
    // get input value for marchIncome
    var marchIncome = document.getElementById("marchIncome").value;
    // get input value for aprilIncome
    var aprilIncome = document.getElementById("aprilIncome").value;
    return [januaryIncome, februaryIncome, marchIncome, aprilIncome];
  }

  function getExpenseValues() {
    // get input value for januaryExpense
    var januaryExpense = document.getElementById("januaryExpenses").value;
    // get input value for februaryExpense
    var februaryExpense = document.getElementById("februaryExpenses").value;
    // get input value for marchExpense
    var marchExpense = document.getElementById("marchExpenses").value;
    // get input value for aprilExpense
    var aprilExpense = document.getElementById("aprilExpenses").value;
    return [januaryExpense, februaryExpense, marchExpense, aprilExpense];
  }

  // red: "rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 1)",
  // green: "rgba(75, 192, 192, 0.2)", "rgba(75, 192, 192, 1)",

  // create chart js bar chart for id myChart
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    // type of chart
    type: "bar",
    // data for chart
    data: {
      // labels for x axis
      labels: ["January", "February", "March", "April"],
      // datasets for y axis
      datasets: [
        {
          // label for dataset
          label: "Expenses",
          // data for dataset
          data: getExpenseValues(),
          // background color for dataset
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          // border color for dataset
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          // border width for dataset
          borderWidth: 1,
        },
        {
          // label for dataset
          label: "Income",
          // data for dataset
          data: getIncomeValues(),
          // background color for dataset
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          // border color for dataset
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          // border width for dataset
          borderWidth: 1,
        },
      ],
    },
    // options for chart
    options: {
      // scales for chart
      scales: {
        // y axis
        yAxes: [
          {
            // ticks for y axis
            ticks: {
              // begin at zero
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  // download function
  document.getElementById("download").addEventListener("click", function () {
    // get canvas
    var canvas = document.getElementById("myChart");
    // get image
    var image = canvas.toDataURL("image/png");
    // create link
    var link = document.createElement("a");
    // set href
    link.href = image;
    // set download
    link.download = "myChart.png";
    // click link
    link.click();
  });

  // click handler for chart-tab
  document.getElementById("chart-tab").addEventListener("click", function () {
    myChart.data.datasets[0].data = getIncomeValues();
    myChart.data.datasets[1].data = getExpenseValues();
    // update chart
    myChart.update();
  });
};
