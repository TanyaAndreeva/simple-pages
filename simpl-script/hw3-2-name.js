let name = prompt( 'Как тебя зовут?' );
let yearOfBirth = prompt( name + ',  Какого ты года рождения?' );
let date = (new Date()).getFullYear();
let years = date - yearOfBirth;
let yearsEnd;
if (years%10==1 && years!=11){
    yearsEnd = "год";
}
else if (years%10>1 && years%10<5){
    yearsEnd = "года";
}
else if (years<11 || years>14){
    yearsEnd = "лет";
}
alert(name + "  " + (years) + " " + yearsEnd); 