class Chain{
    constructor(bodyA,bodyB){
        var options ={
            length : 70,
            stiffness : 0.5,
            bodyA : bodyA,
            bodyB : bodyB
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain)

    }
        display(){
            var posA = this.chain.bodyA.position
            var posB = this.chain.bodyB.position
            strokeWeight(5)
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }
