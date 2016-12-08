#!/usr/bin/env node


const _fs  = require('fs');
const code = _fs.readFileSync(__dirname + '/../source/Agent.js');


let tmp = code.toString('utf8');

tmp = tmp.trim().split('\n').slice(0, -1).join('\n');
tmp += "})(typeof global !== 'undefined' ? global : this);";

eval(tmp);



let agent = new Agent({
	network: [ 2, [2], 1]
});

let training = [{
	inputs:  [ 0, 0 ],
	outputs: [ 0 ]
}, {
	inputs:  [ 0, 1 ],
	outputs: [ 1 ]
}, {
	inputs:  [ 1, 0 ],
	outputs: [ 1 ]
}, {
	inputs:  [ 1, 1 ],
	outputs: [ 0 ]
}];


let before = [];
let after  = [];


training.forEach(function(data) {
	before.push(agent.compute(data.inputs));
});

for (let t = 0; t < 10000; t++) {

	training.forEach(function(data) {
		agent.learn(data.inputs, data.outputs);
	});

}

training.forEach(function(data) {
	after.push(agent.compute(data.inputs));
});

console.log('expect\tbefore\t\t\tafter');

training.forEach(function(data, t) {
	console.log('' + data.outputs[0] + '\t' + before[t][0] + '\t' + after[t][0]);
});

