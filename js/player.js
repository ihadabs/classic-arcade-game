function Player() {
	this.sprite = 'images/char-boy.png'
	this.x = 202
	this.y = 404
}

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}

Player.prototype.handleInput = function(key) {
	const verticalMove = 83
	const horizontalMove = 101

	switch (key) {
	case 'left': {
		if (this.x >= 101) this.x -= horizontalMove
		break
	}

	case 'up': {
		if (this.y > 72) this.y -= verticalMove
		else this.reset()
		break
	}

	case 'right': {
		if (this.x < 404) this.x += horizontalMove
		break
	}

	case 'down': {
		if (this.y < 404) this.y += verticalMove
		break
	}
	}
}

Player.prototype.reset = function() {
	this.x = 202
	this.y = 404
}

var player = new Player()
