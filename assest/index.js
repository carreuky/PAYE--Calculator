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

    //nhif
    const nhif=()=>{
        let yesnhif=document.getElementById('yesnhif')
        let nonhif=document.getElementById('nonhif')
        let nhifOut=document.getElementById('nhifOut')
        let nhif;
        if(yesnhif.checked){
            if (salary.value>= 1000) {
        
                if (salary.value>= 1000 && salary.value<= 5999) {
                    nhif= 150;
                } else if (salary.value>= 6000 && salary.value<= 7999) {
                    nhif= 300;
                } else if (salary.value>= 8000 && salary.value<= 11999) {
                    nhif= 400;
                } else if (salary.value>= 12000 && salary.value<= 14999) {
                    nhif= 500;
                } else if (salary.value>= 15000 && salary.value<= 19999) {
                    nhif= 600;
                } else if (salary.value>= 20000 && salary.value<= 24999) {
                    nhif= 750;
                } else if (salary.value>= 25000 && salary.value<= 29999) {
                    nhif= 850;
                } else if (salary.value>= 30000 && salary.value<= 34999) {
                    nhif= 900;
                } else if (salary.value>= 35000 && salary.value<= 39999) {
                    nhif= 950;
                } else if (salary.value>= 40000 && salary.value<= 44999) {
                    nhif= 1000;
                } else if (salary.value>= 45000 && salary.value<= 49999) {
                    nhif= 1100;
                } else if (salary.value>= 50000 && salary.value<= 59999) {
                    nhif= 1200;
                } else if (salary.value>= 60000 && salary.value<= 69999) {
                    nhif= 1300;
                } else if (salary.value>= 70000 && salary.value<= 79999) {
                    nhif= 1400;
                } else if (salary.value>= 80000 && salary.value<= 89999) {
                    nhif= 1500;
                } else if (salary.value>= 90000 && salary.value<= 99999) {
                    nhif= 1600;
                } else if (salary.value>= 100000) {
                    nhif= 1700;
                }
            } else {
                nhif=0.00;
            }
            nhifOut.textContent=nhif
            console.log(nhif)
        }
        else if(nonhif.checked){
            nhifOut.textContent=0.00
        }
        }

    //display pensionedsalary
    const incomeSubPension=()=>{
        let pensioned=parseInt(income.textContent-nssfout.textContent)
        incomePensioned.textContent=pensioned
    }