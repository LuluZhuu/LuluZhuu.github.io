var easonObj = document.getElementById("numberEason");
easonObj.addEventListener("change", etotal);

var jayObj = document.getElementById("numberJay");
jayObj.addEventListener("change", jtotal);

var jayPrice, jaySubtotal = 0, jayNumber, easonNumber, easonPrice, easonSubtotal = 0, total;

function etotal(e){
    e.preventDefault();
    easonNumber = document.getElementById("numberEason").value;
    easonPrice = 200;
    easonSubtotal = easonNumber * easonPrice;
    // jayPrice = 300;
    // jaySubtotal = jayNumber * jayPrice;
    total = easonSubtotal + jaySubtotal;
    console.log(total);
    
    document.getElementById("subtotalEason").value = easonSubtotal;
    document.getElementById("grandtotal").value = total;


}

function jtotal(e){
    e.preventDefault();
    jayNumber = document.getElementById("numberJay").value;
    jayPrice = 300;
    jaySubtotal = jayNumber * jayPrice;
    
    total = easonSubtotal + jaySubtotal;

    console.log(total);
    document.getElementById("subtotalJay").value = jaySubtotal;
    document.getElementById("grandtotal").value = total;
}


let obj = document.forms[0];
obj.addEventListener("submit", receipt);

function receipt(e){
    e.preventDefault();

    let len = obj.elements.length;
    let text = "<hr><h2 class='title'> Thanks for your purchase today and here is your Receipt: </h2>";

    for(let i=0; i < len-2; i++){
        if((obj.elements[i].value == "") || (obj.elements[i].value == null)){
            alert("Make sure to input " + obj.elements[i].name);
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor = "yellow";
            return; // return so nothing would be done as user needs to enter the missing value
        }

        // validate ZIP Code
        else if((i == 11) && (obj.elements[i].value.length != 5)){
            alert("Make sure to input 5 digits for " + obj.elements[i].name);
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor = "yellow";
            return;
        }

        // validate email
        else if((i == 9) && (obj.elements[i].value.indexOf("@") == -1)){
            alert("Your email should include the '@' for this " + obj.elements[i].name);
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor = "yellow";
            return;
        }

        else if((i == 9) && (obj.elements[i].value.indexOf(".") == -1)){
            alert("Your email should include the '.' for this " + obj.elements[i].name);
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor = "yellow";
            return;
        }

        else{
            text += "<p class='receipt'>" + obj.elements[i].name;
            text += ": ";
            text += obj.elements[i].value + "</p>";
            text += "<p>";
        }
    }

    document.open()
            document.write("<!DOCTYPE html><head><link rel='stylesheet' href='css/style.css'></head><body><div id='wrap'><div class='header'>");
            document.write("<h1 id='headername'>My Web Development and Programming WEBSITE</h1></div><nav><ul><a href='../index.html'><li>Home</li></a>");
            document.write("<a href='../LuluZhuAsg1/contact.html'><li>Contact Form</li></a><a href='../LuluZhuAsg2/index.html'><li>Assignment #2</li>");
            document.write("</a><a href='../LuluZhuAsg3/index.html'><li>Assignment #3</li></a><a href='../LuluZhuAsg4/index.html'><li>Assignment #4</li>");
            document.write("</a></ul><ul><a href='index.html'><li>Assignment #5</li></a><a href='products.html'><li>Products</li></a></ul></nav>");
            document.write(text);
}

