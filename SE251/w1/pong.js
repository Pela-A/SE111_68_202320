var c = document.querySelector(`#pong`);
var ctx = c.getContext(`2d`);
var timer = setInterval(main,1000/60);

var scoreboard = document.querySelectorAll(`#score div`);
console.log(scoreboard)
//friction
var fy = .85

//Create player array and assign two Player objects to 0 and 1 index
var player = []
var pad = []
for(let i=0; i<2; i++){
    player[i] = new Player();
    player[i].pad = new Box();
    pad[i]= player[i].pad

    pad[i].w = 20
    pad[i].h = 150

}
pad[0].x = 0 + pad[0].w/2
pad[1].x = 800 - pad[1].w/2
pad[1].color = `green`



console.log(player)



var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx=-2
ball.vy=-2
ball.color = `white`
/*var pad[1] = new Box();
pad[1].w = 20
pad[1].h = 150
pad[1].x = 800 - pad[1].w/2*/


function main()
{
    ctx.clearRect(0,0,c.width,c.height)
    
    //if keyboard detects w key move up
    if(keys[`w`]){
        pad[0].vy += -pad[0].force
    }
    //if keyboard detects s key move down
    if(keys[`s`]){
        //wall y position add velocity y
        pad[0].vy += pad[0].force
    }

    //if keyboard detects ArrowUp key move up
    if(keys[`ArrowUp`]){
        pad[1].vy += -pad[1].force
    }
    //if keyboard detects ArrowDown key move down
    if(keys[`ArrowDown`]){
        //wall y position add velocity y
        pad[1].vy += pad[1].force
    }

    //multiply velocity by friction value to create terminal velocity feeling
    pad[0].vy *= fy
    pad[1].vy *= fy

    //move method called for all objects
    pad[0].move();
    pad[1].move();
    ball.move();
    
    //if wall y position less than 0+height of wall/2
    if(pad[0].y < 0+pad[0].h/2)
    {
        pad[0].y = 0+pad[0].h/2
    }

    //if player one y position greater than height of canvas minus half the height of player 1 (position of wall is center of wall)
    //essentially if the y position is 750 or 50 the wall is not able to move
    if(pad[0].y > c.height-pad[0].h/2)
    {
        pad[0].y = c.height-pad[0].h/2
    }

    //if wall y position less than 0+height of wall/2
    if(pad[1].y < 0+pad[1].h/2)
    {
        pad[1].y = 0+pad[1].h/2
    }
    //if player one y position greater than height of canvas minus half the height of player 1 (position of wall is center of wall)
    //essentially if the y position is 750 or 50 the wall is not able to move
    if(pad[1].y > c.height-pad[1].h/2)
    {
        pad[1].y = c.height-pad[1].h/2
    }


    //ball collision
    if(ball.collide(pad[0])){
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx
    }
    if(ball.collide(pad[1])){
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx
    }



    //reset ball to middle of canvas (ball exit left)
    if(ball.x < 0)
    {
        player[1].score ++
        ball.x = c.width/2
        ball.y = c.height/2
    }
    //ball exit right
    if(ball.x > 800)
    {
        player[0].score ++
        ball.x = c.width/2
        ball.y = c.height/2
    }
    console.log(`${player[0].score} | ${player[1].score}`)


    
    //if ball hits ceiling for floor it bounces

    if(ball.y < 0){
        ball.y=0
        ball.vy = -ball.vy
    }
    if(ball.y>c.height){

        ball.y=c.height
        ball.vy= -ball.vy
    }

    //draws ball and players
    pad[0].draw()
    pad[1].draw()
    ball.draw()

    for(let i=0; i<scoreboard.length; i++){
        scoreboard[i].innerText=player[i].score
    }
    

}