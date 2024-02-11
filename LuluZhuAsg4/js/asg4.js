function sign(){
    let objValue = document.querySelector("#birthday").value;
    console.log(objValue);

    let mydate = new Date(objValue);
    let uyear = mydate.getUTCFullYear();
    let udate = mydate.getUTCDate();
    let umonth = mydate.getUTCMonth() + 1;
    console.log(udate, umonth);

    // the first Month for the sign, the 2nd Month for the sign, the first day and the last day for the first month range, 
    // the first day and the last day for the 2nd month range for that sign, the name of the sign, the fortune, and finally, the image src for that sign.
    let zodiac = new Array(12);
    zodiac[0] = [3,4,21,31,1,20,"Aries","Life is a daring adventure or nothing at all.", "images/aries.jpeg"];
    zodiac[1] = [4,5,21,30,1,21,"Taurus","Slow and steady wins the race.", "images/taurus.jpeg"];
    zodiac[2] = [5,6,22,31,1,21,"Gemini","Stay curious.", "images/gemini.jpeg"];
    zodiac[3] = [6,7,22,30,1,22,"Cancer","Home is where the heart is.", "images/cancer.jpeg"];
    zodiac[4] = [7,8,23,31,1,22,"Leo","Carpe Diem (Seize the day).", "images/leo.jpeg"];
    zodiac[5] = [8,9,23,31,1,21,"Virgo","Strive for excellence.", "images/virgo.jpeg"];
    zodiac[6] = [9,10,22,30,1,22,"Libra","Balance in all things.", "images/libra.jpeg"];
    zodiac[7] = [10,11,23,31,1,21,"Scorpio","What doesn't kill you makes you stronger.", "images/scorpio.jpeg"];
    zodiac[8] = [11,12,22,30,1,21,"Sagittarius","Not all those who wander are lost.", "images/sagi.jpeg"];
    zodiac[9] = [12,1,22,31,1,20,"Capricorn","When one door closes, another opens.", "images/capricorn.jpeg"];
    zodiac[10] = [1,2,21,30,1,19,"Aquarius","Be yourself; everyone else is already taken.", "images/aquarius.jpeg"];
    zodiac[11] = [2,3,20,29,1,20,"Pisces","Imagination is more important than knowledge.", "images/pisces.jpeg"];
    

    let objText = document.forms[0].elements[0];
    let objImage = document.querySelector("#imageDisplay");
    let outputText = "";

    for (let index = 0; index < zodiac.length; index++){

        if((umonth == zodiac[index][0]) && (udate >= zodiac[index][2] && udate <= zodiac[index][3])||(umonth == zodiac[index][1]) && (udate >= zodiac[index][4]) && (udate <= zodiac[index][5]))
        {

            outputText = "Your birthday is: " + umonth + "/" + udate + "/" + uyear + "\nYou are a " + zodiac[index][6] + "\n" + zodiac[index][7];
            objImage.innerHTML = "<img id=output src=" + zodiac[index][8] + " height=30% width=30%>";
            break;
        }
    }

    objText.value = outputText;

    

}

// function sign() {
//     let objValue = document.querySelector("#birthday").value;
//     console.log(objValue);

//     let mydate = new Date(objValue);
//     let uyear = mydate.getUTCFullYear();
//     let udate = mydate.getUTCDate();
//     let umonth = mydate.getUTCMonth() + 1;
//     console.log(udate, umonth);

//     let zodiac = new Array(12);
//     zodiac[0] = [3,4,21,31,1,20,"Aries","Life is a daring adventure or nothing at all.", "images/aries.jpeg"];
//         zodiac[1] = [4,5,21,30,1,21,"Taurus","Slow and steady wins the race.", "images/taurus.jpeg"];
//         zodiac[2] = [5,6,22,31,1,21,"Gemini","Stay curious.", "images/gemini.jpeg"];
//         zodiac[3] = [6,7,22,30,1,22,"Cancer","Home is where the heart is.", "images/cancer.jpeg"];
//         zodiac[4] = [7,8,23,31,1,22,"Leo","Carpe Diem (Seize the day).", "images/leo.jpeg"];
//         zodiac[5] = [8,9,23,31,1,21,"Virgo","Strive for excellence.", "images/virgo.jpeg"];
//         zodiac[6] = [9,10,22,30,1,22,"Libra","Balance in all things.", "images/libra.jpeg"];
//         zodiac[7] = [10,11,23,31,1,21,"Scorpio","What doesn't kill you makes you stronger.", "images/scorpio.jpeg"];
//         zodiac[8] = [11,12,22,30,1,21,"Sagittarius","Not all those who wander are lost.", "images/sagi.jpeg"];
//         zodiac[9] = [12,1,22,31,1,20,"Capricorn","When one door closes, another opens.", "images/capricorn.jpeg"];
//         zodiac[10] = [1,2,21,30,1,19,"Aquarius","Be yourself; everyone else is already taken.", "images/aquarius.jpeg"];
//         zodiac[11] = [2,3,20,29,1,20,"Pisces","Imagination is more important than knowledge.", "images/pisces.jpeg"];
        

//     let obj = document.querySelector("#output");
//     let output = "";

//     for (let index = 0; index < zodiac.length; index++) {
//         if ((umonth === zodiac[index][0] && udate >= zodiac[index][2] && udate <= zodiac[index][3]) || (umonth === zodiac[index][1] && udate >= zodiac[index][4] && udate <= zodiac[index][5])) {
//             output = "<p>Your birthday is: " + umonth + "/" + udate + "/" + uyear +
//                 "<p>You are a " + zodiac[index][6] +
//                 "<p><img src=" + zodiac[index][8] + " height=30% width=30%>" +
//                 "<p>" + zodiac[index][7];
//             break;
//         }
//     }

//     if (output === "") {
//         output = "<p>Zodiac sign not found for this date.";
//     }

//     obj.innerHTML = output;
// }

