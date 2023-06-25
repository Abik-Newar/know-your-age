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

    dayValid();
    monthValid();
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
        document.getElementById("dayAge").innerHTML = "--";
    }

    else if (day.length < 1) {
        empty.style.display = "block";
        invalid.style.display = "none";
        document.getElementById("day").style.border = "1px solid red";
        document.getElementById("dayAge").innerHTML = "--";
    }

    else{
        invalid.style.display = "none";
        empty.style.display = "none";
        document.getElementById("day").style.border = "1px solid black";
        dayCal();
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
        document.getElementById("monthAge").innerHTML = "--";
    }

    else if (month.length < 1) {
        emptymonth.style.display = "block";
        invalidmonth.style.display = "none";
        document.getElementById("month").style.border = "1px solid red";
        document.getElementById("monthAge").innerHTML = "--";
    }

    else {
        invalidmonth.style.display = "none";
        emptymonth.style.display = "none";
        document.getElementById("month").style.border = "1px solid black";
        monthCal();
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
        yearCal();
    }
}

// working on date fetching
// working on date fetching
// working on date fetching
// working on date fetching

const date = new Date();

let dayCurrent = date.getDate();

const monthCurrent = date.getMonth() + 1;

const yearCurrent = date.getFullYear();

// working on the mathematical solution or so called Algorithms
// working on the mathematical solution or so called Algorithms
// working on the mathematical solution or so called Algorithms




function dayCal(){
    let dayDob = document.getElementById("day").value;
    
    if (dayDob > dayCurrent) {
        
        let dayAdded = dayCurrent + 31;
        let dayAge = dayAdded - dayDob;

        document.getElementById("dayAge").innerHTML = dayAge;
        
    }
    else{
        let dayAge = dayCurrent - dayDob;
        document.getElementById("dayAge").innerHTML = dayAge;
    }
}



function monthCal(){
    let monthDob = document.getElementById("month").value;
    let dayDob = document.getElementById("day").value;
    if (monthDob > monthCurrent) {
        
        let monthAdded = monthCurrent + 12;
        if (dayDob > dayCurrent) {
            var monthSub = monthAdded - 1;
            var monthAge = monthSub - monthDob;
            document.getElementById("monthAge").innerHTML = monthAge;
        }
        else{
            var monthAge = monthAdded - monthDob;
            document.getElementById("monthAge").innerHTML = monthAge;
        }
    }
    else if (dayDob > dayCurrent) {
        var monthSub = monthCurrent - 1;
        if (monthDob > monthCurrent) {
            let monthAdded = monthSub + 12;
            let monthAge = monthAdded - monthDob;
            document.getElementById("monthAge").innerHTML = monthAge;
        }
        else{
            var monthAge = monthSub - monthDob;
            document.getElementById("monthAge").innerHTML = monthAge;
        }
    }
    else{
        let monthAge = monthCurrent - monthDob;
        document.getElementById("monthAge").innerHTML = monthAge;
    }
}

function yearCal(){
    const monthDob = document.getElementById("month").value;
    const monthSub = monthCurrent - 1;
    const yearDob = document.getElementById("year").value;
    if (monthCurrent < monthDob || monthSub < monthDob) {
        let yearSub = yearCurrent - 1;
        let yearAge = yearSub - yearDob
        document.getElementById("yearAge").innerHTML = yearAge;
    } else {
        let yearAge = yearCurrent - yearDob
        document.getElementById("yearAge").innerHTML = yearAge;
    }
}


