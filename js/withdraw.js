/*
1. add withdraw button even handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdrew amount by using getElementValueById function
4. calculate new withdraw total and set the value
4.5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById

 

*/
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValeById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total')
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
    



})