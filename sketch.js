var ball;
var database,position;
function setup(){
    database = firebase.database()
  createCanvas (500,500)  
    
    ball = createSprite(250,250,10,10)
    ball.shapeColor = "pink";

    var ballPosition = database.ref("ball/position");
    ballPosition.on("value",readPosition);

}

function draw(){
    background("blue")

    if(keyDown (LEFT_ARROW)){
        writePosition(-2,0);
    }

    if(keyDown (RIGHT_ARROW)){
        writePosition(2,0);
    }

    if(keyDown (UP_ARROW)){
        writePosition(0,-2);
    }

    if(keyDown (DOWN_ARROW)){
       writePosition(0,2);
    }

    drawSprites ();

}

function writePosition(x,y){
    database.ref("ball/position").set({
        'x':position.x+x,'y':position.y+y
    })
}


function readPosition(data){
    position = data.val()

    ball.x = position.x;
    ball.y = position.y;
}

