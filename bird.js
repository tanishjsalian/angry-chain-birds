class bird extends parent{

    constructor(x,y,w,h){
           super(x,y,w,h);
           this.image=loadImage("sprites/bird.png")
    }
    display(){
 

       push()
       this.body.position.x=mouseX
       this.body.position.y=mouseY
       super.display();
        pop()

}
}