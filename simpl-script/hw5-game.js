var field = ['-', '-', '-', '-', '-', '-', '-', '-', '-']; 
let crosses = 'крестики';
let toe = 'нолики';
var a = 'X', b = 'O';

function gameStart() {
    var win = 1; 
    let coordinates;
    let currentPerson;
    printField();
    currentPerson = a;
    while(win){
        coordinates = prompt( `Ходят ${getWho(currentPerson)}! Введите координаты ячейки поля для хода (верхний левый - 1,1; нижний правый - 3,3)` );
        addMove(currentPerson, coordinates);
        printField(field);
        if (isWinner(currentPerson)){
            console.log('*************WIN*****************');
            console.log('Победили ' + getWho(currentPerson));
            win = 0;
            again();
        }
        if(currentPerson == a){
            currentPerson = b;
        }
        else{
            currentPerson = a;
        }
    }    
}

function printField(){
    console.log(field[0] + field[1] + field[2] + "\n" + field[3] + field[4] + field[5] + "\n" + field[6] + field[7] + field[8]);
}

function clearField(){
    console.clear();
}

function getWho(whoMove){
    if(whoMove==a){return crosses;}
    else{return toe;}
}

function isWinner(who){
    if (field[0]==who && field[1]==who && field[2]==who) return true; 
    if (field[3]==who && field[4]==who && field[5]==who) return true; 
    if (field[6]==who && field[7]==who && field[8]==who) return true; 
    if (field[0]==who && field[3]==who && field[6]==who) return true; 
    if (field[1]==who && field[4]==who && field[7]==who) return true; 
    if (field[2]==who && field[5]==who && field[8]==who) return true; 
    if (field[0]==who && field[4]==who && field[8]==who) return true; 
    if (field[2]==who && field[4]==who && field[6]==who) return true; 
    return false; 
}

function addMove(who, coordinates){
    let line, index;
    line = coordinates.charAt(0);
    index = coordinates.charAt(2);
    if(line==1){ field[+index-1] = who;}
    else if(line==2){ field[+index+2] = who;}
    else if(line==3) {field[+index+5] = who;}
} 

function again(){
    result = confirm("Играть еще раз?");
    console.clear();
    field = ['-', '-', '-', '-', '-', '-', '-', '-', '-']; 
    if(result) gameStart();
}
