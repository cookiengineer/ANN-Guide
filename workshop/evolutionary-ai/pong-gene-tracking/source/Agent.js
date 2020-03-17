
(function(global) {

	const _BRAIN_REFERENCE = {
		inputs: [
			0,   0.5, // paddle position
			0,   0.8, // ball position
			0.5, 0.2  // ball speed (1.0 == 25px/frame)
		],
		outputs: [
			0.8 // targeted y position
		]
	};


	const Agent = function(data) {

		this.brain   = new Brain();
		this.fitness = 0;


		// XXX: Brain needs a reference dataset
		this.brain.initialize(
			_BRAIN_REFERENCE.inputs,
			_BRAIN_REFERENCE.outputs
		);

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
			// onto our clone. We need this method for
			// having non-linked properties, in case
			// this implementation is reused in an
			// Evolutionary algorithm.

			clone.fitness      = this.fitness;
			clone.brain.layers = JSON.parse(JSON.stringify(this.brain.layers));


			return clone;

		},

		crossover: function(agent) {

			let brain1 = this.brain.serialize();
			let brain2 = agent.brain.serialize();
			let brain3 = [];
			let brain4 = [];

			let split    = Math.floor(Math.random() * brain1.length);
			let daughter = new Agent();
			let son      = new Agent();


			for (let b = 0; b < brain1.length; b++) {

				if (b < split) {
					brain3.push(brain1[b]);
					brain4.push(brain2[b]);
				} else {
					brain3.push(brain2[b]);
					brain4.push(brain1[b]);
				}

			}


			daughter.brain.deserialize(brain3);
			son.brain.deserialize(brain4);


			return [ daughter, son ];

		}

	};


	global.Agent = Agent;

})(typeof global !== 'undefined' ? global : this);

