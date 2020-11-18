
var to = 'Friend!';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var present_theme = document.getElementById("gift");
var main = document.getElementById("main");


function init() {
  
  
    
  present.addEventListener("click", function(){
    present.classList.toggle("open");
   var open= setTimeout(closegift,1000);

})
  function closegift(){
    present_theme.classList.toggle("close");
    main.classList.toggle("open-card");
    
  }
    
  
  
  
  nametag.innerText = to;
}

init();

