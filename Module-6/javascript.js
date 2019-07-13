var bxelement = document.getElementById("box");

//increase the height of the box
document.getElementById("button1").addEventListener("click", function(){
    bxelement.style.height = "200px";

});

//change the colour of the box to blue
document.getElementById("button2").addEventListener("click", function(){
    bxelement.style.backgroundColor = "blue";
});

//fade the box

document.getElementById("button3").addEventListener("click", function(){
    bxelement.style.opacity = 0.25;

});

//reset the box with its original shape and properties

document.getElementById("button4").addEventListener("click", function(){
    
    bxelement.style.height = "150px";
    bxelement.style.backgroundColor = "orange";
    bxelement.style.opacity = 1;
});