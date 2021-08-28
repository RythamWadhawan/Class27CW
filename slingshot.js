class SlingShot {

constructor(Bird,Log){

    var options = {
        bodyA:Bird,
        bodyB:Log,
        stiffness:0.4,
        length:10
    }
    this.chain = Matter.Constraint.create(options)
    World.add(world,this.chain)



}
display(){

strokeWeight(3)
    line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)




}



}