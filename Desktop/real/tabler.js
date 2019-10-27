/*function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("mock_data.json", function(text){
    var data = JSON.parse(text);
		alert(data);
    console.log(data);
});*/

fetch('mock_data.json')
  .then(response => response.json())
  .then(jsonResponse => console.log(jsonResponse))

function generateDynamicTable(){
}
