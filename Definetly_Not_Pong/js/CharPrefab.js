var definatelyNotPong = definatelyNotPong || {};

definatelyNotPong.CharPrefab = function(game,x,y,level){

	if(x<100){
	Phaser.Sprite.call(this,game,x,y,"Nave");
    
    }
    else{
        Phaser.Sprite.call(this,game,x,y,"Nave2");
        
    }
    this.dashing=false;
    this.scale.setTo(.3);
    this.anchor.setTo(.5);
	this.game.physics.arcade.enable(this);
    this.level = level;
    this.Alive = true;
    this.velocity=100;
    this.dashCoolDown=true;
    this.powerUp;
}


definatelyNotPong.CharPrefab.prototype = Object.create(Phaser.Sprite.prototype);

definatelyNotPong.CharPrefab.prototype.constructor = definatelyNotPong.CharPrefab;

definatelyNotPong.CharPrefab.prototype.update = function(){
        /*this.game.physics.arcade.overlap(this,,
        function(){
                        
                    
        } );*/
}


definatelyNotPong.CharPrefab.SetNotDashing = function(aPlayer){
    aPlayer.dashing=false;
}

definatelyNotPong.CharPrefab.ResetCoolDownDash = function(aPlayer){
    aPlayer.dashCoolDown=true;
}