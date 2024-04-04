let inputs = [
    '366340186',
    '37259211',
    '1782732496',
    '1162460016',
    '1208057208',
    '14397956'
]
  
let counter = 0;

function increment() {
    counter = 0;
  
    for(let i = 0; i < 6; ++i) if($("input[name='entry." + inputs[i] + "']:checked").length != 0) ++counter;
  
    $("#answered-counter").html((counter == 6) ? "Анкетата е готова за предаване." : counter + " от 6 въпроса.");
}

$(function() {
    increment();
    $("input[type='radio']").on("click", function() {
        increment();
    });
});