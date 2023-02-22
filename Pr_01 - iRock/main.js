function touchRock(){
    var userName = prompt("What is your Name?", "Enter your name here");

    if (userName){
        alert("Hey " + userName + ". It good to Meet You !");
        document.getElementById("irock").src="rock_happy.png";
    }
}

document.getElementById("irock").onclick=touchRock();
onload="alert('Hello, Im your pet Rock !');"
