// Add current day to top of calendar
//Excerise 26

function greet (){
   console.log ("hello world");
}

greet ();

const currentDayEl =$("#currentDay");
console.log(); currentDayEl
const now = moment ();
currentDayEl.text(now.format("dddd, MMMM Do"));

// var currentDay = $("#currentDay");
// moment().format("dddd, MMMM Do YYYY")


// var today = moment();
// $("#currentDay").text(today.format("dddd, MMMM Do YYYY")

// $("#1a").text(gradDate);



// var current = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);

// var toDoList



// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist