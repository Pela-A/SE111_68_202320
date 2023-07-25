var c = document.querySelector(`#pong`);
var ctx = c.getContext(`2d`);
var timer = setInterval(main,1000/60);

//friction
var fy = .85

var p1 = new Box();
p1.w = 20
p1.h = 150
p1.x = 0 + p1.w/2

var p2 = new Box();
p2.w = 20
p2.h = 150
p2.x = c.width - p2.w/2
p2.color = `blue`

var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx=-2
ball.vy=-2
ball.color = `white`
/*var p2 = new Box();
p2.w = 20
p2.h = 150
p2.x = 800 - p2.w/2*/


function main()
{
    ctx.clearRect(0,0,c.width,c.height)
    
    //if keyboard detects w key move up
    if(keys[`w`]){
        p1.vy += -p1.force
    }
    //if keyboard detects s key move down
    if(keys[`s`]){
        //wall y position add velocity y
        p1.vy += p1.force
    }

    //if keyboard detects ArrowUp key move up
    if(keys[`ArrowUp`]){
        p2.vy += -p2.force
    }
    //if keyboard detects ArrowDown key move down
    if(keys[`ArrowDown`]){
        //wall y position add velocity y
        p2.vy += p2.force
    }

    //multiply velocity by friction value to create terminal velocity feeling
    p1.vy *= fy
    p2.vy *= fy

    //move method called for all objects
    p1.move();
    p2.move();
    ball.move();
    
    //if wall y position less than 0+height of wall/2
    if(p1.y < 0+p1.h/2)
    {
        p1.y = 0+p1.h/2
    }

    //if player one y position greater than height of canvas minus half the height of player 1 (position of wall is center of wall)
    //essentially if the y position is 750 or 50 the wall is not able to move
    if(p1.y > c.height-p1.h/2)
    {
        p1.y = c.height-p1.h/2
    }

    if(p2.y < 0+p2.h/2)
    {
        p2.y = 0+p2.h/2
    }
    if(p2.y > c.height-p2.h/2)
    {
        p2.y = c.height-p2.h/2
    }


    //ball collision
    if(ball.collide(p1)){
        ball.x = p1.x + p1.w/2 + ball.w/2
        ball.vx = -ball.vx
    }
    if(ball.collide(p2)){
        ball.x = p2.x - p2.w/2 - ball.w/2
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
    p1.draw()
    p2.draw()
    ball.draw()
    

}