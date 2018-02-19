
(function(global) {

	const _GENERATIONS = global.GENERATIONS = [];


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


			// TODO: Implement this method


			return population;

		}

	};


	global.Evolution = Evolution;

})(typeof global !== 'undefined' ? global : this);

