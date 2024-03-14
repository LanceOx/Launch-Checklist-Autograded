// Write your helper functions here!

require('cross-fetch/polyfill');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
     if (testInput === "") {
        return "Empty";
     } else if (isNaN(testInput)) {
        return "Not a Number";
     } else {
        return "is a Number";
     }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert("All fields are required.");
            return;
        } else if (validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
            alert("Please enter valid information for all fields.");
            return;
        } else (validateInput = "is a Number");

        document.getElementById("pilotStatus").innerHtml = `Pilot ${pilot} is ready for launch!`
        document.getElementById("coPilotStatus").innerHtml = `CoPilot ${copilot} is ready for launch`
        document.getElementById("fuelStatus").innerHTML = `Fuel level of ${fuelLevel} liters is ready for launch!`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass of ${cargoLevel} kg is ready for launch!`;
 }

 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;