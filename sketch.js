var database ;
var gameState =0;
var playerCount;

var form,player,game
function setup(){
    database=firebase.database();
    

    createCanvas(500,500);
game = new Game()  
game.getState();
game.start();
}

function draw(){
    
}

/*function writePosition(x,y){
   database.ref('ball/position').set({
       'x': position.x+x,
       'y':position.y+y

   })
    
}                         

function readOp(data){
position=data.val() 
ball.x=position.x;
ball.y=position.y
}*/
