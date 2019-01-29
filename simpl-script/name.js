let name = prompt( 'Как тебя зовут?' );
let yearOfBirth = prompt( 'Какого ты года рождения?' );
let date = (new Date()).getFullYear();
alert(name + "  " + (date - yearOfBirth));