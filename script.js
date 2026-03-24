// User Input
const initialloan = prompt("Enter your Initial Loan Amount (numeric, no commas): ")
const downpayment = prompt("Enter Down Payment AS A PERCENTAGE: ")
const loanterm = prompt("Enter Loan term in years (must be 15 or 30): ")

// Initial Calculations
    if (loanterm == 15 || loanterm == 30) {
    } else{
        alert("loan term must be 15 or 30 years, please try again.")
    }

let principleloanamaount = initialloan - downpayment
let fixedinterestrate = 5.75
let monthlypayment = ((monthlyinterestrate * principleloanamount) /
(1 - Math.pow(1 + monthlyinterestrate, - totalmonths))) .toFized(2);

let totalinterestpaid = (monthlypayment * totalmonths) - principleloanamaount
let loancost = principleloanamaount + totalinterestpaid

const div1 = document.getElementById("initialloan")
for (i;i++; totalmonths)
    div1.innerHTML = "The loan term is " + loanterm + "The Annual Interest Rate is " + annualinterestrate + "The Monthly Interest Rate is "
    + monthlyinterestrate + "The Principle Loan Amount is " + principleloanamaount + "The Total interest paid is "
    + totalinterestpaid + "The Total Loan Cost is " + totalloancost + "The Monthly Payment is " + monthlypayment