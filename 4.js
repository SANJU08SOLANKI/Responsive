console.log("first");

var hide = document.getElementById("hide");
var show = document.getElementById("show");

function showbtn(){
    console.log("show");
    hide.style.display="block";
    show.style.display="none";

}

function hidebtn(){
    console.log("hide");
    hide.style.display="none";
    show.style.display="block";

}
