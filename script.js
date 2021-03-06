//1 Add current day to top of calendar /Excerise 26

var currentDay = $("#currentDay");

// Get current date and time and update UI
var today = moment();
currentDay.text(today.format("dddd, MMMM Do YYYY"));
var currentHour = today.hours();
//2 Timeblock colour code
// a)add in function to find current hour
// b)if statement

for (let i = 9; i <= 17; i++) {
  if (currentHour == i) {
    $(`#${i}`).addClass("present");
  } else if (currentHour < i) {
    $(`#${i}`).addClass("future");
  } else {
    $(`#${i}`).addClass("past");
  }
}

$('.saveBtn').click((event) => {
  event.stopPropagation();
  const timeblock = $(event.target).parent();
  const time = timeblock.attr('id');
  const description = timeblock.find('.description').val();
  localStorage.setItem(time, description);
});

// Add Local Storage

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock

// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
