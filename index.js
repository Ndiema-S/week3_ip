let milkProductions = [
    {
"ShedA" :  [510, 456,  549, 569,  569,  553, 564]},
{"ShedB" :[510, 540,  549, 123,  569,  553, 234]}
,
{"ShedC" :  [876, 234,  549, 678,  345,  553, 564]},
{"ShedD" :  [510, 540,  549, 234,  567,  678, 543]}

];

const totalProduction = () => {
    let TotalMilk = 0;

        ShedA = milkProductions[0]["ShedA"]
        ShedASum = 0;
        for(shed_a = 0; shed_a < ShedA.length; shed_a++){
            ShedASum += ShedA[shed_a]

        }

        ShedB = milkProductions[1]["ShadeB"];
        ShedBSum = 0;
        for(shed_b= 0; shed_b < ShedB.length; shed_b++){
            ShedBSum += ShedB[shed_b];

        }

        
        ShedC = milkProductions[2]["ShadeC"];
        ShedCSum = 0;
        for(shed_c= 0; shed_c< ShedC.length; shed_c++){
            ShedCSum += ShedC[shed_c];

        }

        SheD = milkProductions[3]["ShadeD"];
        ShedDSum = 0;
        for(shed_d= 0; shed_d< ShedD.length; shed_d++){
            ShedDSum += SheD[shed_d];

        }        

        TotalMilk = ShedASum + ShedBSum + ShedCSum + ShedDSum
        let ShedAProduction = "Your prodution in Shade A is " + ShedASum + " litres per week."
        let ShedBProduction = "Your prodution in Shade B is " + ShedBSum + " litres per week."
        let ShedCProduction = "Your prodution in Shade C is " + ShedCSum + " litres per week."
        let ShedDProduction = "Your prodution in Shade D is " + ShedDSum + " litres per week."
        let TotaMilkAmount = "Total amount of mil produced by all shades is " + TotalMilk + " litres per week."

        
        document.getElementById("total-production").innerHTML = "<p>"+ ShedAProduction +"<p>" + "<p>"+ 
            ShedBProduction +"<p>" + "<p>"+ ShedCProduction +"<p>"  + "<p>"+ ShedDProduction +"<p>"  + "<p>"+ TotaMilkAmount +"<p>"


}


const incomeOverTime = () => {
    sellling_price = document.getElementById("sellling_price").value;
    event.preventDefault();
    let TotalMilk = 0;

        ShedA = milkProductions[0]["ShadeA"]
        ShedASum = 0;
        for(shed_a = 0; shed_a < ShedA.length; shed_a++){
            ShedASum += ShedA[shed_a]

        }

        ShedB = milkProductions[1]["ShedB"];
        ShedBSum = 0;
        for(shed_b= 0; shed_b < ShedB.length; shede_b++){
            ShedBSum += ShedB[shed_b];

        }

        
        ShedC = milkProductions[2]["ShadeC"];
        ShedCSum = 0;
        for(shed_c= 0; shed_c< ShedC.length; shed_c++){
            ShedCSum += ShedC[shed_c];

        }

        ShedD = milkProductions[3]["ShadeD"];
        ShedDSum = 0;
        for(shed_d= 0; shed_d< ShedD.length; shed_d++){
            ShedDSum += ShedD[shed_d];

        }        

        TotalMilk = ShedASum + ShedBSum + ShedCSum + ShedDSum


    let totalMilkProduction =  TotalMilk * sellling_price
    document.getElementById("Sum").innerHTML = "Your weekly income will be ksh " + totalMilkProduction;
    // return totalMilkProduction;
}







