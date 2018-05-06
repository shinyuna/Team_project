var current=0, width=100, max=4, ht=$(window).height(), htm=$("header").height();

$("#Box1").height(ht-htm);
$(window).on("resize",function(){
    var ht=$(window).height(), htm=$("header").height();
    $("#Box1").height(ht-htm);
});

  function next(){
     if(current!=max){
     slide(++current);
     }else{
     current=0;
     slide(0);
    }
  }

  function prev(){
     if(current!=0){
     slide(--current);
  }else{
     current=max;
     slide(max);
    }
  }

  function slide(idx){
     $(".recipe").stop().animate({"left":-(idx*width)+"%"});
  }
setInterval(next,"3000");
