let calculate=document.querySelector("#calc");
let choice="none";

calculate.addEventListener("click",(e)=>{
    Bmi();
})

const Bmi=()=>{
    let age=Number(document.querySelector("#age").value);
    let height=Number(document.querySelector("#height").value);
    let weight=Number(document.querySelector("#weight").value);
    let bmi = Math.round((weight)*10/(height*height))/10;
    let result=document.querySelector("#result");
    let condition="none";
    condition=(bmi<18.5)?"UnderWeight":condition;
    condition=(bmi>=18.5&&bmi<=24.9)?"Healthy":condition;
    condition=(bmi>24.9)?"OverWeight":condition;
    result.innerText=`BMI is ${bmi} ${condition}!!! `;
    if(condition=="UnderWeight"){
    result.style.backgroundColor="orange";
    }
    else if(condition=="Healthy"){
            result.style.backgroundColor="green";
    }
    else{
        result.style.backgroundColor="red";
    }
}
