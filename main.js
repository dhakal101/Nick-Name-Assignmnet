// Global Variables
let nicknames = ["Crusher", "the Scientist", "teinkle-toes", "the Coder", "the Jester", "the Sloth", "Quick-Silver"];
let nicknameIDX = 0;

// The output
let names = document.getElementById("names");

// Variables for the Input
let firstname = document.getElementById('firstname');
let sername = document.getElementById("lastname");


// Event Listener
document.getElementById("randomnickname").addEventListener("click", getrandname);
document.getElementById("allnicknames").addEventListener("click", showallnicnames);

// Function
function getrandname() {

    // Getting a random Integer to selct a nickname
    nicknameIDX = Math.randomInt(0, nicknames.length);

    // Showing the Nicknames
    names.innerHTML = firstname.value + "  ' " + nicknames[nicknameIDX] + " ' " + sername.value;
}

function showallnicnames() {
    // Clear Previous Listed Names
    names.innerHTML = "";

    // Show All Nicknames
    for (let n = 0; n < nicknames.length; n++) {
        names.innerHTML += firstname.value + "  ' " + nicknames[n] + " ' " + sername.value + "<br> ";
    }

}