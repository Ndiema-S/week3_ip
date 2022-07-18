let milkProductions = [
        {
    "ShadeA" :  [510, 456,  549, 569,  569,  553, 564]},
    {"ShadeB" :[510, 540,  549, 123,  569,  553, 234]}
    ,
    {"ShadeC" :  [876, 234,  549, 678,  345,  553, 564]},
    {"ShadeD" :  [510, 540,  549, 234,  567,  678, 543]}

];

const totalProduction = () => {
    let TotalMilk = 0;

        ShadeA = milkProductions[0]["ShadeA"]
        ShadeASum = 0;
        for(shade_a = 0; shade_a < ShadeA.length; shade_a++){
            ShadeASum += ShadeA[shade_a]

        }

        ShadeB = milkProductions[1]["ShadeB"];
        ShadeBSum = 0;
        for(shade_b= 0; shade_b < ShadeB.length; shade_b++){
            ShadeBSum += ShadeB[shade_b];

        }

        
        ShadeC = milkProductions[2]["ShadeC"];
        ShadeCSum = 0;
        for(shade_c= 0; shade_c< ShadeC.length; shade_c++){
            ShadeCSum += ShadeC[shade_c];

        }

        ShadeD = milkProductions[3]["ShadeD"];
        ShadeDSum = 0;
        for(shade_d= 0; shade_d< ShadeD.length; shade_d++){
            ShadeDSum += ShadeD[shade_d];

        }        

        TotalMilk = ShadeASum + ShadeBSum + ShadeCSum + ShadeDSum
        let ShadeAProduction = "Your prodution in Shade A is " + ShadeASum + " litres per week."
        let ShadeBProduction = "Your prodution in Shade B is " + ShadeBSum + " litres per week."
        let ShadeCProduction = "Your prodution in Shade C is " + ShadeCSum + " litres per week."
        let ShadeDProduction = "Your prodution in Shade D is " + ShadeDSum + " litres per week."
        let TotaMilkAmount = "Total amount of mil produced by all shades is " + TotalMilk + " litres per week."

        
        document.getElementById("total-production").innerHTML = "<p>"+ ShadeAProduction +"<p>" + "<p>"+ 
            ShadeBProduction +"<p>" + "<p>"+ ShadeCProduction +"<p>"  + "<p>"+ ShadeDProduction +"<p>"  + "<p>"+ TotaMilkAmount +"<p>"
}
    const incomeOverTime = () => {
    sellling_price = document.getElementById("sellling_price").value;
    event.preventDefault();
    let TotalMilk = 0;

        ShadeA = milkProductions[0]["ShadeA"]
        ShadeASum = 0;
        for(shade_a = 0; shade_a < ShadeA.length; shade_a++){
            ShadeASum += ShadeA[shade_a]

        }

        ShadeB = milkProductions[1]["ShadeB"];
        ShadeBSum = 0;
        for(shade_b= 0; shade_b < ShadeB.length; shade_b++){
            ShadeBSum += ShadeB[shade_b];

        }

        
        ShadeC = milkProductions[2]["ShadeC"];
        ShadeCSum = 0;
        for(shade_c= 0; shade_c< ShadeC.length; shade_c++){
            ShadeCSum += ShadeC[shade_c];

        }

        ShadeD = milkProductions[3]["ShadeD"];
        ShadeDSum = 0;
        for(shade_d= 0; shade_d< ShadeD.length; shade_d++){
            ShadeDSum += ShadeD[shade_d];

        }        

        TotalMilk = ShadeASum + ShadeBSum + ShadeCSum + ShadeDSum


    let totalMilkProduction =  TotalMilk * sellling_price
    document.getElementById("Sum").innerHTML = "Your weekly income will be ksh " + totalMilkProduction;


    
}
function montlyIncome(){
    let totalIncomePerMonth = totalMilkProduction *4
    document.getElementById(incomePerMonth).innerHTML=incomePerMonth;
    // return totalMilkProduction;
}
montlyIncome()







