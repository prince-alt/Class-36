var database,position;
var gamestate = 0;
var playercount,form1,game1,player1;

function setup(){

    database = firebase.database();

    createCanvas(500,500);

    game1 = new game();
    game1.getState();
    game1.start();
    

}

function draw(){
    background("white");
   
    drawSprites();
}

