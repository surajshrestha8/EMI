
const URL = 'https://www.nrb.org.np/api/forex/v1/rate';
let forexrates;
fetch(URL,{
    method:'GET'
}).then(res=>res.json())
.then(data=>{
    const rates = data.data.payload.rates;
    console.log(rates)
    var ftable = document.getElementById('forexTable');
    for(let rate=0;rate<rates.length;rate++)
        {   
            currencyData  = rates[rate].currency.name
            unitData = rates[rate].currency.unit
            buyData = rates[rate].buy
            sellData = rates[rate].sell
            isoData = rates[rate].currency.iso3
            var row = `<tr>
                            <td>${currencyData} </td>
                            <td>${unitData} </td>
                            <td>${buyData} </td>
                            <td> ${sellData}</td>
                            </tr>`
                            ftable.innerHTML += row
   
        }
    
   
    
})





