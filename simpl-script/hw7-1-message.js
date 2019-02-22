function delay(func, time, arg) { 
    setTimeout(func, time, arg);
 }
function mymessage(arg) {
    console.log('Message: ' + arg);
}

function superFunc(arg){
    delay(mymessage, 2000,arg);
}

superFunc('Привет'); // сообщение отобразится через 2 секунды

