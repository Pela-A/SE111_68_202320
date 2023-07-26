class Box
{
    constructor()
    {
        //position
        this.x = c.width/2
        this.y = c.height/2
        //dimension of object
        this.w = 100;
        this.h = 100;
        this.color = `hotpink`
        this.vx = 0
        this.vy = 0
        this.force=2
    }
    draw()
    {
        ctx.save()
            ctx.translate(this.x,this.y)
            ctx.fillStyle = this.color
            ctx.fillRect(0-this.w/2, 0-this.h/2,this.w,this.h)
        ctx.restore()
    }

    move()
    {
        this.x += this.vx
        this.y += this.vy
    }

    //left of object
    left(){return this.x-this.w/2}
    //right of object
    right(){return this.x+this.w/2}
    //top of object
    top(){return this.y-this.h/2}
    //bottom of object
    bottom(){return this.y+this.h/2}

    collide(obj)
    {

        //if right of ball greater than left of wall
        //if left of ball less than right of wall
        //if bottom of ball greater than top of wall
        //if top of ball less than bottom of wall
        if( this.right() > obj.left() && 
        this.left() < obj.right() && 
        this.bottom() > obj.top()&&
        this.top() < obj.bottom()  ){
            return true
        }
        
            
        return false

    }
    

}