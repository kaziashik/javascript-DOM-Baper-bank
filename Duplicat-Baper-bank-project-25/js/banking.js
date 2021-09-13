
// function doubleIt(num){
//     const result = num *2;
//     return result;
// }













//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const NewdepositAmount = depositInput.value;


    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const PrevisDepositAmount = depositTotal.innerText;
    const NewDepositTotal = parseFloat(PrevisDepositAmount) + parseFloat(NewdepositAmount);

    depositTotal.innerText = NewDepositTotal;

    //update account balance total

    const balanceTotal = document.getElementById('balance-product');

    const balanseTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanseTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(NewdepositAmount);

    balanceTotal.innerText = newBalanceTotal;





    //clear the deposit input field

    depositInput.value = '';


});



// handle withdraw event handla

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawinput = document.getElementById('Withdraw-input');
    const withdrawAmountText = withdrawinput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);




    //set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrowText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrowText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;


    //update balance
    const balanceTotal = document.getElementById('balance-product');
    const previousBalanceText = balanceTotal.innerText;

    const prevoousBalanceTotal = parseFloat(previousBalanceText) - newWithdrawAmount;

    balanceTotal.innerText = prevoousBalanceTotal;


    //clear withdraw input 

    withdrawinput.value = '';

})