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