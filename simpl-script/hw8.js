
document.addEventListener('DOMContentLoaded', function() {
    d1 = document.getElementById('color');
    d1.addEventListener('click', changeColor);

    d2 = document.getElementById('left');
    d2.addEventListener('click', changeLeft);

    d3 = document.getElementById('right');
    d3.addEventListener('click', changeRight);

    d4 = document.getElementById('down');
    d4.addEventListener('click', changeDown);

    d5 = document.getElementById('up');
    d5.addEventListener('click', changeUp);

    d6 = document.getElementById('add');
    d6.addEventListener('click', add);

    addFirst();
});

function square (){
    var firstDiv = document.createElement('div');
    firstDiv.style.width="100px";
    firstDiv.style.height="100px";
    firstDiv.style.marginTop = "10px";
    firstDiv.style.marginLeft = "20px";
    firstDiv.style.backgroundColor="red";
    firstDiv.style.position = "absolute";
    return firstDiv;
}

function add() {
    var divs = document.getElementsByTagName('div');
    var div = divs[divs.length-1];
    var newdiv = square();
    newdiv.style.left = parseInt(div.style.left)+120+'px';
    newdiv.style.top = "30px";
   document.body.appendChild(newdiv);
}

function addFirst() {
    var div = square();
    div.style.left = "10px";
    div.style.top = "30px";
   document.body.appendChild(div);
}

function changeColor() {
    element = document.getElementById('new-color');
    d1 = element.value;
    allDivs = document.getElementsByTagName('div');
    for(i=0; i < allDivs.length; i++)  {
        allDivs[i].style.backgroundColor=d1;
    }
    element.value = "";
}

function changeLeft(){
    var element;
    element = document.getElementsByTagName('div');
  
    for(i=0; i < element.length; i++)  {
        var element1;
        element1 = element[i];
        element1.style.left=parseInt(element1.style.left)-20+'px';
        element1.style.position = "absolute";
    }
}

function changeRight(){
    var element;
    element = document.getElementsByTagName('div');
  
    for(i=0; i < element.length; i++)  {
        var element1;
        element1 = element[i];
        element1.style.left=parseInt(element1.style.left)+20+'px';
        element1.style.position = "absolute";
    }
}

function changeUp(){
    var element;
    element = document.getElementsByTagName('div');
  
    for(i=0; i < element.length; i++)  {
        var element1;
        element1 = element[i];
        element1.style.top=parseInt(element1.style.top)-20+'px';
        element1.style.position = "absolute";
    }
}

function changeDown(){
    var element;
    element = document.getElementsByTagName('div');
  
    for(i=0; i < element.length; i++)  {
        var element1;
        element1 = element[i];
        element1.style.top=parseInt(element1.style.top)+20+'px';
        element1.style.position = "absolute";
    }
}

