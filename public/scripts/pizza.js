document.getElementById("pizza-form").onsubmit = validateForm;

let isValid = true;

//Clear all errors
clearErrors();

function validateForm(){

    //Validate first name
    let fname = document.getElementById("fname").value.trim();
    if (fname === ""){
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }  

    //validate last name
    let lname = document.getElementById("lname").value.trim();
    if (lname === ""){
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    } 

    //Do not submit the form if the data is in-valid

    return isValid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for( let i = 0; i<errors.length; i++){
        errors[i].style.display = "none";
    }
};
