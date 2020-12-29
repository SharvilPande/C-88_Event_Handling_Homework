canvas = new fabric.Canvas('myCanvas');

x_position = 10;
y_position = 10;

block_height = 30;
block_width = 30;

player_object = "";
block_object = "";

function player_update() {
    fabric.Image.fromURL("iron_man.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(100);
        player_object.scaleToHeight(150);
        player_object.set({
            top: y_position,
            left: x_position
        })

       canvas.add(player_object);

    })
}

function new_block(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: y_position,
            left: x_position
        })

    canvas.add(block_object);

    })
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("shift and p pressed together");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("height").innerHTML = block_height;
        document.getElementById("width").innerHTML = block_width;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("shift and m pressed together");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '70') {
        new_block("thor_face.png");
        console.log("f");
    }

    if (keyPressed == '66') {
        new_block("hulk_body.png");
        console.log("b");
    }
    
    if (keyPressed == '83') {
        new_block("ironman_legs.png");
        console.log("s");
    }

    if (e.shiftKey == true && keyPressed == '82') {
        new_block("black_panther_left_hand.PNG");
        console.log("shift and r pressed together");
    }

    if (e.shiftKey == true && keyPressed == '76') {
        new_block("spiderman_right_hand.png");
        console.log("shift and l pressed together");
    }
}

function up() {
    if (y_position >= 0) {
       y_position = y_position - block_height;
       console.log("block height = " + block_height);
       console.log("When up key is pressed, " , "X = " + x_position + "," , "Y = " + y_position);
       canvas.remove(player_object);
       player_update(); 
    }
}

function down() {
    if (y_position <= 300) {
        y_position = y_position + block_height;
        console.log("block height = " + block_height);
        console.log("When down key is pressed, " , "X = " + x_position + "," , "Y = " + y_position);
        canvas.remove(player_object);
        player_update(); 
     }
    
}

function left() {
    if (x_position >= 0) {
        x_position = x_position - block_width;
        console.log("block width = " + block_width);
        console.log("When left key is pressed, " , "X = " + x_position + "," , "Y = " + y_position);
        canvas.remove(player_object);
        player_update(); 
     }
    
}

function right() {
    if (x_position <= 900) {
        x_position = x_position + block_width;
        console.log("block width = " + block_width);
        console.log("When right key is pressed, " , "X = " + x_position + "," , "Y = " + y_position);
        canvas.remove(player_object);
        player_update(); 
     }
    
}