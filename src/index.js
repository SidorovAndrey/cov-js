import Chart from "chart.js";

function main() {
    var ctx = document.getElementById("chart");
    var chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [ "Cases", "Death", "Cures" ],
            datasets: [{
                label: "Number",
                data: [ 5, 4, 3 ],
                backgroundColor: [ "rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)" ],
                borderColor: [ "rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)" ],
                borderWidth: 1
            }]
        },
        options: {
            scalse: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

main();