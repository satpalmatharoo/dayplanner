//1 Add current day to top of calendar /Excerise 26

var currentDay =$("#currentDay");
var today = moment ();
currentDay.text(today.format("dddd, MMMM Do YYYY"));
var currentHour = today.hours ()
console.log (currentHour)


//2 Timeblock colour code=textarea?
    // a)add in function to find current hour?? Sources (Tech Admin)
    // b)if statement
  
  for (let i = 9; i <18; i++){
     if 
   (currentHour == i) {
    $(`#${i}`).addClass("present")


   }else if (currentHour < i) {
    $(`#${i}`).addClass("past")

   }else{
    $(`#${i}`).addClass("future")

  }
  }
    


//3 Add local storage



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