
setTimeout(countTags, 2000); 
var obj = new Array();

function countTags(collection, stats) {
  
    calculate(collection, stats);
    printField();
}

function printField(){
    var text = "";
    for(x=0; x < obj.length; x++)  {
        text = text + obj[x][0] +": "+ obj[x][1] + "\n";
    }
    console.log(text);
}


function calculate(collection, stats){
    var item,index,tagname;
debugger;
    for (var i = 0; i < collection.length; i++) {
        item = collection[i];
        tagname = item.tagName;
        index = obj.length;
        var posichion;
        var isIncludes=false;
        for (var i = 0; i < index; i++) {
            if(obj[i].includes(tagname)){
                isIncludes=true;
                posichion = i;
                break;
            }
        }
        if(!isIncludes) {
            obj[index] = new Array();
            obj[index][0] = tagname;
            obj[index][1] = 0;
        }else { 
            obj[posichion][1] = +obj[posichion][1]++;
        }

        if(item.children.length > 0){
            calculate(item.children, stats);
        }
    }
}

countTags(document.body.children, obj);


