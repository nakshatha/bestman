class drops{
    constructor(x,y){
        var options={
            friction=0.1
        }
    this.rain=boides.circle(x,y,5,options)
    }
    update(){
        if(this.rain.position.y > height){
            Matter.body.setPosition(this.rain,{x:Random(0,40),y:random(o0,400)})
        }
    }
    drawellipse(){

    }
    
}