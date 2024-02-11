function prizes()
{
    let prizes = ["iPhone","jewelry","200 dollars","movie tickets","bluetooth speaker"];
    let images = ["images/iphone.jpeg", "images/jewelry.jpeg", "images/dollar.jpeg", "images/movieTicket.jpeg", "images/bluetooth.jpeg"]
    let rand = Math.floor(Math.random() * prizes.length);
    let output = "";

    for (i=0; i < prizes.length; i++)
    {
        output += "<p>" + "prize " + String(i+1) + " is " + prizes[i];
        console.log(i, prizes[i], output, rand);
    }

    let result = "<h2 class='marginLeft'> Congratulations! You won " + prizes[rand] + "</h2>";

    // display result in a new window
    document.open();
    document.write("<!DOCTYPE html><head><title>LuluZhuAsg#2</title><link rel='stylesheet' href='css/style.css' </head><body>");
    document.write("<div id='wrap'><div class='header'><h1 id='headername'>My Web Development and Programming WEBSITE</h1></div>");

    document.write(result);
    document.write("<img class='marginLeft' src=" + images[rand] + " width=30% height=30%>");
    document.write("<br><a href='index.html' class='marginLeft'>Go back to main page</a>")

    document.write("</div></body></html>")

    // document.getElementById("result").innerHTML = "<h2> Congratulations! You won " + prizes[rand] + "</h2>";
    // document.getElementById("resultimage").innerHTML = "<img src=" + images[rand] + " width=30% height=30%>"; 
}



window.onload = randimgage;
function randimgage(){
    console.log("Window loaded.");

    let images = ["images/random1.jpeg", "images/random2.jpeg","images/random3.jpeg","images/random4.jpeg","images/random5.jpeg","images/random6.jpeg","images/random7.jpeg","images/random8.jpeg",];
    let index = Math.floor(Math.random() * images.length);
    // let obj = document.querySelector("#img1"); //this uses id selector
    let obj = document.images[0]; //uses images[] arrag created by DOM
    obj.src = images[index];
}


let imagearray = ["images/random2.jpeg", "images/random1.jpeg","images/random3.jpeg","images/random4.jpeg","images/random5.jpeg","images/random6.jpeg","images/random7.jpeg","images/random8.jpeg"];
let index = 0;
function start(){

    if(index >= imagearray.length){
        index = 0;
    }

    document.images[1].src = imagearray[index];
    index++;

    timer = setTimeout(start,2000);
}
function stop(){
    clearTimeout(timer);
}
