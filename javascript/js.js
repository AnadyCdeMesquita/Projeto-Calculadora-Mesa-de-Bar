function update(){
let bill = Number(document.getElementById("yourBill").value)
let tipPercent = document.getElementById("tipInput").value
let split = document.getElementById("splitInput").value

let tipValue = bill * (tipPercent / 100)
let billTotal = bill + tipValue
let billEach   = bill / split

document.getElementById("tipPercent").innerHTML = tipPercent + ' %'
document.getElementById("tipValue").innerHTML = '$ ' + tipValue
document.getElementById("totalWithTip").innerHTML = "$" + billTotal  
document.getElementById("splitValue").innerHTML = split 
document.getElementById("billEach").innerHTML = billTotal / split

}