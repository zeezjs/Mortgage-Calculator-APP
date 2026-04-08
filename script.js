// Global vars
const mtgAmount = document.querySelector('#mtgAmount');
const mtgTerm = document.querySelector('#mtgTerm');
const mtgIntreset = document.querySelector('#mtgIntreset');
const clrBtn = document.querySelector('.heading-clear-btn');
// resultDisplay = document.querySelector('#result');
const time = document.querySelector('#time');
const calculate = document.querySelector('.calc-submit-btn');
const resultEmpty = document.querySelector('.result-section-empty');
const resultShown = document.querySelector('.result-section-completed');
const form = document.querySelector('.calculator-form');

//states
let filteredAmount = 0;
let filteredIntreset = 0;
let filteredTerm = 0;
// let resultDisplay = 0;
let result = 0;

//functions
//format for user inputs
const format = rawValue =>{
    let value = rawValue.replace(/\D/g, "");
    //console.log(value)
    if(!value){
     return "";  
    };
    return Number(value).toLocaleString();
};
//calculating mortgage
const calculateMortgage = ()=>{
    // filteredAmount = filteredAmount.replace(/,/g, "");
    // filteredIntreset = filteredIntreset.replace(/,/g, "");
    // filteredTerm = filteredTerm.replace(/,/g, "");
    if (!filteredAmount || !filteredTerm || !filteredIntreset){
        resultEmpty.style.display = 'flex';
        resultShown.style.display = 'none';
        return;
    }
    if(form.type.value === "A"){
        const r = filteredIntreset/100/filteredIntreset;
        const t = filteredTerm*12
    
        result = Math.round(filteredAmount * (r*Math.pow(1+r, t))/(Math.pow(1+r, t) - 1));
        // resultDisplay = result;
        const html = `
        <div class="result-info-section">
        <h3 class="result-info-heading">Your results</h3>
        <p class="result-info-text text-complete">Your results are shown below based on the information you provided. 
        To adjust the results, edit the form and click “calculate repayments” again.</p>
        </div>
        <div class="result-answer-section">
        <div class="result-type-answer">
        <p class="result-info-text text-complete">Your monthly repayments</p>
        <h1 class="result" id="result">£${result}</h1>
        </div>
        <hr>
        <div class="result-term">
        <p class="result-info-text text-complete">  Total you'll repay over the term</p>
        <h4 class="result-term-amount" id="time">£1000</h4>
        </div>
        </div>
        `
        resultShown.innerHTML = html;
        console.log(result);
    }else if(form.type.value === "B"){
        console.log('Feature not yet out')
    }else{
        resultEmpty.style.display = 'flex';
        resultShown.style.display = 'none';
    };
    // return result
};
// resultDisplay = result;


//Events
mtgAmount.addEventListener("input", e=>{
    let amountValue = e.target.value;
    e.target.value = format(amountValue);
    filteredAmount = Number(format(amountValue).replace(/,/g, ""));
    // console.log(filteredAmount);
    return filteredAmount;
});
mtgTerm.addEventListener('input', e=>{
    let termValue = e.target.value;
    e.target.value = format(termValue);
    filteredTerm = Number(format(termValue).replace(/,/g, ""));
    // console.log(filteredTerm);
    return filteredTerm;
});
mtgIntreset.addEventListener('input', e=>{
    let intresetValue = e.target.value;
    e.target.value = format(intresetValue);
   filteredIntreset = Number(format(intresetValue).replace(/,/g, ""));
    // console.log(filteredIntreset);
    return filteredIntreset;
})
clrBtn.addEventListener('click', e=>{
    mtgTerm.value = ""
    mtgAmount.value = ""
    mtgIntreset.value = ""
    resultEmpty.style.display = 'flex';
    resultShown.style.display = 'none';
});
calculate.addEventListener('click', e=>{
    e.preventDefault();
    resultEmpty.style.display = 'none';
    resultShown.style.display = 'flex';
    calculateMortgage();
});