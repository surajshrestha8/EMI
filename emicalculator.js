function calculate() {
    const amount  = document.getElementById('amount').value;
    const time  = document.getElementById('time').value;
    const rate = document.getElementById('rate').value;
   
    if(amount ==='' && time ==='' && rate===''){
        document.getElementById('EMI').innerHTML= 'Please enter the details';
    }
    else if(amount ==='' && time===''){
        document.getElementById('EMI').innerHTML='Please enter the amount and time';
    }
    else if(amount==='' && rate===''){
        document.getElementById('EMI').innerHTML='Please enter the amount and rate';
    }
    else if(rate==='' && time===''){
        document.getElementById('EMI').innerHTML='Please enter the rate and time';
    }
    else if(amount===''){
        document.getElementById('EMI').innerHTML='Please enter the amount';
    }
    else if(rate===''){
        document.getElementById('EMI').innerHTML='Please enter the rate';
    }

    else if(time===''){
        document.getElementById('EMI').innerHTML='Please enter the time';
    }
    else if(amount<0 || rate<0 || time<0){
        document.getElementById('EMI').innerHTML='Please enter valid details';
    }
    
    else{
        r= rate/(100*12);
        console.log(amount,time,r);
        finalrate = Math.pow((1+r),time);
        console.log(finalrate);
        EMI1 = amount*r*finalrate;
        EMI2 = (finalrate-1);
        FINALEMI = (EMI1/EMI2).toFixed(2);
        
        document.getElementById('EMI').innerHTML= 'EMI to pay:'+' Rs.' +FINALEMI;

    }





    


    

    
}