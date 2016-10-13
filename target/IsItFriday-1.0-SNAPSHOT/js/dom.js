
function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];

    if(n == "Friday"){
        window.location = "http://localhost:8080/IsItFriday/holy.html";
//document.getElementById("Is1").innerHTML = "It is";
    }
    else{
        window.location = "http://localhost:8080/IsItFriday/notHoly.html";
//document.getElementById("Is2").innerHTML = "It's not";

    }

}
