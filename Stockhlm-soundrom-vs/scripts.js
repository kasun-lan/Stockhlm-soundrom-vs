////var timer = setInterval(function () {
////    // Check if the page is still open
////    if (document.visibilityState === "hidden") {
////        function3();
////        clearInterval(timer); // Stop the timer
////    }
////}, 1000);

var button = document.getElementById("btn");
button.addEventListener("click", submitButton1Clicked);



var button2 = document.getElementById("btn2");
button2.addEventListener("click", function3);
button2.addEventListener("click", function () {

    document.getElementById("input_country").style.display = "none";
    document.getElementById("input_div1").style.display = "block";
    document.getElementById("txt").value = "";

});




var button3 = document.getElementById("cross_button");
button3.addEventListener("click", function3);
//adding an anonymous function as #cross_button's click event handler
//here going to make #input_country disply:none and #input_div display:block
button3.addEventListener("click", function () {

    document.getElementById("input_country").style.display = "none";
    document.getElementById("input_div1").style.display = "block";
    document.getElementById("txt").value = "";


});




//this function gets executed when the text is
//changed in #txt
function myFunction() {
    // Get the value of the input field
    var value = input.value;

    if (value != "") {
        // make input_country display block
        document.getElementById("input_country").style.display = "block";
        document.getElementById("input_div").style.display = "none";
    }
    else {
        // make input_country display none
        document.getElementById("input_country").style.display = "none";
        //make country elements selected index  = 0
        document.getElementById("country").selectedIndex = 0;
    }
}

function shakeInput(input) {
    input.classList.add('shake');

    setTimeout(() => {
        input.classList.remove('shake');
    }, 500);
}


function submitButton1Clicked() {

    var input = document.getElementById("txt");

    if (input.checkValidity()) {
        // Get the value of the input field
        var value = input.value;

        EmailAlreadyExist(value)

        if (result == true) {

            //here we know that the email already exist. so
            //we let the user know that through lbl_error

            document.getElementById("lbl_error").style.display = "block";
            document.getElementById("lbl_error").innerHTML = "Email Already exists!";
            shakeInput(input);
            return;
        }



        //when we come to this stage we know that intput email
        //is valid and also it does not already exist.
        //so we should copy the txt to txt2,
        //hide #input_div and 
        

        //have to do this because the #lbl_error could still be showing
        document.getElementById("lbl_error").style.display = "none";


        //set the value of txt to txt2 
        document.getElementById("txt2").value = value;

        // make input_country display block
        document.getElementById("input_country").style.display = "block";
        document.getElementById("input_div1").style.display = "none";


    }
    else { // when we come to here we know the input is not valid in #txt

        document.getElementById("lbl_error").style.display = "block";

        shakeInput(input);
    }
}









function myFunction2(email_element, CountryElement) {


    if (email_element.checkValidity()) {

        EmailAlreadyExist(email_element.value)

        if (result == true) {

            alert("already exist");
            return;
        }
        else {



            SaveData(email_element.value, CountryElement.value);
            alert("saved");
            return;

        }

    }
    else {
        alert("not valid");
    }


}


var result = null;

function EmailAlreadyExist(emailString) {

    result = null;

    $.ajax({
        type: "POST",
        url: "launching_soon.aspx/EmailExists",
        data: "{'param': '" + emailString + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {

            if (response.d == true) {

                result = true;
            }
            else
                result = false;

        }
    }).fail(function (error) {

        result = error;

    });


}

function SaveData(email, country) {

    result = null;

    var obj = {};
    obj.email = email;
    obj.country = country;


    $.ajax({
        type: "POST",
        url: "launching_soon.aspx/SaveData",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            result = response.d;

        }
    }).fail(function (error) {

        result = error;
    });
}


//this function is to be executed when in any of below
//occations.
//1. user clicks #btn2
//2. user clicks on #cross_button
//3. user clicks on a link in the page
//4. user closes page (beforeunload)
function function3() {

    var emailToSave = "";
    var countryToSave = "";

    //if #input_country is displaying we know email is not sumbitted yet
    if (document.getElementById("input_country").style.display = "block")
    {
        //we have to check whether the email in #txt2 is valid not already existing
        //in the databse, because after #input_country got displayed
        //user can change the email the is copied from #txt to #txt2
        if (document.getElementById("txt").value != document.getElementById("txt2").value) {

            //after running the below line then if "result" variable is true we know 
            //email in #txt2 is already in the databse
            EmailAlreadyExist(document.getElementById("txt2").value);

            if (!document.getElementById("txt2").checkValidity()) {

                emailToSave = document.getElementById("txt").value;
            }
            else if (result == true) {

                emailToSave = document.getElementById("txt").value;

            }
            else {
                // when we come to here we know the email in #txt is different from #txt email and that it is valid and not 
                // existing in databse so we should set #email as the "emailToSave"

                emailToSave = document.getElementById("txt2").value;

            }
          
        }
        else {//

            emailToSave = document.getElementById("txt").value;

        }

        //at this point we have the "emailToSave" now have to do some processing to check the 
        //selected item in #country and assign to "countryToSave". if the selected index is 0 ,
        //set "countryToSave" to "NA"

        var selectedIndex = document.getElementById("country").selectedIndex;

        if (selectedIndex == 0) {

            countryToSave = "NA";

        }
        else {

            countryToSave = document.getElementById("country").options[selectedIndex].value;
        }


        SaveData(emailToSave, countryToSave);

        showPopup();

    }
}

function showPopup() {
    // Create the popup element
    var popup = document.createElement("div");
    popup.innerHTML = "Saved..";
    popup.style.position = "fixed";
    popup.style.left = "50%";
    popup.style.top = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "white";
    popup.style.border = "1px solid black";
    popup.style.padding = "10px";
    popup.style.color = "blue";
    popup.style.fontWeight = "900";

    // Add the popup to the page
    document.body.appendChild(popup);

    // Hide the popup after 1 second
    setTimeout(function () {
        popup.style.display = "none";
    }, 1000);
}
