// Add current day to top of calendar /Excerise 26

var currentDay =$("#currentDay");
var today = moment ();
currentDay.text(today.format("dddd, MMMM Do YYYY"));

// Timeblock colour code

// a)add in function to find current hour??



// b)if statement
const toDo = parseInt("past")
const pr
  if 
    ("currentTime == timeOfDay")
    class{"present"}
  else if
    ("currentTime< timeofDay")
    {class{"future"} 
  } else
    {class{"past"}



// .past {
//     background-color: #d3d3d3;
//     color: white;
//   }
  
//   .present {
//     background-color: #ff6961;
//     color: white;
//   }
  
//   .future {
//     background-color: #77dd77;
//     color: white;
//   }






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