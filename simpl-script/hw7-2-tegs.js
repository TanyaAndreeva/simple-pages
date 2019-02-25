
setTimeout(countTags, 2000); 
var obj = new Array();
var objL = 0;

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
    var item,tagname;

    for (var i = 0; i < collection.length; i++) {
        item = collection[i];
        tagname = item.tagName;
        
        var posichion;
        var isIncludes=false;
        for (var ii = 0; ii < objL; ii++) {
            let newtag = obj[ii][0];
            if(newtag == tagname){
                isIncludes=true;
                posichion = ii;
                break;
            }
        }
        if(!isIncludes) {
            obj[objL] = new Array();
            obj[objL][0] = tagname;
            obj[objL][1] = 0;
            objL++;
        }else { 
            var count = obj[posichion][1] + 1;
            obj[posichion][1] = count;
        }

        if(item.children.length > 0){
            calculate(item.children, stats);
        }
    }
}

countTags(document.body.children, obj);


