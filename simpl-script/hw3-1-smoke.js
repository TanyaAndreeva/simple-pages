let age = prompt( 'Сколько лет?' );
let smoke = confirm( 'Куришь?' );
console.log(smoke);
if (age < 18 && !smoke){
    alert("Так держать!");
}
else if(age < 18 && smoke){
    alert("Маме расскажу");
}
else if(age >= 18 && !smoke){
    alert("Молодец, и не надо");
}
else if(age >= 18 && smoke){
    alert("Ну и зря");
}