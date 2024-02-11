let obj = document.getElementById("btn");
obj.addEventListener("click", myFunction);

function myFunction(){
    var node = document.createElement("li");
    var textnode = document.createTextNode("Cheese Cake");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    let node2 = document.createElement("li");
	let textnode2 = document.createTextNode("Pistachio Icecream");
	node2.appendChild(textnode2);
    document.getElementById("myList").appendChild(node2);

    let listItems = document.querySelectorAll("li");
    for(let i=1; i < listItems.length; i++){
        listItems[i].className = 'cool';
    }
}