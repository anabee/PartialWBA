// console.log(wbaArray)
var stateSelection = $(".stateselection");
var calculateBtn = $(".calculateBtn");
var inputState = $("#inputState");
var origionalWages = $("#origionalWages");
var quarterlywagesDiv = $(".quarterlywages");
var reducedWages = $("#reducedWages");
var percentageReduced = $(".percentageReduced");
var cardHoldingDiv = $(".cardHoldingDiv");

function setUpDropDown(){
    for (let i = 0; i < wbaArray.length; i++) {
        var newOpt = $("<option>");
        
        $(newOpt).text(wbaArray[i].state)
        $(stateSelection).append(newOpt)
    }
}

setUpDropDown();

var quarterlyCalc
var percentRed
var origWages 
var redWages 


$("form").on("submit", function(e){
    e.preventDefault();
    
    origWages = origionalWages.val()
    redWages = reducedWages.val()

    quarterlyCalc = origWages * 12;
    $(quarterlywagesDiv).text("$"+quarterlyCalc);


    percentRed = (redWages / origWages) * 100
    $(percentageReduced).text(percentRed+"%")

    if(inputState = "California (CA)"){
        californiaCalc()
    }
})

function californiaCalc(){
    var wbaCalcCAdata
    function wbaCalcCA() {
        if ((origWages - redWages) >= 450){
        return wbaCalcCAdata= 450
        } else {
        return wbaCalcCAdata = (origWages - redWages)
        }
    };
    wbaCalcCA();  
    console.log(wbaCalcCAdata)

    var wbaReductionTfCA
    function wbaDeductiolCal(){
        var wbaTfP = wbaCalcCAdata - (wbaCalcCAdata*0.25);
        var wbaTfD = wbaCalcCAdata - 25;
        if (wbaTfD <= wbaTfP) {
            return wbaReductionTfCA = wbaTfD
        } else {
            return wbaReductionTfCA = wbaTfP
        }
    };
    wbaDeductiolCal();
    console.log (wbaReductionTfCA);

    var estWBA 
    function estimatedWbaCA(){
        if (wbaReductionTfCA <= 450) {
           return estWBA = 450 - wbaReductionTfCA
        } else {
            return estWBA = 450 
        }
    };
    estimatedWbaCA();
    console.log (estWBA);

    var careAmntCA = estWBA + 600;

    var wbaDivCA = $("<div>");
    var caWBA = $("<p>");
    var caReductionAmnt = $("<p>");
    var caEstimatedPWBA = $("<h4>");
    var stimulusAmnt = $("<h6>");
    var stimulusNote = $("<p>");

    wbaDivCA.append(caWBA);
    wbaDivCA.append(caReductionAmnt);
    wbaDivCA.append(caEstimatedPWBA);
    wbaDivCA.append(stimulusAmnt);
    wbaDivCA.append(stimulusNote);

    cardHoldingDiv.append(wbaDivCA)

    caWBA.text("Weekly Benefit Amount: $" +wbaCalcCAdata);
    caReductionAmnt.text("Deduction ($25 or 25%): $" +wbaReductionTfCA);
    caEstimatedPWBA.text("Estimated Partial Weekly Benefit Amount: $" +estWBA);
    stimulusAmnt.text("Estimated Partial WBA with CARES Act: $"+careAmntCA)
    stimulusNote.text("**An additional $600 to each PUA weekly benefit amount you may be eligible to receive, as part of the separate CARES Act Pandemic Additional Compensation program. Only the weeks of a claim between March 29 and July 25* are eligible for the extra $600 payments.");

}