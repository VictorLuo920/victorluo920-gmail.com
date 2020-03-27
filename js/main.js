let currentValue = 0;

$(".counter").text(currentValue)



$(".adder").on('click', function(){
    currentValue = currentValue + parseInt($(".input").val());
    $(".counter").text(currentValue);
});

$(".subtractor").on('click', function(){
    currentValue = currentValue - parseInt($(".input").val());
    $(".counter").text(currentValue);
});

