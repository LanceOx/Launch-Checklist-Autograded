// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    

//TASK 2
let list = this.document.getElementById("faultyItems");
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

        let pilot = document.getElementById("input[name=pilotName]");
        let copilot = document.getElementById("copilotInput");
        let fuelLevel = document.getElementById("fuelLevelInput");
        let cargoLevel = document.getElementById("cargoMassInput")
formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

//event.prevent()
})

}); 