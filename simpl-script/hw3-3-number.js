let number = prompt( 'Напишите число' );
number = rev_num(number);
alert(number); 

function rev_num(num) {
    return Number(num.toString().split('').reverse().join(''));
}