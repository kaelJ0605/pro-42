class Drop {
    constructor (x, y) {
        // ações
        this.x = x;
        this.y = y;
        this.rain = Bodies.circle(this.x, this.y, 5);
        this.raio = 5;
        World.add(world, this.rain);
    }

    updateY () {
       if(this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain,{x:random(0, 400),y:random(0,700) });
       } 
    }

    display() {
        fill("blue")
        ellipseMode(CENTER); 
        ellipse(this.rain.position.x, this.rain.position.y, this.raio, this.raio);
    }
}