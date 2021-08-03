//1 Add current day to top of calendar /Excerise 26

var currentDay =$("#currentDay");
var today = moment ();
currentDay.text(today.format("dddd, MMMM Do YYYY"));
var currentHour = today.hours ()
console.log (currentHour)


//2 Timeblock colour code
    // a)add in function to find current hour
    // b)if statement
  
  for (let i = 9; i <18; i++){
     if 
   (currentHour == i) {
    $(`#${i}`).addClass("future")

   }else if (currentHour < i) {
    $(`#${i}`).addClass("past")

   }else{
    $(`#${i}`).addClass("present")

  }
  }
    
// Add Local Storage
localStorage.setItem("timeblock", "event");


// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock


// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist