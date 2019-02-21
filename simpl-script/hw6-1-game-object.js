var game = {
    field: new Array() ,
    crosses: 'крестики',
    toe: 'нолики',
    a: 'X', b: 'O',

    init:function(size){
        var win = 1; 
        let coordinates;
        let currentPerson;
        this.firstEntrField(size);
        this.printField(size);
        this.entrField(size);
        currentPerson = this.a;
        while(win){
            coordinates = prompt( `Ходят ${this.getWho(currentPerson)}! Введите координаты ячейки поля для хода (верхний левый - 1,1; нижний правый - 3,3)` );
            this.addMove(currentPerson, coordinates);
            this.printField(size);
            if (this.isWinner(coordinates, currentPerson, size)){
                console.log('*************WIN*****************');
                console.log('Победили ' + this.getWho(currentPerson));
                win = 0;
                this.again();
            }
            if(currentPerson == this.a){
                currentPerson = this.b;
            }
            else{
                currentPerson = this.a;
            }
        }    
    },

    entrField: function(size){
        for(x=0; x<size; x++)  {
            for(y=0; y<size; y++){
                this.field[x][y]= "-"; 
            }
        }
    }, 

    firstEntrField: function(size){
       // this.field = new Array();
        for(x=0; x<size; x++)  {
            this.field[x] = new Array();
            for(y=0; y<size; y++){
                this.field[x][y] = " "+ (x+1) + '.' + (y+1) + " "; 
            }
        }
    }, 

    printField: function(size){
        console.log('===================================================================');
        var text = "";
        for(x=0; x<size; x++)  {
            for(y=0; y<size; y++){
                if(y == (size-1)){
                    text = text + this.field[x][y] + "\n";
                }
                else{
                    text = text + this.field[x][y];
                }
            }
        }
        console.log(text);
    }, 

    clearField: function(){
        console.clear();
    },
    
    getWho: function(whoMove){
        if(whoMove==this.a){return this.crosses;}
        else{return this.toe;}
    },
    
    isWinner: function(coordinates, who, size){
        let y, x;
        var arr = coordinates.split('.');
        y = yleft = yright = yHL = yHR = yDL = yDR = +arr[0]-1;
        x = xleft = xright = xHL = xHR = xDL = xDR = +arr[1]-1;
        let line = 0;

        //горизонталь
        while ((--xleft >= 0) && (this.field[y][xleft] == who)) {
            line++;
        }
        //if(line == 1)line = 0;
        while ((++xright < size) && (this.field[y][xright] == who)) {
            line++;
        }
        if(line == 2)return true;

        //вертикаль
        line = 0;
        while ((--yleft >= 0) && (this.field[yleft][x] == who)) {
            line++;
        }
        while ((++yright < size) && (this.field[yright][x] == who)) {
            line++;
        }
        if(line == 2)return true;
      
        //диагональ правая
        line = 0;
        while ((--xHL >= 0) && (--yHL >= 0) && (this.field[yHL][xHL] == who)) {
            line++;
        }
        while ((++xDR < size) && (++yDR < size) && (this.field[yDR][xDR] == who)) {
            line++;
        }
        if(line == 2)return true;

         //диагональ левая
         line = 0;
         while ((--xHR >= 0) && (++yDL < size) && (this.field[yDL][xHR] == who)) {
             line++;
         }
         while ((++xDL < size) && (--yHR >= 0) && (this.field[yHR][xDL] == who)) {
             line++;
         }
         if(line == 2)return true;
    },
    
    addMove: function(who, coordinates){
        let line, index;
        line = +coordinates.charAt(0)-1;
        index = +coordinates.charAt(2)-1;
        if(this.field[line][index] == '-'){
            this.field[line][index] = who;
        }
    }, 
    
    again: function(){
        result = confirm("Играть еще раз?");
        console.clear();
        this.entrField();
        if(result) this.init();
    }
}







