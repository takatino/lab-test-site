gradData = [];
fetch("./卒業生.txt").then(function (response) {
    return response.arrayBuffer();
}).then(function (data) {
    decoder = new TextDecoder("utf-16");
    text = decoder.decode(data);
    gradData = text.split("\n");
    for (i = 0; i < gradData.length; i++) {
        gradData[i] = gradData[i].split("\t");
    }

    tableData = gradData;
    for (i = 0; i < gradData[0].length; i++) {
        tableData[0][i] = React.createElement(
            "th",
            null,
            gradData[0][i]
        );
    }
    tableData[0] = React.createElement(
        "tr",
        null,
        tableData[0]
    );

    for (i = 1; i < gradData.length; i++) {
        tableRow = [];
        for (j = 0; j < gradData[i].length; j++) {
            tableRow[j] = React.createElement(
                "td",
                null,
                gradData[i][j]
            );
        }
        tableData[i] = React.createElement(
            "tr",
            null,
            tableRow
        );
    }

    ReactDOM.render(React.createElement(
        "table",
        null,
        tableData
    ), document.getElementById('gradtable'));
});