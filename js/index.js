let year = document.getElementById("year");

let invalid = document.getElementById("invalid");
let empty = document.getElementById("empty");
let invalidmonth = document.getElementById("invalid1");
let emptymonth = document.getElementById("empty1");
let invalidyear = document.getElementById("invalid2");
let emptyyear = document.getElementById("empty2");
let btn = document.getElementById("submitBtn");

btn.addEventListener('click', validation); // Work on event Listening (click)

function validation(){ //function which run the whole validation code

    monthValid();
    dayValid();
    yearValid();

}

// Function for the day validation
// Function for the day validation
// Function for the day validation
// Function for the day validation

function dayValid(){
    var day = document.getElementById("day").value;
    if (day.length > 2 || day > 31 ) {
        invalid.style.display = "block";
        empty.style.display = "none";
        document.getElementById("day").style.border = "1px solid red";
    }

    else if (day.length < 1) {
        empty.style.display = "block";
        invalid.style.display = "none";
        document.getElementById("day").style.border = "1px solid red";
    }

    else{
        invalid.style.display = "none";
        empty.style.display = "none";
        document.getElementById("day").style.border = "1px solid black";
    }
}

// Function for the month validation
// Function for the month validation
// Function for the month validation
// Function for the month validation


function monthValid(){
    var month = document.getElementById("month").value;
    if (month.length > 2 || month > 12) {
        invalidmonth.style.display = "block";
        emptymonth.style.display = "none";
        document.getElementById("month").style.border = "1px solid red";
    }

    else if (month.length < 1) {
        emptymonth.style.display = "block";
        invalidmonth.style.display = "none";
        document.getElementById("month").style.border = "1px solid red";
    }

    else {
        invalidmonth.style.display = "none";
        emptymonth.style.display = "none";
        document.getElementById("month").style.border = "1px solid black";
    }
}


// Function for the year validation
// Function for the year validation
// Function for the year validation
// Function for the year validation


function yearValid(){
    var year = document.getElementById("year").value;
    
    if (year.length < 1) {
        emptyyear.style.display = "block";
        invalidyear.style.display = "none";
        document.getElementById("year").style.border = "1px solid red";
    }

    

    else if (year.length !== 4 || year > 2023) {
        invalidyear.style.display = "block";
        emptyyear.style.display = "none";
        document.getElementById("year").style.border = "1px solid red";
    }

    else {
        invalidyear.style.display = "none";
        emptyyear.style.display = "none";
        document.getElementById("year").style.border = "1px solid black";
    }
}

// working on date fetching
// working on date fetching
// working on date fetching
// working on date fetching

const date = new Date();

const dayCurrent = date.getDate();

const monthCurrent = date.getMonth() + 1;

const yearCurrent = date.getFullYear();

// working on the mathematical solution or so called Algorithms
// working on the mathematical solution or so called Algorithms
// working on the mathematical solution or so called Algorithms


