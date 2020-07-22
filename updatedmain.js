// Variables for the Input
let firstname = document.getElementById('firstname');
let sername = document.getElementById("lastname");

// The output
let names = document.getElementById("names");

// Event Listener
document.getElementById("randomnickname").addEventListener("click", getrandname);
document.getElementById("allnicknames").addEventListener("click", showallnicnames);


function getrandname() {

    fetch("sample.txt").then((rawData) => rawData.text()).then((data) => ((console.log(data));

}

function showallnicnames() {
    // Clear Previous Listed Names
    names.innerHTML = "";

    // Show All Nicknames
    for (let n = 0; n < nicknames.length; n++) {
        names.innerHTML += firstname.value + "  ' " + nicknames[n] + " ' " + sername.value + "<br> ";
    }

}