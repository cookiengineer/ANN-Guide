
// agent.compute() aka network.compute()
// evolution.nextGeneration() => [ agent ];
// evolution.networkScore(agent, this.score);
//

(function(global) {

	const _GENERATIONS = [];


	const Evolution = function(data) {

		this.settings = Object.assign({
			history:     2,
			network:    [2, [2], 1],
			population: 64
		}, data);

	};


	Evolution.prototype = {

		cycle: function() {

			let population   = [];
			let s_history    = this.settings.history;
			let s_network    = this.settings.network;
			let s_population = this.settings.population;


			if (_GENERATIONS.length === 0) {

				// nn.perceptronGeneration(s_network);
				// population.push(nn.getSave())
				for (let p = 0; p < s_population; p++) {

					population.push(new Agent({
						network: s_network
					}));

				}

			} else {

				let current = _GENERATIONS[_GENERATIONS.length - 1];

				current.sort(function(agent_a, agent_b) {
					if (agent_a.fitness > agent_b.fitness) return -1;
					if (agent_a.fitness < agent_b.fitness) return  1;
					return 0;
				});


				// Survivor Population
				for (let e = 0, el = Math.round(0.2 * s_population); e < el; e++) {

					let agent = current[e];

					if (population.length < s_population) {
						population.push(agent.clone());
					}

				}


				// Mutant Population
				for (let m = 0, ml = Math.round(0.2 * s_population); m < ml; m++) {

					if (population.length < s_population) {

						population.push(new Agent({
							network: s_network
						}));

					}

				}


				let b = 0;
				let b_population = Math.round(0.2 * s_population);

				// Breed Population
				while (population.length < s_population) {

					let agent_mum = current[b];
					let agent_dad = current[b + 1];
					let children  = agent_mum.crossover(agent_dad);


					if (population.length < s_population) {
						population.push(children[0]);
					}

					if (population.length < s_population) {
						population.push(children[1]);
					}


					b += 1;
					b %= b_population;

				}

			}


			_GENERATIONS.push(population);


			if (_GENERATIONS.length > s_history) {
				_GENERATIONS.splice(0, _GENERATIONS.length - s_history);
			}


			return population;

		}

	};


	global.Evolution = Evolution;

})(this);

