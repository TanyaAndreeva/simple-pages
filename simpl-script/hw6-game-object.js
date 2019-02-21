var game = {
    field: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ] ,
    crosses: 'крестики',
    toe: 'нолики',
    a: 'X', b: 'O',

    init:function(){
        var win = 1; 
        let coordinates;
        let currentPerson;
        this.firstEntrField();
        this.printField();
        this.entrField();
        currentPerson = this.a;
        while(win){
            coordinates = prompt( `Ходят ${this.getWho(currentPerson)}! Введите координаты ячейки поля для хода (верхний левый - 1,1; нижний правый - 3,3)` );
            this.addMove(currentPerson, coordinates);
            this.printField(this.field);
            if (this.isWinner()){
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

    entrField: function(){
        for(i=0; i<3; i++)  {
           this.field[i][0]= "-"; 
           this.field[i][1]= "-"; 
           this.field[i][2]= "-"; 
        }
    }, 

    firstEntrField: function(){
        for(i=0; i<3; i++)  {
           this.field[i][0]= " "+ (i+1) + '.' + 1 + " "; 
           this.field[i][1]= " "+ (i+1) + '.' + 2 + " "; 
           this.field[i][2]= " "+ (i+1) + '.' + 3 + " "; 
        }
    }, 

    printField: function(){
        console.log('===================================================================');
        for(i=0; i<3; i++)  {
            console.log((i+1) + '  ' + this.field[i][0] + this.field[i][1] + this.field[i][2] + "\n" );
        }
    }, 

    clearField: function(){
        console.clear();
    },
    
    getWho: function(whoMove){
        if(whoMove==this.a){return this.crosses;}
        else{return this.toe;}
    },
    
    isWinner: function(){
        for(i=0; i<3; i++)  /* проверка строк */
        if(this.field[i][0]==this.field[i][1] &&
            this.field[i][0]==this.field[i][2] && this.field[i][0] != "-") return true;
    
      for(i=0; i<3; i++)  /* проверка столбцов */
        if(this.field[0][i]==this.field[1][i] &&
            this.field[0][i]==this.field[2][i] && this.field[0][i] != '-') return true;
    
      /* проверка диагоналей */
      if(this.field[0][0]==this.field[1][1] &&
        this.field[1][1]==this.field[2][2] && this.field[0][0] != '-')
           return true;
    
      if(this.field[0][2]==this.field[1][1] &&
        this.field[1][1]==this.field[2][0] && this.field[0][2] != '-')
           return true;
        return false; 
    },
    
    addMove: function(who, coordinates){
        let line, index;
        line = +coordinates.charAt(0)-1;
        index = +coordinates.charAt(2)-1;
        console.log(line + ' - ' + index);
        this.field[line][index] = who;
    }, 
    
    again: function(){
        result = confirm("Играть еще раз?");
        console.clear();
        this.entrField();
        if(result) this.init();
    }
}







