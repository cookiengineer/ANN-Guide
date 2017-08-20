
(function(global) {

	const _GENERATIONS = [];


	const Evolution = function(data) {

		this.settings = Object.assign({
			history:     4,
			population: 16
		}, data);

	};


	Evolution.prototype = {

		cycle: function() {

			let population   = [];
			let s_history    = this.settings.history;
			let s_population = this.settings.population;


			// No Generations available
			// - fast route, just generate a new plain one

			if (_GENERATIONS.length === 0) {

				for (let p = 0; p < s_population; p++) {

					// New Population
					// - each Agent's brain is random by default

					population.push(new Agent());

				}

			} else {

				let current = _GENERATIONS[_GENERATIONS.length - 1];

				// Sort the current Population
				// - Higher fitness first (to 0)
				// - Lower fitness last (to length - 1)

				current.sort(function(agent_a, agent_b) {
					if (agent_a.fitness > agent_b.fitness) return -1;
					if (agent_a.fitness < agent_b.fitness) return  1;
					return 0;
				});


				// TODO: 20% Survivor Population
				// - Agent.clone() leads to unlinked clone
				// - this avoids coincidence of 1 Agent leading to multiple Entities


				// TODO: 20% Mutant Population
				// - new Agent() leads to randomized Brain


				let b = 0;
				let b_population = Math.round(0.2 * s_population);

				// TODO: Rest of Breed Population
				// - b is automatically reset if bigger than 20%
				// - b leads to multiple incest Babies for multiple dominant Agents
				// - best Agent by fitness can now breed
				// - Babies are the ones from dominant population


				// XXX: Remove this crap
				population = _GENERATIONS[0];

			}


			// Track the Population
			// - just for the sake of Debugging, tbh.

			_GENERATIONS.push(population);


			// Optionally track more Generations
			// - in case something goes wrong
			// - set settings.history to higher value

			if (_GENERATIONS.length > s_history) {
				_GENERATIONS.splice(0, _GENERATIONS.length - s_history);
			}


			return population;

		}

	};


	global.Evolution = Evolution;

})(typeof global !== 'undefined' ? global : this);

