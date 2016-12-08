
(function(global) {

	const _LEARNING_RATE     = 0.3;
	const _LEARNING_MOMENTUM = 0.9;


	const _random = function() {
		return (Math.random() * 2) - 1;
	};

	const Brain = function(network) {

		if (network === undefined) {
			network = [3, [3, 3], 1];
		}


		this.layers = [];


		// Generate the Input Layer
		// - has 3 Neurons by default
		// - Input Neurons have no weights

		let input_layer = [];

		for (let i = 0; i < network[0]; i++) {

			input_layer.push({
				bias:    1,
				delta:   0,
				value:   _random(),
				history: [],
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
					bias:    1,
					delta:   0,
					value:   _random(),
					history: new Array(weights.length).fill(0),
					weights: weights
				});

			}

			this.layers.push(hidden_layer);
			prev_layer = hidden_layer;

		}


		// Generate Output Layer
		// - has 1 Neuron by default
		// - Move Up (> 0.5) or Move Down (<= 0.5), that is the question
		// - each and every Neuron is cross-connected

		let output_layer = [];

		for (let o = 0; o < network[2]; o++) {

			let weights = new Array(prev_layer.length);

			for (let w = 0, wl = weights.length; w < wl; w++) {
				weights[w] = _random();
			}

			output_layer.push({
				bias:    1,
				delta:   0,
				value:   _random(),
				history: new Array(weights.length).fill(0),
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
					// - track the inputs from previous layer
					// - so we save time in learn() method
					for (let p = 0, pl = prev_layer.length; p < pl; p++) {
						value += prev_layer[p].value * neuron.weights[p];
					}

					value += neuron.bias;

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

		learn: function(inputs, outputs) {

			this.compute(inputs);


			// XXX: neuron.gradient is neuron.delta


			let layers = this.layers;


			let output_layer = layers[layers.length - 1];

			for (let o = 0, ol = output_layer.length; o < ol; o++) {

				let neuron = output_layer[o];
				let value  = neuron.value;
				let delta  = value * (1 - value) * (outputs[o] - value);

				neuron.delta = delta;

			}

			for (let l = layers.length - 2; l >= 0; l--) {

				let current_layer = layers[l];
				let next_layer    = layers[l + 1];

				for (let n = 0, nl = current_layer.length; n < nl; n++) {

					let neuron = current_layer[n];
					let value  = neuron.value;
					let error  = 0.0;


					for (let x = 0; x < next_layer.length; x++) {
						let next_neuron = next_layer[x];
						error += next_neuron.weights[n] * next_neuron.delta;
					}

					neuron.delta = value * (1 - value) * error;

				}

			}



			for (let l = 0, ll = layers.length; l < ll; l++) {

				let current_layer = layers[l];
				let prev_layer    = layers[l - 1];

				for (let n = 0, nl = current_layer.length; n < nl; n++) {

					let neuron = current_layer[n];

					neuron.bias += _LEARNING_RATE * neuron.delta;


					let history = neuron.history;

					for (let w = 0, wl = neuron.weights.length; w < wl; w++) {

						let value = (l === 0 ? input[w] : prev_layer[w].value);
						let delta = _LEARNING_RATE * neuron.delta * value;

						neuron.weights[w] += delta;
						neuron.weights[w] += _LEARNING_MOMENTUM * neuron.history[w];

						history[w] = delta;

					}

					neuron.history = history;

				}

			}

		}

	};


	const Agent = function(data) {

		let settings = Object.assign({
			network: [3, [3, 3], 1]
		}, data);


		this.brain = new Brain(settings.network);

	};

	Agent.prototype = {

		compute: function(inputs) {
			return this.brain.compute(inputs);
		},

		learn: function(inputs, outputs) {
			return this.brain.learn(inputs, outputs);
		},

		clone: function() {

			let clone = new Agent();

			// This will copy/paste the exact same Brain
			// onto our clone. This avoids basically that
			// one Agent can by coincidence be used for
			// several Entities

			clone.brain.layers = JSON.parse(JSON.stringify(this.brain.layers));


			return clone;

		}

	};


	global.Agent = Agent;

})(this);

