/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/
// $(document).ready(function(){


//import dayjs from 'dayjs' // ES 2015
var today = dayjs().format()
console.log(today);

// adds the current date to the top of the page
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
//dom var
let currentDayTime = document.getElementById('currentDay');
  let text9 = document.getElementById('text9');
  let text10 = document.getElementById('text10');
  let text11 = document.getElementById('text11');
  let text12 = document.getElementById('text12');
  let text1 = document.getElementById('text13');
  let text2 = document.getElementById('text14');
  let text3 = document.getElementById('text15');
  let text4 = document.getElementById('text16');
  let text5 = document.getElementById('text17');

  var saveText = localStorage.saveText


  
  // Added Event Listners
  let hour9save = document.getElementById('button9');
  let hour10save = document.getElementById('button10');
  let hour11save = document.getElementById('button11');
  let hour12save = document.getElementById('button12');
  let hour1save = document.getElementById('button1');
  let hour2save = document.getElementById('button2');
  let hour3save = document.getElementById('button3');
  let hour4save = document.getElementById('button4');
  let hour5save = document.getElementById('button5');
  hour9save.addEventListener('click', saveText);
  hour10save.addEventListener('click', saveText);
  hour11save.addEventListener('click', saveText);
  hour12save.addEventListener('click', saveText);
  hour1save.addEventListener('click', saveText);
  hour2save.addEventListener('click', saveText);
  hour3save.addEventListener('click', saveText);
  hour4save.addEventListener('click', saveText);
  hour5save.addEventListener('click', saveText);

  //arrays
  let hoursArr = [text9, text10, text11, text12, text1, text2, text3, text4, text5]
  console.log(hoursArr)
  // let nowHour = dayjs().format('H');
//Set the color according to time on page
var currentHour = n.getHours()
console.log(currentHour, );
function figureHourClass () {
//$(".time-block").each(function() {
//var attribute = parseInt($(this).attr("id").substring(5))
//console.log(attribute);

//for loop to set time block color

  for (let i=0; i<hoursArr.length; i++){
    var attribute = parseInt(hoursArr[i].id.substring(4))
    console.log(attribute, currentHour)
    if(attribute < currentHour) {
      
    hoursArr[i].classList.remove("present")
    hoursArr[i].classList.remove("future")
    hoursArr[i].classList.add("past")
    console.log(hoursArr[i])
  }else if(attribute === currentHour) { 
    console.log(attribute, 'should have present')
    hoursArr[i].classList.remove("past")
    hoursArr[i].classList.remove("future")
    hoursArr[i].classList.add("present")
    console.log(hoursArr[i])
  }else{ // If the time is the future
    console.log(attribute, 'future')
    hoursArr[i].classList.remove("present")
    hoursArr[i].classList.remove("past")
    hoursArr[i].classList.add("future")
    console.log(hoursArr[i])
  };

  
}
//})


}

figureHourClass();

//local storage loop to save whatever is typed in the box

$("#button9").click(function() {
  localText = $(this).siblings(".description").val();
  console.log(localText);
  localTime = $(this).siblings(".hour").text();
  localStorage.setItem(localTime, JSON.stringify(localText));
});

$("#button10").click(function() {
  localText = $(this).siblings(".description").val();
  console.log(localText);
  localTime = $(this).siblings(".hour").text();
  localStorage.setItem(localTime, JSON.stringify(localText));

  
});

$("#button11").click(function() {
  localText = $(this).siblings(".description").val();
  console.log(localText);
  localTime = $(this).siblings(".hour").text();
  localStorage.setItem(localTime, JSON.stringify(localText));

  
});

$("#button12").click(function() {
  localText = $(this).siblings(".description").val();
  console.log(localText);
  localTime = $(this).siblings(".hour").text();
  localStorage.setItem(localTime, JSON.stringify(localText));

  
});

$("#button1").click(function() {
  localText = $(this).siblings(".description").val();
  console.log(localText);
  localTime = $(this).siblings(".hour").text();
  localStorage.setItem(localTime, JSON.stringify(localText));

  
});

$("#button2").click(function() {
  localText = $(this).siblings(".description").val();
  console.log(localText);
  localTime = $(this).siblings(".hour").text();
  localStorage.setItem(localTime, JSON.stringify(localText));

  
});

$("#button3").click(function() {
  localText = $(this).siblings(".description").val();
  console.log(localText);
  localTime = $(this).siblings(".hour").text();
  localStorage.setItem(localTime, JSON.stringify(localText));

  
});

$("#button4").click(function() {
  localText = $(this).siblings(".description").val();
  console.log(localText);
  localTime = $(this).siblings(".hour").text();
  localStorage.setItem(localTime, JSON.stringify(localText));

  
});

$("#button5").click(function() {
  localText = $(this).siblings(".description").val();
  console.log(localText);
  localTime = $(this).siblings(".hour").text();
  localStorage.setItem(localTime, JSON.stringify(localText));

  
});


function renderText() {
  var saveText9 = JSON.parse(localStorage.getItem("9AM"));
  $("#text9").val("");
  $("#text9").val(saveText9);

  var saveText10 = JSON.parse(localStorage.getItem("10AM"));
  $("#text10").val("");
  $("#text10").val(saveText10);

  var saveText11 = JSON.parse(localStorage.getItem("11AM"));
  $("#text11").val("");
  $("#text11").val(saveText11);

  var saveText10 = JSON.parse(localStorage.getItem("12PM"));
  $("#text12").val("");
  $("#text12").val(saveText10);

  var saveText1 = JSON.parse(localStorage.getItem("1PM"));
  $("#text13").val("");
  $("#text13").val(saveText1);

  var saveText2 = JSON.parse(localStorage.getItem("2PM"));
  $("#text14").val("");
  $("#text14").val(saveText2);

  var saveText3 = JSON.parse(localStorage.getItem("3PM"));
  $("#text15").val("");
  $("#text15").val(saveText3);

  var saveText4 = JSON.parse(localStorage.getItem("4PM"));
  $("#text16").val("");
  $("#text16").val(saveText4);

  var saveText5 = JSON.parse(localStorage.getItem("5PM"));
  $("#text17").val("");
  $("#text17").val(saveText5);
};

renderText();













