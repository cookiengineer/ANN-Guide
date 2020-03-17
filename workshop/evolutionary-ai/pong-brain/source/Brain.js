
(function(global) {

	const _LEARNING_RATE     = 0.3;
	const _LEARNING_MOMENTUM = 0.9;


	const _error_function = function(value, expected) {
		return value * (1 - value) * (expected - value);
	};

	const _random = function() {
		return (Math.random() * 2) - 1;
	};

	const _sigmoid = function(value) {
		return (1 / (1 + Math.exp((-1 * value) / 1)));
	};

	const Brain = function() {
		this.layers = [];
	};


	Brain.prototype = {

		initialize: function(inputs, outputs) {

			let input_size  = inputs.length;
			let output_size = outputs.length;

			let layers_size = 3;
			let hidden_size = 1;

			if (input_size > output_size) {
				hidden_size = input_size;
				layers_size = Math.max(input_size - output_size, 3);
			} else {
				hidden_size = output_size;
				layers_size = Math.max(output_size - input_size, 3);
			}


			this.layers = new Array(layers_size).fill(0).map((layer, l) => {

				let prev = hidden_size;
				let size = hidden_size;

				// Input Layer
				if (l === 0) {

					prev = 0;
					size = input_size;

				// first Hidden Layer
				} else if (l === 1) {

					prev = input_size;

				// Output Layer
				} else if (l === layers_size - 1) {

					size = output_size;

				}


				return new Array(size).fill(0).map(_ => ({
					bias:     1,
					delta:    0,
					value:    _random(),
					gradient: new Array(prev).fill(0),
					weights:  new Array(prev).fill(0).map(val => _random())
				}));

			});

		},

		compute: function(inputs) {

			let layers = this.layers;

			// TODO: Set Input Neuron values

			// TODO: Feed Forward for Hidden Layers + Output Layer

			// return Output Layer values
			let output_layer = layers[layers.length - 1];

			return output_layer.map(neuron => neuron.value);

		},

		learn: function(inputs, outputs) {

			// "Forward" Propagation
			this.compute(inputs);


			let layers = this.layers;

			// TODO: Calculate Gradient for Output Layer
			let output_layer = layers[layers.length - 1];


			// TODO: Calculate Gradient for Hidden Layers + Input Layer


			// TODO: Re-Calculate weights based on Gradient

		}

	};


	global.Brain = Brain;

})(typeof global !== 'undefined' ? global : this);

