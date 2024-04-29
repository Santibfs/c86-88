var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_img_width = 30;
block_img_height = 30;

var player_object = "";
var block_img_object ="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if((e.shiftKey == true)&&(keyPressed == '80')){
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML =block_img_height;
    }

    if((e.shiftKey == true)&&(keyPressed == '77')){
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(keyPressed == '37'){
        izq();
        console.log("izq");
    }
    if(keyPressed == '38'){
        arriba();
        console.log("arriba");
    }
    if(keyPressed == '39'){
        derecha();
        console.log("derecha");
    }
    if(keyPressed == '40'){
        Abajo();
        console.log("Abajo");
    }

    if(keyPressed == '88'){
        console.log("x");
        new_image('madera.jpg');

    }
    if(keyPressed == '86'){
        console.log("v");
        new_image('verdeoscuro.png');
    }
    if(keyPressed == '76'){
        console.log("l");
        new_image('verdeclaro.png');
    }
    if(keyPressed == '90'){
        console.log("z");
        new_image('pasto.png');
    }
    if(keyPressed == '82'){
        console.log("r");
        new_image('ladrillorojo.jpg');
    }
    if(keyPressed == '65'){
        console.log("a");
        new_image('ladrilloamarillo.png');
    }
    if(keyPressed == '68'){
        console.log("d");
        new_image('luminoso.png');
    }
    if(keyPressed == '84'){
        console.log("t");
        new_image('techo.jpg');
    }
    if(keyPressed == '192'){
        console.log("ñ");
        new_image('piedra.jpg');
    }
    
    }

    function izq(){
        if(player_x > 0){
           player_x = player_x - block_img_width;
           canvas.remove(player_object);
           player_update();
        }
    }

    function arriba(){
        if(player_y > 0){
            player_y = player_y - block_img_height;
            canvas.remove(player_object);
            player_update();
         }
    }

    function derecha(){
        if(player_x < 850){
            player_x = player_x + block_img_width;
            canvas.remove(player_object);
            player_update();
         }
    }

    function abajo(){
        if(player_y > 500){
            player_y = player_y + block_img_height;
            canvas.remove(player_object);
            player_update();
         }
    }

