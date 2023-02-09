//1.a.Get all the countries from the Asia continent /region using the Filter function
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var res=JSON.parse(this.response);

    const country =res.filter((data)=>{
        if(data.region==="Asia")
        {
             const {name={}}=data;
        return name.common;
        }
        })
        console.log(country);
    }


//1.b.Get all the countries with a population of less than 2 lakhs using Filter function

 var request=new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
 var res=JSON.parse(this.response);

     const population =res.filter((e)=>{
       
        if(e.population<200000){
            const {name={}}=e;
         return name.common;
         }
         })
         console.log(population);
     }

    //1.c.Print the following details name, capital, flag using forEach function

     var request=new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
 var res=JSON.parse(this.response);
 res.forEach((data)=>{console.log(data.name.common,data.capital,data.flag)})
    
     }
//1.d.Print the total population of countries using reduce function

 var request=new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
 var res=JSON.parse(this.response);
 let total=res.reduce((t,data)=>{if(typeof t==='object'){
   return t.population+data.population 
 } else{return t+data.population
}   
})
console.log(total);

}
     

  //1.e.Print the country which uses US Dollars as currency.

  var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var res=JSON.parse(this.response);
printData(res);}
function printData(data) {
       if(data.length > 0) {
         for(let i= 0; i < data.length; i++) {
              const {name={}, currencies={} }  = data[i];
              if(currencies.USD){
                console.log(name.common);
              }
          }
       }
   }
