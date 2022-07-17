

function process() {
    var name = String(document.form.InputName.value);
    var a = Number(document.form.InputA.value);


    var name = String(document.form.InputName.value);
    var b = Number(document.form.InputB.value);

    var name = String(document.form.InputName.value);
    var c = Number(document.form.InputC.value);

    var name = String(document.form.InputName.value);
    var d = Number(document.form.InputD.value);

    document.getElementById('output1').innerHTML = "your production in shed A " +
        name + " " + a + "litres per day ";
    document.getElementById('output2').innerHTML = "your production in shed B" +
        name + " " + b + "litres per day ";
    document.getElementById('output3').innerHTML = "your production in shed C" +
        name + " " + c + "litres per day ";
    document.getElementById('output4').innerHTML = "your production in shed D" +
        name + " " + d + "litres per day ";

    var x = a + b + c + d;
    document.getElementById('output').innerHTML = "your total production in all sheds is " +
        name + " " + x + "litres";
}

var a, b, c, d, x;

a.forEach(function (entry) {
    console.log(entry);
});

(function () {
       let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       var month_selected = (new Date).getMonth(); // current month
       var option = '';
       option = '<option>Month</option>'; // first option

       for (let i = 0; i < months.length; i++) {
         let month_number = (i + 1);

         // value month number with 0. [01 02 03 04..]
         let month = (month_number <= 9) ? '0' + month_number : month_number;

         // or value month number. [1 2 3 4..]
         // let month = month_number;

         // or value month names. [January February]
         // let month = months[i];

         let selected = (i === month_selected ? ' selected' : '');
         option += '<option value="' + month + '"' + selected + '>' + months[i] + '</option>';
       }
       document.getElementById("month").innerHTML = option;
       document.getElementById("month1").innerHTML = option;
       document.getElementById("month2").innerHTML = option;
       document.getElementById("month3").innerHTML = option;
     })();



