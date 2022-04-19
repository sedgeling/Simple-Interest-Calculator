//adds a highlight span tag to passed in argument
function highlightText(text){
    text1 = "<span class='highlight'>" + text + "</span>"
    return text1;
}
//gets values from html file, validates and calculates interest amount gained, 
//replaces empty result with innerHTML string  
function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal == 0 || principal < 1) {
        window.alert("Enter a positive number.");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount = interest;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit " + highlightText(principal) + ",\<br\>at an interest rate of " + highlightText(rate) + "%\<br\>You will receive an amount of " + highlightText(amount) + ",\<br\>in the year "+ highlightText(year) +"\<br\>"
    //document.getElementById("result").innerHTML = "test"
}
//visualises the rate slider for easier use
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
