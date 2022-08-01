// горизонатальный range для суммы
const rangeResultSumm = document.querySelector('.horizontal_scroll');
const resultFromInputSumm = document.querySelector('.input_summ');

function AddSumm(){

    if (rangeResultSumm.value >= 0 && rangeResultSumm.value <= 20){
        resultFromInputSumm.value = rangeResultSumm.value * 10000;
    }

    if(rangeResultSumm.value == 25 || rangeResultSumm.value == 30 || rangeResultSumm.value == 35 || 
        rangeResultSumm.value == 40 || rangeResultSumm.value == 45 || rangeResultSumm.value == 50 || 
        rangeResultSumm.value == 55 || rangeResultSumm.value == 60 || rangeResultSumm.value == 65 || 
        rangeResultSumm.value == 70 || rangeResultSumm.value == 75 || rangeResultSumm.value == 80 || 
        rangeResultSumm.value == 85 || rangeResultSumm.value == 90 || rangeResultSumm.value == 95 || 
        rangeResultSumm.value == 100){

        resultFromInputSumm.value = rangeResultSumm.value * 10000;
    }
    
    if(rangeResultSumm.value >= 101 && rangeResultSumm.value <= 190){
        resultFromInputSumm.value = rangeResultSumm.value * 100000 - 9000000;
    }

    if (rangeResultSumm.value >= 202 && rangeResultSumm.value <= 209){
        resultFromInputSumm.value = rangeResultSumm.value % 10 * 10000000;
    }

    if (rangeResultSumm.value == 210){
        resultFromInputSumm.value = (rangeResultSumm.value - 200) * 10000000;
    }
}

resultFromInputSumm.addEventListener('change', AddSumm);
rangeResultSumm.addEventListener('input', AddSumm);


// вычисление результатов расчёта
// const resultFromInputSumm = document.querySelector('.input_summ'); был объявлен раньше, чтобы функция
// AddSumm() могла выполняться
const resultFromInputBet = document.querySelector('.input_bet');
const resultShoseTerm = document.querySelector('.shose_term');

const resultSelectCurrency = document.querySelector('.select_currency');

const finalyResultMonthlyPayment = document.querySelector('.monthly_payment_result');
const finalyResultOverpayment = document.querySelector('.overpayment_result');
const finalyResultTotalPayoutResult = document.querySelector('.total_payout_result');

function MonthlyPayment(){
    const k = resultFromInputSumm.value;
    const s = resultFromInputBet.value;
    const p = resultShoseTerm.value;
    const c = resultSelectCurrency.value;

    if (k == "" || s == ""){
        finalyResultMonthlyPayment.value = 0;
        finalyResultOverpayment.value = 0;
        finalyResultTotalPayoutResult.value = 0;
    }

    else{
        const outputMonthlyPayment = k*(s/12/100*Math.pow(1+s/12/100, p)/(Math.pow(1+s/12/100, p)-1));
        finalyResultMonthlyPayment.value = parseFloat(outputMonthlyPayment.toFixed(0)).toLocaleString() + " " + c;

        const outputOverpayment = outputMonthlyPayment * p - k;
        finalyResultOverpayment.value = parseFloat(outputOverpayment.toFixed(0)).toLocaleString() + " " + c;

        const outputTotalPayoutResult = Number(k) + Number(outputOverpayment);
        finalyResultTotalPayoutResult.value = parseFloat(outputTotalPayoutResult.toFixed(0)).toLocaleString() + " " + c;

        var v1 = outputOverpayment;
        // console.log(v1);
        const k_b = Number(v1);
        const s_b = Number(resultFromInputSumm.value);
        
        borderOverpayment.style.width = `${k_b * 100 / s_b}%`;
    }
}

resultFromInputSumm.addEventListener('input', MonthlyPayment);
resultFromInputBet.addEventListener('input', MonthlyPayment);
resultShoseTerm.addEventListener('input', MonthlyPayment);

resultSelectCurrency.addEventListener('change', MonthlyPayment);

rangeResultSumm.addEventListener('input', MonthlyPayment);

const borderCredit = document.querySelector('.credit_border');
const borderOverpayment = document.querySelector('.overpayment_border');

borderOverpayment.addEventListener('change', MonthlyPayment);

// процентное соотношение кредита и переплаты по кредиту








