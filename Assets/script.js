var words;
var hourInfo;

console.log(moment().format("dddd, MMMM Do"));

$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready( function() {
    changeColor();
    renderText();
});

// Change the color of the text area per time of day
function changeColor() {
    var realTime = moment().hours();
    console.log("Current Time" + realTime);
    
    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);
        
        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } 
        else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } 
        else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

// Save text to local storage
$(".saveBtn").click(function() {
    words = $(this).siblings(".input").val();
    console.log(words);
    hourInfo = $(this).siblings(".hour").text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));
    
    colorChange ();
    renderText ();
})

// Clear the entire schedule
$(".clearBtn").click(function() {
    location.reload(true);
    clearSchedule();
})

function clearSchedule() { 
    localStorage.clear();
}

// Retrieve text from local storage and render on schedule
function renderText () {
    var save9am = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(save9am);
    
    var save10am = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(save10am);
    
    var save11am = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(save11am);
    
    var save12pm = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(save12pm);
    
    var save1pm = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(save1pm);

    var save2pm = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(save2pm);

    var save3pm = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(save3pm);

    var save4pm = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(save4pm);

    var save5pm = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(save5pm);
}