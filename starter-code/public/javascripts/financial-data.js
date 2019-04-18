const printCharts = (labels, prices) => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    label: "Bitcoin Price",
                    data: prices,
                },
            ],
        },
    });
};

const getBitcoinData = bitcoinData => {
    axios
        .get(`http://api.coindesk.com/v1/bpi/historical/close.json`)
        .then(response => {
            const { data } = response;
            console.log(data);
            const labels = Object.keys(data.bpi);
            const prices = Object.values(data.bpi);

            printCharts(labels, prices);
        })
        .catch(err => {
            console.error(err);
        });
};

getBitcoinData("bpi");
