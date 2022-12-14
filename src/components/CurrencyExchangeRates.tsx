// const fs = require('react-native-fs');

export const getCurrencyRates=(arg:{label:string,value:number}[])=>{    

    const rates:{label:string,value:number}[]= [{ label: 'EUR', value: 1 }]
    var requestURL = 'https://api.exchangerate.host/latest';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send(); 
    
    request.onload = function() {   

        var response = request.response;
        
        for(const[key,value] of Object.entries(response.rates)){        
            arg.push({ label: key.toString(), value:value as number});
        }
    }
}

