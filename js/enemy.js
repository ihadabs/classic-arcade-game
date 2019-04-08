function Enemy(x, y, speed) {
	this.sprite = 'images/enemy-bug.png'
	this.x = x
	this.y = y
	this.speed = speed
}

Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

Enemy.prototype.update = function() {
	if (this.x > 550) {
		this.x = -100
	} else {
		this.x += 1 * this.speed
	}
}

Enemy.prototype.didCollide = function(player) {
	if (checkCollision(player.x, player.y, this.x, this.y)) {
		player.reset()
	}
}

function checkCollision(playerX, playerY, enemyX, enemyY) {
	return (
		playerX >= enemyX - 55 &&
		playerX <= enemyX + 55 &&
		(playerY >= enemyY - 41 && playerY <= enemyY + 41)
	)
}

var allEnemies = [
	new Enemy(375, 60, 1.5),
	new Enemy(-150, 145, 1),
	new Enemy(150, 145, 1),
	new Enemy(250, 225, 2)
]
