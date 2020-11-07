class game {

constructor(){

}

getState(){

var gamestateref = database.ref('gamestate');
gamestateref.on("value",function(data){

gamestate = data.val();

});

}

update(state){

database.ref('/').update({

gamestate : state

})

}

start(){

if(gamestate == 0){

player1 = new player();
player1.getCount();
form1 = new form ();
form1.display();

}

}

}