$(document).ready(function() {
var hamburger="hamburger";
var slideNavName="slideDown";

$("#"+hamburger).click(function(event) //CHECK IF YOUR BUTTON IS PRESSED
{
  if($("#"+slideNavName).attr('class')=="hidden") //CHECKS TO SEE IF YOUR MENU IS CURRENTLY CLOSED
  {
    //REVEAL YOUR NAVIGATION
    $("#"+slideNavName).toggleClass('hidden revealed');
  }
  
  else if($("#"+slideNavName).attr('class')=="revealed") //CHECKS TO SEE IF YOUR MENU IS CURRENTLY OPEN
  {
   //HIDE YOUR NAVIGATION
    $("#"+slideNavName).toggleClass('revealed hidden');
  }
});

//BONUS!!! AN OPENED NAV DISSAPEARS WHEN SCROLLING!!

$(window).scroll(function(event) //AUTOMATICALLY HIDES THE NAV WHEN SCROLLING STARTS
{
  if($("#"+slideNavName).attr('class')=="revealed") //SEE IF YOUR NAV IS OPEN
  {
    //CHANGE ICON BACK INTO A HAMBURGER
    $("#"+rectangleName+"1").toggleClass(showRect+" "+topRectX);
    $("#"+rectangleName+"2").toggleClass(showRect+" "+hideRectX);
    $("#"+rectangleName+"3").toggleClass(showRect+" "+bottomRectX);
    
    //HIDE YOUR NAVIGATION
    $("#"+slideNavName).toggleClass('revealed hidden');
  }
});
});
