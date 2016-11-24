
(function(global) {

	const _random = function() {
		return (Math.random() * 2) - 1;
	};

	const Brain = function(network) {

		if (network === undefined) {
			network = [2, [2], 1];
		}


		this.layers = [];


		// Generate the Input Layer
		// - has 2 Neurons by default
		// - Input Neurons have no weights

		let input_layer = [];

		for (let i = 0; i < network[0]; i++) {

			input_layer.push({
				value:   _random(),
				weights: []
			});

		}

		this.layers.push(input_layer);


		// Generate Hidden Layers
		// - have 2 Neurons by default
		// - Neuron's weights represent previous layer's neurons
		// - each and every Neuron is cross-connected

		let prev_layer = input_layer;
		for (let h = 0; h < network[1].length; h++) {

			let hidden_layer = [];

			for (let l = 0; l < network[1][h]; l++) {

				let weights = new Array(prev_layer.length);

				for (let w = 0, wl = weights.length; w < wl; w++) {
					weights[w] = _random();
				}

				hidden_layer.push({
					value:   _random(),
					weights: weights
				});

			}

			this.layers.push(hidden_layer);
			prev_layer = hidden_layer;

		}


		// Generate Output Layer
		// - has 1 Neuron by default
		// - Flap (> 0.5) or Not to Flap (<= 0.5), that is the question
		// - each and every Neuron is cross-connected

		let output_layer = [];

		for (let o = 0; o < network[2]; o++) {

			let weights = new Array(prev_layer.length);

			for (let w = 0, wl = weights.length; w < wl; w++) {
				weights[w] = _random();
			}

			output_layer.push({
				value:   _random(),
				weights: weights
			});

		}

		this.layers.push(output_layer);

	};

	Brain.prototype = {

		compute: function(inputs) {

			let layers      = this.layers;
			let input_layer = layers[0];

			for (let i = 0, il = inputs.length; i < il; i++) {
				input_layer[i].value = inputs[i];
			}


			let prev_layer = layers[0];

			for (let l = 1, ll = layers.length; l < ll; l++) {

				let current_layer = layers[l];

				for (let n = 0; n < current_layer.length; n++) {

					let neuron = current_layer[n];
					let value  = 0;

					// Calculate the processed value via weights
					for (let p = 0, pl = prev_layer.length; p < pl; p++) {
						value += prev_layer[p].value * neuron.weights[p];
					}

					// Hardcoded Activation Function
					neuron.value = (1 / (1 + Math.exp((-1 * value) / 1)));

				}

				prev_layer = layers[l];

			}


			let outputs      = [];
			let output_layer = layers[layers.length - 1];

			for (let o = 0, ol = output_layer.length; o < ol; o++) {
				outputs.push(output_layer[o].value);
			}


			return outputs;

		},

		// getWeights() is used in crossover()
		getWeights: function() {

			let weights = [];

			for (let l = 0, ll = this.layers.length; l < ll; l++) {

				let layer = this.layers[l];

				for (let n = 0, nl = layer.length; n < nl; n++) {

					let neuron = layer[n];
					if (neuron.weights.length > 0) {
						weights.push.apply(weights, neuron.weights);
					}

				}

			}


			return weights;

		},

		// setWeights() is used in crossover()
		setWeights: function(weights) {

			let index = 0;

			for (let l = 0, ll = this.layers.length; l < ll; l++) {

				let layer = this.layers[l];

				for (let n = 0, nl = layer.length; n < nl; n++) {

					let neuron = layer[n];
					if (neuron.weights.length > 0) {

						for (let w = 0, wl = neuron.weights.length; w < wl; w++) {
							neuron.weights[w] = weights[index++];
						}

					}

				}

			}

		}

	};


	const Agent = function(data) {

		let settings = Object.assign({
			network: [2, [2], 1]
		}, data);


		this.brain   = new Brain(settings.network);
		this.fitness = 0;

	};

	Agent.prototype = {

		compute: function(inputs) {
			return this.brain.compute(inputs);
		},

		clone: function() {

			let clone = new Agent();

			// This will copy/paste the exact same Brain
			// onto our clone. We need this method for
			// having non-linked Survivors as Survivors
			// are Elite and can be bred into other Babies
			//
			// This avoids basically that one Agent can
			// by coincidence be used for several Entities

			clone.fitness = this.fitness;
			clone.brain.layers = JSON.parse(JSON.stringify(this.brain.layers));


			return clone;

		},

		crossover: function(agent) {

			let babies = [ new Agent(), new Agent() ];


			let brain0      = [];
			let brain1      = [];
			let weights_mum = this.brain.getWeights();
			let weights_dad = agent.brain.getWeights();
			let dnasplit    = (Math.random() * weights_mum.length) | 0;


			for (let w = 0, wl = weights_mum.length; w < wl; w++) {

				// Cross-Breeding
				// - DNA is "only" the weights of the brain
				// - first part of DNA is mum
				// - second part of DNA is dad
				if (w < dnasplit) {
					brain0[w] = weights_mum[w];
					brain1[w] = weights_dad[w];
				} else {
					brain0[w] = weights_dad[w];
					brain1[w] = weights_mum[w];
				}


				// Mutations
				// - 10% Mutation Rate
				// - 25% Mutation Range
				// - Math.random() is only positive
				// - Math.random() * 2 - 1 can lead to negative value
				if (Math.random() <= 0.10) {
					brain0[w] += (Math.random() * 0.25 * 2) - 0.25;
					brain1[w] += (Math.random() * 0.25 * 2) - 0.25;
				}

			}


			// Baby Brains
			// - brain weights were generated by DNA above
			babies[0].brain.setWeights(brain0);
			babies[1].brain.setWeights(brain1);


			return babies;

		}

	};


	global.Agent = Agent;

})(this);

