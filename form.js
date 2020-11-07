class form {

constructor(){

}

display(){

var title = createElement('h2');
title.html("CAR RACING GAME");
title.position(130,0);

var input = createInput("NAME");

var button = createButton('PLAY');

var greeting = createElement('h3');

input.position(130,160);
button.position(250,200);

button.mousePressed(function(){

input.hide();
button.hide();

var name = input.value();

playercount+=1;

player1.update(name);
player1.updatecount(playercount);

greeting.html("HELLO"+name);
greeting.position(130,160);

})

}

}