function change1()
{
    let textchange = document.getElementById("introText");
    textchange.style.color="#FF90AA";
    textchange.style.fontFamily="DMSerif";
    textchange.style.display="flex";
    textchange.style.justifyContent="center";
    textchange.style.alignItems="center";


    let containerchange = document.getElementById("introTextContainer");
    containerchange.style.margin="20px";
    containerchange.style.padding = "5px";
    containerchange.style.backgroundColor="#4C454C";
    containerchange.style.borderRadius="60px";
    containerchange.style.display="flex";
    containerchange.style.justifyContent="center";
    containerchange.style.alignItems="center";

    let headerchange = document.getElementById("headername");
    headerchange.style.color="#f28482";
    headerchange.style.fontSize="42pt";
    headerchange.style.fontFamily="Wonderface";
}

function swapT()
{
    let text1 = document.getElementById("p1");
    let textHTML1 = text1.innerHTML;

    let text2 = document.getElementById("p2");
    let textHTML2 = text2.innerHTML;

    text1.innerHTML = textHTML2;
    text2.innerHTML = textHTML1;
}

function swapImg()
{
    let imgobj1 = document.getElementById("img1");
    let imgsrc1 = imgobj1.src;
    let imgobj2 = document.getElementById("img2");
    let imgsrc2 = imgobj2.src;

    imgobj1.src = imgsrc2;
    imgobj2.src = imgsrc1;

}