//check off todos by clicking

$("li").click(function(){
  //if li is gray
  if($(this).css("color") ==="rgb(128, 128, 128)"){
    //turn it black
    $(this).css("color","black");
  }

  //else
  else{
    //turn it gray
    $(this).css({
      color: "gray",
      textDecoration: "Line-through"});
  }



  //3:10
});
