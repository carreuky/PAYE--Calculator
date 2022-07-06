let salary=document.getElementById('ksh')
let button=document.getElementById('button')
let income=document.getElementById('income')
let bonus=document.getElementById('benefits')
let kshbonus=document.getElementById('kshbonus')
let nssfout=document.getElementById('nssfOut')
let incomePensioned=document.getElementById('incomeAfterPension')

button.addEventListener('click', ()=>{
    totalIncome()
    nsff()
    incomeSubPension()
    nhif()
    // income.textContent=parseFloat(salary.value)
    bonus.textContent=parseFloat(kshbonus.value)
})

//having single selection for the buttons
function onlyOne(checkbox) {
    let period= document.getElementsByName('period')
    period.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
    incometax()
}
function checknssf(checkbox) {
    let nssf= document.getElementsByName('nssf')
    nssf.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function yesOrNonssf(checkbox) {
    let yesno= document.getElementsByName('yesno')
    yesno.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function checknhif(checkbox){
    let yesno=document.getElementsByName('nhif')
    yesno.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
//nssf
const nsff=()=>{
    let newnssf=document.getElementById('newnssf')
    let oldnssf=document.getElementById('oldnssf')
    let yesnssf=document.getElementById('yesnssf')
    let nonssf=document.getElementById('nonssf')
    if(yesnssf.checked){
    if (newnssf.checked) {
        let nssf;
        if (salary.value > 18000) { 
            nssfout.textContent=2160
        } else {
            nssf = parseInt(salary.value * 0.12);
            nssfout.textContent=nssf
            console.log(typeof(nssf))
        }
        // nssfout.textContent=parseFloat(1080)
    }
    else if (oldnssf.checked) {
        nssfout.textContent=parseInt(200)
    } 
    }else if(nonssf.checked){
        nssfout.textContent= 0.00
    }
    }