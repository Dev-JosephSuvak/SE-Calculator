var copyCost,imagesCost,supplyCost,laborCost,graphicsCost,editingCost,promoCost,totalImagesCost,totalCostCost,monthlyVolCost,percentageVolCost,rpmCost,nMonthsCost,roiCost,mrevCost,arevCost;


function calc() {
    GlobalEvtListener();

    console.log(sum([copyCost,imagesCost,supplyCost,laborCost,graphicsCost,editingCost,promoCost,]));
}

function GlobalEvtListener(copy, images, supply, labor, graphics, editing, promo, totalImages, totalCost, monthlyVol, percentageVol, rpm, nMonths, roi, mrev, arev) {

    copy = document.querySelector("#copy").addEventListener("onchange", calc);
    images = document.querySelector("#images").addEventListener("onchange", calc);
    supply = document.querySelector("#supply").addEventListener("onchange", calc);
    labor = document.querySelector("#labor").addEventListener("onchange", calc);
    graphics = document.querySelector("#graphics").addEventListener("onchange", calc);
    editing = document.querySelector("#editing").addEventListener("onchange", calc);
    promo = document.querySelector("#promo").addEventListener("onchange", calc);
    totalImages = document.querySelector("#totalImages").addEventListener("onchange", calc);
    totalCost = document.querySelector("#totalCost").addEventListener("onchange", calc);
    monthlyVol = document.querySelector("#monthlyVol").addEventListener("onchange", calc);
    percentageVol = document.querySelector("#percentageVol").addEventListener("onchange", calc);
    rpm = document.querySelector("#rpm").addEventListener("onchange", calc);    
    nMonths = document.querySelector("#nMonths").addEventListener("onchange", calc);
    roi = document.querySelector("#roi").addEventListener("onchange", calc);
    mrev = document.querySelector("#mrev").addEventListener("onchange", calc);
    arev = document.querySelector("#arev").addEventListener("onchange", calc);

    return [copy, images, supply, labor, graphics, editing, promo, totalImages, totalCost, monthlyVol, percentageVol, rpm, nMonths,roi,mrev,arev]
}

function sum(input) {if (toString.call(input) !== "[object Array]") return false;

var total = 0;
for (var i = 0;
i < input.length;
i++) {if (isNaN(input[i])) {continue;
}total += Number(input[i]);
}return total;

}
calc();

