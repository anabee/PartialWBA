// console.log(wbaArray)
var stateSelection = $(".stateselection")

function setUpDropDown(){
    for (let i = 0; i < wbaArray.length; i++) {
        var newOpt = $("<option>");
        
        $(newOpt).text(wbaArray[i].state)
        $(stateSelection).append(newOpt)
    }
}

setUpDropDown();