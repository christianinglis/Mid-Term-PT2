// User Input
const initialloan = input("Enter your Initial Loan Amount (numeric, no commas): ")
const downpayment = input("Enter Down Payment AS A PERCENTAGE: ")
const loanterm = input("Enter Loan term in years (must be 15 or 30): ")

// Initial Calculations
    if (loanterm == 15 || loanterm == 30) {
    } else{
        alert("loan term must be 15 or 30 years, please try again.")
    }

let principleloanamaount = initialloan - downpayment
let fixedinterestrate = 5.75
let monthlypayment = ((monthlyInterestRate * principleLoanAmount) / (1 - Math.pow(1 + monthlyInterestRate, - totalMonths))) .toFized(2);

let totalinterestpaid = (monthlypayment * totalmonths) - principleloanamaount
let loancost = principleloanamaount + totalinterestpaid

const div1 = document.getElementById("initialloan")
const div2 = document.getElementById("downpayment")
const div3 = document.getElementById("loanterm")