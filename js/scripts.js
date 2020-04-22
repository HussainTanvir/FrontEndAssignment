/* ---Curtain Menu--- */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

/* ---For Recepe 1 to 5 Flip Panel 01-05--- */
$(document).ready(function(){
  $("#flip01").click(function(){
    $("#panel01").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#flip02").click(function(){
    $("#panel02").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#flip03").click(function(){
    $("#panel03").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#flip04").click(function(){
    $("#panel04").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#flip05").click(function(){
    $("#panel05").slideToggle("slow");
  });
});
