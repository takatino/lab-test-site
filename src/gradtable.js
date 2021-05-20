gradData = [];
fetch("./卒業生.txt")
.then(response => response.arrayBuffer())
.then((data) => {
    decoder = new TextDecoder("utf-16");
    text = decoder.decode(data);
    gradData = text.split("\n");
    for (i=0; i < gradData.length; i++) {
        gradData[i] = gradData[i].split("\t");
    }

    tableData = gradData;
    for (i = 0; i < gradData[0].length; i++) {
        tableData[0][i] = <th>{gradData[0][i]}</th>;
    }
    tableData[0] = <tr>{tableData[0]}</tr>
    
    for (i = 1; i < gradData.length; i++){
        tableRow = [];
        for (j=0; j < gradData[i].length; j++) {
            tableRow[j] = <td>{gradData[i][j]}</td>
        }
        tableData[i] = <tr>{tableRow}</tr>
    }

    ReactDOM.render(
        <table>{tableData}</table>,
        document.getElementById('gradtable')
        );
})

