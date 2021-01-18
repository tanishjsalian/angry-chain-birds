class chain{
constructor(obj1,obj2){
    var options={
        bodyA: obj1,
        bodyB: obj2,
        length:10,
        stiffness:0.04
        }
        
         this.chain=Constraint.create(options)
        World.add(myworld,this.chain);
        

}
display(){
    strokeWeight(5)
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
  


}








}