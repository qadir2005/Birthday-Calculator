let form = document.querySelector("#dob_form");
let inputDate = document.querySelector("#Date_of_birth");
let but = document.querySelector("button")
let years = document.querySelector(".years")
let months = document.querySelector(".months")
let days = document.querySelector(".days")
let nBday = document.querySelector("#remaining_day")
let nBmonths = document.querySelector("#remaining_month")
let nByears =document.querySelector("#remaining_year")

form.addEventListener("submit", (event)=>{
    event.preventDefault(); //  ye method page ko reload nhi hone deta
    let today = new Date(); // new Date
    let userInput = new Date(inputDate.value); // User input date
    let difference = today.getTime() - userInput.getTime() // aj ki date ko user ki date se get time yani is ka mili sec lekr devide kr dya hai. or baad me ham mili seconds ko year me or month me convert kr denge
    
    // khuch formulas hain jo hamein Calculator banane me help kre ge
    let miliSecInYears = 1000 * 60 * 60 * 24 * 365.25; // 1000 miliseconds is = 1 second
    let miliSecinMonth = 1000*60*60*24*30.44
    let miliSecinDays  = 1000* 60*60*24
    let total_years = Math.floor(difference / miliSecInYears);
    let remainingMilisecOfMonth = difference - (total_years * miliSecInYears);
    let total_month = Math.floor(remainingMilisecOfMonth / miliSecinMonth);
    let remainingMiliSecInDays = difference - (total_month*miliSecinMonth)-(total_years*miliSecInYears);    
    let total_days = Math.floor(remainingMiliSecInDays / miliSecinDays);
   if(today.getMonth() > userInput.getMonth()){
    let nBdate = userInput.getDate();    
    let nBmonth = userInput.getMonth() ;
    let nByear = today.getFullYear();
    nBday.innerHTML= nBdate;    
    nBmonths.innerHTML = nBmonth+1;
    nByears.innerHTML = nByear+1;
   } 
   else{
    let nBdate = userInput.getDate();    
    let nBmonth = userInput.getMonth();
    let nByear = today.getFullYear();
    nBday.innerHTML = nBdate;
    nBmonths.innerHTML = nBmonth+1;
    nByears.innerHTML = nByear;
   }
   if(months.innerHTML == 0 && days.innerHTML == 0){
        document.write("congratulations Today is your birthday")
   }
    years.innerHTML= total_years;
    months.innerHTML = total_month;
    days.innerHTML = total_days;
   
})
