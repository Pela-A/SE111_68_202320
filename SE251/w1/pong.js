var c = document.querySelector(`#pong`);
var ctx = c.getContext(`2d`);
var timer = setInterval(main,1000/60);

//friction
var fy = .85

//Create player array and assign two Player objects to 0 and 1 index
var player = []
for(let i=0; i<2; i++){
    player[i] = new Player();
    player[i].pad = new Box();
    player[i].pad.w = 20
    player[i].pad.h = 150

}
player[0].pad.x = 0 + player[0].pad.w/2
player[1].pad.x = 800 - player[1].pad.w/2
player[1].pad.color = `blue`



console.log(player)



var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx=-2
ball.vy=-2
ball.color = `white`
/*var player[1].pad = new Box();
player[1].pad.w = 20
player[1].pad.h = 150
player[1].pad.x = 800 - player[1].pad.w/2*/


function main()
{
    ctx.clearRect(0,0,c.width,c.height)
    
    //if keyboard detects w key move up
    if(keys[`w`]){
        player[0].pad.vy += -player[0].pad.force
    }
    //if keyboard detects s key move down
    if(keys[`s`]){
        //wall y position add velocity y
        player[0].pad.vy += player[0].pad.force
    }

    //if keyboard detects ArrowUp key move up
    if(keys[`ArrowUp`]){
        player[1].pad.vy += -player[1].pad.force
    }
    //if keyboard detects ArrowDown key move down
    if(keys[`ArrowDown`]){
        //wall y position add velocity y
        player[1].pad.vy += player[1].pad.force
    }

    //multiply velocity by friction value to create terminal velocity feeling
    player[0].pad.vy *= fy
    player[1].pad.vy *= fy

    //move method called for all objects
    player[0].pad.move();
    player[1].pad.move();
    ball.move();
    
    //if wall y position less than 0+height of wall/2
    if(player[0].pad.y < 0+player[0].pad.h/2)
    {
        player[0].pad.y = 0+player[0].pad.h/2
    }

    //if player one y position greater than height of canvas minus half the height of player 1 (position of wall is center of wall)
    //essentially if the y position is 750 or 50 the wall is not able to move
    if(player[0].pad.y > c.height-player[0].pad.h/2)
    {
        player[0].pad.y = c.height-player[0].pad.h/2
    }

    if(player[1].pad.y < 0+player[1].pad.h/2)
    {
        player[1].pad.y = 0+player[1].pad.h/2
    }
    if(player[1].pad.y > c.height-player[1].pad.h/2)
    {
        player[1].pad.y = c.height-player[1].pad.h/2
    }


    //ball collision
    if(ball.collide(player[0].pad)){
        ball.x = player[0].pad.x + player[0].pad.w/2 + ball.w/2
        ball.vx = -ball.vx
    }
    if(ball.collide(player[1].pad)){
        ball.x = player[1].pad.x - player[1].pad.w/2 - ball.w/2
        ball.vx = -ball.vx
    }



    //reset ball to middle of canvas
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if(ball.x > 800)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }


    
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
    player[0].pad.draw()
    player[1].pad.draw()
    ball.draw()
    

}