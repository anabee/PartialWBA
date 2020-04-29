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

    function stateFunc(){
        if (inputState.val() == "California (CA)"){
            californiaCalc();
        } else if (inputState.val() == "New Jersey (NJ)"){
            newJerseyCalc();
        }
        else if (inputState.val() == "Nevada (NV)"){
            nevadaCalc();
        }
    }
    stateFunc();

})

// ************** CALIFORNIA *********************
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
// ************** NEW JERSEY *********************
function newJerseyCalc(){
    var wbaCalcNJ
    function wbaCalcNJ() {
        if ((origWages * 0.6) <= 713){
        return wbaCalcNJ= (origWages * 0.6)
        } else {
        return wbaCalcNJ= 713
        }
    };
    wbaCalcNJ();  
    console.log(wbaCalcNJ)

    var currentEarningsNJ
    var calcNJ
    function crntEarningsNJ(){
        calcNJ = origWages - (origWages*(percentRed/100))
        if (calcNJ <= 713) {
            return currentEarningsNJ = calcNJ
        } else {
            return currentEarningsNJ = "NOT ELIGIBLE"
        }
    };
    crntEarningsNJ();
    console.log (currentEarningsNJ);

    var estWBANJ 
    function estimatedWbaNJ(){
        if (calcNJ <= 713) {
           return estWBANJ = calcNJ - (calcNJ*0.2)
        } else {
            return estWBANJ = "NOT ELIGIBLE" 
        }
    };
    estimatedWbaNJ();
    console.log (estWBANJ);

    var careAmntNJ = estWBANJ+ 600;

    var wbaDivNJ = $("<div>");
    var njWBA = $("<p>");
    var njCrrntEarnings = $("<p>");
    var njEstimatedPWBA = $("<h4>");
    var stimulusAmntNJ = $("<h6>");
    var stimulusNoteNJ = $("<p>");

    wbaDivNJ.append(njWBA);
    wbaDivNJ.append(njCrrntEarnings);
    wbaDivNJ.append(njEstimatedPWBA);
    wbaDivNJ.append(stimulusAmntNJ);
    wbaDivNJ.append(stimulusNoteNJ);

    cardHoldingDiv.append(wbaDivNJ);

    njWBA.text("Weekly Benefit Amount: $" +wbaCalcNJ);
    njCrrntEarnings.text("Current Earnings: $" +currentEarningsNJ);
    njEstimatedPWBA.text("Estimated Partial Weekly Benefit Amount: $" +estWBANJ);
    stimulusAmntNJ.text("Estimated Partial WBA with CARES Act: $"+careAmntNJ)
    stimulusNoteNJ.text("**An additional $600 to each PUA weekly benefit amount you may be eligible to receive, as part of the separate CARES Act Pandemic Additional Compensation program. Only the weeks of a claim between March 29 and July 25* are eligible for the extra $600 payments.");

}

// ************** NEVADA *********************
function nevadaCalc(){
    var wbaCalcNV
    function wbaCalcNV() {
        if ((quarterlyCalc * 0.04) <= 427){
        return wbaCalcNV= (quarterlyCalc * 0.04)
        } else {
        return wbaCalcNV= 427
        }
    };
    wbaCalcNV();  
    console.log(wbaCalcNV)

    var weeklyearningsNV = redWages;

    var estWBANV 
    function estimatedWbaNV(){
        estWBANV = wbaCalcNV - (weeklyearningsNV*0.75)
    };
    estimatedWbaNV();
    console.log (estWBANV);

    var careAmntNV = estWBANV+ 600;

    var wbaDivNV = $("<div>");
    var nvWBA = $("<p>");
    var nvCrrntEarnings = $("<p>");
    var nvEstimatedPWBA = $("<h4>");
    var stimulusAmntNV = $("<h6>");
    var stimulusNoteNV = $("<p>");

    wbaDivNV.append(nvWBA);
    wbaDivNV.append(nvCrrntEarnings);
    wbaDivNV.append(nvEstimatedPWBA);
    wbaDivNV.append(stimulusAmntNV);
    wbaDivNV.append(stimulusNoteNV);

    cardHoldingDiv.append(wbaDivNV);

    nvWBA.text("Weekly Benefit Amount: $" +wbaCalcNV);
    nvCrrntEarnings.text("Weekly Earnings: $" +weeklyearningsNV);
    nvEstimatedPWBA.text("Estimated Partial Weekly Benefit Amount: $" +estWBANV);
    stimulusAmntNV.text("Estimated Partial WBA with CARES Act: $"+careAmntNV)
    stimulusNoteNV.text("**An additional $600 to each PUA weekly benefit amount you may be eligible to receive, as part of the separate CARES Act Pandemic Additional Compensation program. Only the weeks of a claim between March 29 and July 25* are eligible for the extra $600 payments.");

}