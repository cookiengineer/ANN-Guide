
(function(global) {

	let _CANVAS  = null;
	let _CONTEXT = null;
	let _IMAGE   = null;


	(function() {

		let img = new Image();

		img.onload = function() {
			_IMAGE = this;
		};

		img.src = './source/Game.png';

	})();


	(function(document) {

		let canvas = document.querySelector('canvas');
		if (canvas === null) {
			canvas = document.createElement('canvas');
			canvas.width  = 800;
			canvas.height = 512;
		}


		if (canvas.parentNode === null) {

			document.addEventListener('DOMContentLoaded', function() {
				document.body.appendChild(canvas);
			}, true);

		}

		_CANVAS  = canvas;
		_CONTEXT = canvas.getContext('2d');

	})(global.document);


	const Game = function() {

		this.planes = [];
		this.goals  = [];
		this.fps    = 60;

		this.width      = _CANVAS.width;
		this.height     = _CANVAS.height;
		this.evolution  = null;
		this.population = [];

		this._has_ended  = false;
		this._background = 0;
		this._iterations = 0;
		this._info       = {
			alive:      0,
			generation: 0,
			highscore:  0,
			score:      0
		};
		this._randomizer = new Twister(1337);

	};


	Game.prototype = {

		setFPS: function(val) {

			val = typeof val === 'number' ? (val | 0) : 60;

			if (val > 0) {
				this.fps = val;
			}

		},

		start: function() {

			let evolution = this.evolution;
			if (evolution !== null) {

				this.planes = [];
				this.goals  = [];

				this.population = evolution.cycle();

				this.population.forEach(function(agent) {
					this.planes.push(new Plane());
				}.bind(this));

			} else {

				this.goals = [];

				this.planes.forEach(function(plane) {
					plane.x       = 80;
					plane.y       = 250;
					plane.gravity = 0;
					plane.alive   = true;
				});

			}


			this._info.alive = this.planes.length;
			this._info.score = 0;
			this._info.generation++;

			this._randomizer = new Twister(1337);

		},

		stop: function() {
			this._has_ended = true;
		},

		render: function() {

			let context = _CONTEXT;
			let info    = this._info;
			let planes  = this.planes;
			let goals   = this.goals;


			context.clearRect(0, 0, this.width, this.height);

			if (_IMAGE !== null) {

				let bg_width = _IMAGE.width;

				for (let b = 0; b < Math.ceil(this.width / bg_width) + 1; b++) {

					context.drawImage(
						_IMAGE,
						b * bg_width + Math.floor(this._background % bg_width),
						0
					);

				}

			}


			for (let g = 0, gl = goals.length; g < gl; g++) {

				let goal = goals[g];
				if (goal.alive === true) {
					goal.render(context);
				}

			}

			for (let p = 0, pl = planes.length; p < pl; p++) {

				let plane = planes[p];
				if (plane.alive === true) {
					plane.render(context);
				}

			}


			context.fillStyle = '#ffffff';
			context.font      = '20px "DejaVu Sans Mono", sans-serif';


			context.fillText('Score:      ' + info.score,      10, 25);
			context.fillText('High Score: ' + info.highscore,  10, 50);
			context.fillText('Generation: ' + info.generation, 10, 75);
			context.fillText('Agents:     ' + info.alive,      10, 100);


			if (this._has_ended === false) {

				requestAnimationFrame(function() {
					this.render();
				}.bind(this));

			}

		},

		update: function() {

			let info       = this._info;
			let planes     = this.planes;
			let goals      = this.goals;
			let evolution  = this.evolution;
			let population = this.population;


			let next_goal = 0;

			if (planes.length > 0 && goals.length > 0) {

				let agent = planes[0];
				let awh   = planes[0].width / 2;
				let gwh   = goals[0].width  / 2;

				for (let g = 0, gl = goals.length; g < gl; g++) {

					let goal = goals[g];
					if (agent.x > goal.x && agent.x - awh < goal.x + gwh) {
						next_goal = goal.y / this.height;
						break;
					} else if (agent.x < goal.x - gwh) {
						next_goal = goal.y / this.height;
						break;
					}

				}

			} else {

				next_goal = 0.5;

			}


			for (let p = 0, pl = planes.length; p < pl; p++) {

				let agent = population[p] || null;
				let plane = planes[p];

				if (plane.alive === true) {

					if (agent !== null) {

						let inputs = [ plane.y / this.height, next_goal ];
						let result = agent.compute(inputs);
						if (result > 0.5) {
							plane.jump();
						}

					}


					plane.update(this);


					if (plane.alive === false) {

						info.alive--;

						if (agent !== null) {
							agent.fitness = info.score;
						}

					}

				}

			}


			for (let g = 0, gl = goals.length; g < gl; g++) {

				let goal = goals[g];

				goal.update(this);

				if (goal.alive === false) {
					goals.splice(g, 1);
					gl--;
					g--;
				}

			}


			if (this._iterations === 0) {

				let border = 128;

				goals.push(new Goal({
					x: this.width,
					y: border + Math.round(this._randomizer.random() * (this.height - border * 2))
				}));

			}


			this._background -= 0.5;
			this._iterations++;


			if (this._iterations === 90) {
				this._iterations = 0;
			}


			if (info.alive === 0) {
				this.start();
			}


			info.score++;
			info.highscore = Math.max(info.score, info.highscore);


			if (this._has_ended === false) {

				setTimeout(function() {
					this.update();
				}.bind(this), 1000 / this.fps);

			}

		}

	};


	global.Game = Game;

})(this);

