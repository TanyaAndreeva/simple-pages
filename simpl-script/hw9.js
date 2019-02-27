
var game = false;

document.addEventListener('DOMContentLoaded', function () {
    var d1 = document.getElementById('count');
    d1.addEventListener('input', checkNumberInput());

    var d3 = document.getElementById('start');
    d3.addEventListener('click', add);

    document.addEventListener('mousemove', onMouseMove);
});

function changeColor(){
    if(this.tagName == 'DIV' && this.style.backgroundColor != "green"){
        
        this.style.backgroundColor = "green";
    }
}


function onMouseMove(e) {
    let colorList = [];
    if(game){
        heavy(e);

        squareList = document.getElementsByTagName("div");
        for (element of squareList) {
            colorList.push(element.style.backgroundColor)
        }

        if (!colorList.includes("red")) {
            game = false;
            alert("Конец игры!");
            const countInput = document.getElementById('count');
            countInput.value = '';
            squareList1 = document.getElementsByTagName("div");
            while(document.getElementsByTagName("div").length > 0 ){
                document.body.removeChild(document.getElementsByTagName("div")[0]);
            }
        }
    }
}

function heavy(e) {
    var s1;
    s1 = document.getElementById('s1');
  
    s1.style.left = (e.clientX - 10) + 'px';
    s1.style.top = (e.clientY - 10) + 'px';
}

function checkNumberInput() {
    document.getElementsByTagName('input')[0].onkeypress = function (e) {

        e = e || event;

        if (e.ctrlKey || e.altKey || e.metaKey) {
            check = true;
            return;
        }

        var chr = getChar(e);

        if (chr == null) {
            check = true;
            return;
        }

        if (chr < '0' || chr > '9') {
            check = true;
            return false;
        }
    }
}

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) 
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) 
    }

    return null; 
}

function square() {
    var firstDiv = document.createElement('div');
    firstDiv.style.width = "10px";
    firstDiv.style.height = "10px";
    firstDiv.style.marginTop = "10px";
    firstDiv.style.marginLeft = "20px";
    firstDiv.style.backgroundColor = "red";
    firstDiv.style.position = "absolute";
    return firstDiv;
}

function checkInput() {
    input = document.getElementById('count');
    if (input.value < 0 || input.value > 100) {
        alert('Ошибка: введенное значение должно быть от 1 до 100!');
        input.value = "";
        return false;
    }
    return true;
}


function add() {
    if (checkInput()) {
        addFirst();
        
        input = document.getElementById('count');
        count = input.value-1;
        for (i = 0; i < count; i++) {
            var divs = document.getElementsByTagName('div');
            var div = divs[divs.length - 1];
            var newdiv = square();
            newdiv.style.left = parseInt(div.style.left) + 15 + 'px';
            newdiv.style.top = "30px";
            document.body.appendChild(newdiv);
        }
        addBlack();
        game = true;

        var d4List = document.getElementsByTagName('div');
        for (element of d4List) {
            element.addEventListener('mouseenter', changeColor);
        }
    }
}

function addFirst() {
    var div = square();
    div.style.left = "10px";
    div.style.top = "30px";
    document.body.appendChild(div);
}

function addBlack() {
    var div = square();
    div.style.left = "10px";
    div.style.top = "30px";
    div.id = "s1";
    div.style.backgroundColor = "black";
    document.body.appendChild(div);
}
