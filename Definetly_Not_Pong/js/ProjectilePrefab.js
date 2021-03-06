var definatelyNotPong = definatelyNotPong || {};


definatelyNotPong.ProjectilePrefab = function(game,x,y,level){
	definatelyNotPong.ProjectilePrefab.speed = 600;
    this.speed = 600;
    
	if(x<100){
		Phaser.Sprite.call(this,game,x,y,"GreenLaser");
		this.game.physics.arcade.enable(this);
		this.body.velocity.x = this.speed;
		this.type = 0; //type 0 proyectil verde
	}
	else{
		Phaser.Sprite.call(this,game,x,y,"RedLaser");
		this.game.physics.arcade.enable(this);
		this.body.velocity.x = -this.speed;
		this.type = 1; //type 1 proyectil rojo
	}
	
	this.Alive = true;
	this.scale.setTo(2);
	this.anchor.setTo(.5);
	this.checkWorldBounds = true;
	this.outOfBoundsKill = true;
	this.level = level;
}

definatelyNotPong.ProjectilePrefab.prototype = Object.create(Phaser.Sprite.prototype);

definatelyNotPong.ProjectilePrefab.prototype.constructor = definatelyNotPong.ProjectilePrefab;

definatelyNotPong.ProjectilePrefab.prototype.update = function(){
	//COLISION ENTRE LOS PROYECTILES Y LA PELOTA.
	//AQUI SE CALCULA COMO REBOTA LA PELOTA
	this.game.physics.arcade.collide(this, this.level.ball, function(projectile, ball){
		var collisionVec = new Phaser.Point(ball.position.x - projectile.position.x, ball.position.y - projectile.position.y);
		collisionVec.normalize();
		ball.body.velocity.x = ball.body.velocity.x + collisionVec.x * 50;
		ball.body.velocity.y = ball.body.velocity.y + collisionVec.y * 250;
		projectile.kill();
		this.level.laserHit.play();
	},null, this);
}