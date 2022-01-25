let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x:8 * box, 
    y:8 * box
}
let diretion = "right";


function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box,16 * box);
}

function snakeCreator(){
    for( i= 0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y,box,box);

    }

}

function startGame(){
    criarBG();
    snakeCreator();
    let snakeX = snake[0].x;
    let snakeY = snakeY[0].y;

    if (diretion == "right") snakeX += box;
    if (diretion == "left") snakeX -= box;
    if (diretion == "up") snakeY -= box;
    if (diretion == "down") snakey += box;


    snake.pop();

    let newHead = {
        x:snakeX,
        y:snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame , 100);


