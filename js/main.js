let currentValue = 0;

$(".counter").text(currentValue)


$(".adder").hover(function(){
    $(this).css("color", "black");
    }, function(){
    $(this).css("color", "hitw");
  });

$(".subtractor").hover(function(){
    $(this).css("color", "black");
    }, function(){
    $(this).css("color", "hitw");
  });


$(".adder").on('click', function(){
    currentValue = currentValue + parseInt($(".input").val());
    $(".counter").text(currentValue);
})

$(".subtractor").on('click', function(){
    currentValue = currentValue - parseInt($(".input").val());
    $(".counter").text(currentValue);
})

