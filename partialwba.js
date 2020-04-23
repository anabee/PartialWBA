// console.log(wbaArray)
var stateSelection = $(".stateselection");
var calculateBtn = $(".calculateBtn");
var inputState = $("#inputState");
var origionalWages = $("#origionalWages");
var quarterlywages = $(".quarterlywages");
var reducedWages = $("#reducedWages");
var percentageReduced = $(".percentageReduced");

function setUpDropDown(){
    for (let i = 0; i < wbaArray.length; i++) {
        var newOpt = $("<option>");
        
        $(newOpt).text(wbaArray[i].state)
        $(stateSelection).append(newOpt)
    }
}

setUpDropDown();

// calculateBtn.on("click", function(e){
//     e.preventDefault();
//     console.log(inputState.val())
// });

$("form").on("submit", function(e){
    e.preventDefault();

    var quarterlyCalc = origionalWages.val() * 12;
    $(quarterlywages).text(quarterlyCalc);


    var percentRed = (reducedWages.val() / origionalWages.val()) * 100
    $(percentageReduced).text(percentRed+"%")

})