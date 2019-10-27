var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
var textBox = document.getElementById('newUserName');
jQuery(document).ready(function(){
//--------------------------------
//------------------------------------
  $("#startButton").css({position:'absolute', height: '50px', width: '200px', 'padding-top': '10px', 'padding-bottom': '10px', });
  $("#stopButton").css({ position:'absolute', right: '0', height: '50px', width: '200px', 'padding-top': '10px', 'padding-bottom': '10px', });
//------------------------------------
  $("#startButton").click(function() {
    console.log("start clicked")
  });
  $("#stopButton").click(function() {
    console.log("stop clicked")
//------------------------------------


  });
});
