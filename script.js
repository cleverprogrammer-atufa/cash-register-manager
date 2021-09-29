const billAmount = document.querySelector("#billAmount")
const nextBtn = document.querySelector("#nextBtn")

const cashGivenDiv = document.querySelector(".cashGivenInput")
const checkBtn = document.querySelector("#checkBtn")
const cashGiven = document.querySelector("#cashGiven")

const errorDiv = document.querySelector(".errorMsg")

const changeReturnDiv = document.querySelector(".changeReturn")
const output = document.querySelector("#output")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]
const noOfNotes = document.querySelectorAll('.noOfNotes')

function showMessage(text) {
    errorDiv.style.display = "block";
    errorDiv.innerText = text;
    changeReturnDiv.style.display = "none";
}

function hideMessage() {
    errorDiv.style.display = "none"
}


nextBtn.addEventListener('click', function () {

    hideMessage();
    
    if (Number(billAmount.value) > 0) {
        nextBtn.style.display = "none";
        cashGivenDiv.style.display = "block";
    } else {
        showMessage("Enter valid bill amount");
    }

})

checkBtn.addEventListener('click', function () {
    
    hideMessage();

    let billAmountValue = Number(billAmount.value);
    let cashGivenValue = Number(cashGiven.value);

    if (billAmountValue > 0 && cashGivenValue > 0) {
        if (!Number.isInteger(cashGivenValue)) {
            showMessage("Enter valid amount in cash given field");
            return;
        }
        if (billAmountValue > cashGivenValue) {
            showMessage("Cash is less than bill, please enter right amount");
            return;
        }
        returnAmount = cashGivenValue- billAmountValue  
        calculateNotes(returnAmount);
    } else {
        showMessage("Enter valid Bill amount and Cash  to continue")
    }
})


function calculateNotes(returnAmount) {
    
    if (returnAmount < 1) {
        showError("No amount should be returned");
        return;
    }
    changeReturnDiv.style.display = "block";
    for( let i=0; i<availableNotes.length;i++){
        
        const numberOfNotes = Math.trunc(returnAmount/availableNotes[i]);
        returnAmount %= availableNotes[i]
        noOfNotes[i].innerText = numberOfNotes;
    }
}

