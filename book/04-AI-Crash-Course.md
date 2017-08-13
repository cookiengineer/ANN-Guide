
= Intro

# Intro

## Meta Talk

- Evolutionary AI guy
- Backprop ES/HyperNEAT lover
- "Ghetto AI" creator
- lychee.js Engine
- artificial.engineering


## Disclaimer

- I'm an engineering guy
- I say fuck a lot, because shit's on fire, yo.
- I hate Maths. No, srsly. It's wrong.



= Genetic Programming Basics

# Genetic Programming Basics


## Neural Network Basics

![neural-network](/asset/neural-network.png)


## Genetic Programming

- Idea is to represent states as DNA
- DNA can be combined with others
- Imagine DNA as "Arrays of values"
- DNA can also be weights of Neural Networks :)


## Genetic Programming

![genome-nn-weights](/asset/genome-nn-weights.png)


## Genetic Programming

- Randomization always wins (when time is Infinity)
- Genome DNA split is randomized
- 2 babies are produced, a son and a daughter
- 2 babies have each more genes of mother or father


## Genetic Programming

![genome-nn](/asset/genome-nn.png)



= Evolution Basics

# Evolution Basics

## Evolution Basics

- Evolution has three phases
- Phase 1 is Training
- Phase 2 is Evaluation
- Phase 3 is Breeding


## Evolution Basics

![evolution](/asset/evolution.png)


## Evolution Basics

- After each Epoche / Cycle:
- Population gets killed and replaced
- Some of them are Mutants (20%)
- Some of them are Survivors (20%)
- Only the best ones get to breed (60%)


## Evolution Basics

- Multi-Agent System
- Competitive Environment
- Agent gets rewarded or punished
- Agent has fitness as status
- Agents with better fitness get to multiply


## Live Demo

Game Demo (Manual)

[tiny.cc/flappy-plane](http://tiny.cc/flappy-plane)


## Simulation Architecture

- Evolution has an interval / timeout
- Population is an Array of Agents
- Each Generation represents one Evolution Cycle


## Agent Architecture

- Each Agent has a brain (FFNN)
- Each Agent controls an Entity
- Each Agent has a fitness property


## Brain Architecture

- Sensor 1: Center (position.y) of Plane
- Sensor 2: Center (position.y) of next Goal
- Control 1: calls method Plane.flap()


## Brain Architecture

- 2 Input Neurons
- 1 Hidden Layer (with 2 Neurons)
- 1 Output Neuron


## Brain Architecture

![flappy-network](/asset/flappy-network.png)


## Live Demo

Game Demo (Autopilot)

[tiny.cc/flappy-plane](http://tiny.cc/flappy-plane)


## Problems with Evolution

- Mutation Rate good at start
- Mutation Rate bad at end

## Problems with Breeding

- No Behavioural Analysis
- No Tracking of DNA History
- No Tracking of Performance



= Neural Network Basics

# Neural Network Basics

## Neural Network Basics

- Networks have layers
- Layers have neurons
- Neuron connections are weighted
- Weight represents "relatedness"


## Neural Network Basics

![neural-network](/asset/neural-network.png)


## Programmer's Perspective

- Inputs are variables
- Neuron connections are conditions
- Outputs are returned values


## Decision Trees

- Neural Networks are decision trees
- `if/else` is a one-way connection
- `if/elseif` is a two-way connection


## Decision Trees

if/else example:

```javascript
if (a === true) {
	if (b === false && a === true) {
		return true;
	}
}
return false;
```


## Decision Trees

... which is identical to:

```javascript
if (a === true) {
	if (b === false) {
		return true;
	}
}

return false;
```


## Decision Trees

![decision-tree-01](/asset/decision-tree-01.png)


## Decision Trees

![decision-tree-02](/asset/decision-tree-02.png)


## Decision Trees

![decision-tree-03](/asset/decision-tree-03.png)


## Wait a sec

Wait a second... what about vectors and stuff?


## Vectorization

```javascript
if (whatever < 0.5) {
	// whatever is false-ish
} else if (whatever > 0.5) {
	// whatever is true-ish
}
```


## Vectorization

- You can convert pretty much anything
- enums, parameters, arguments, strings
- Use the power of dictionaries!
- Get better results with offsets (thresholds)



= Backpropagation Basics

# Backpropagation Basics


## Backpropagation Basics

- Neuron weights are randomized
- Error function tweaks weights
- Weights are matched to expected outputs


## Backpropagation Basics

![neural-network](/asset/neural-network.png)


## Backpropagation Basics

- Pong Game Example
- X/Y/Z of ball position
- X/Y/Z of paddle position
- output > 0.5 to move upwards
- output < 0.5 to move downwards


## Pong Demo

Game Demo (autobattle)

[tiny.cc/reinforced-pong](http://tiny.cc/reinforced-pong)


## Pong Network

![pong-network-01](/asset/pong-network-01.png)


## Pong Training

- Backpropagation will lead to reinforced weights
- Error function will match weights closer to expected values


## Pong Network

![pong-network-02](/asset/pong-network-02.png)


## Pong Network

![pong-network-03](/asset/pong-network-03.png)


## Backpropagation Basics

- All Neurons are already given and static
- Network only adapts in weights, NOT in connections
- Reinforcement Learning is an ANALYTICAL model


## Backpropagation Basics

- Gradient calculation for each step is inefficient
- Gradient boosting is extrapolated and sub-optimal


## Problems with Reinforcement

- No enemy means no improvement
- No failure means no improvement
- Always tries to "hack" rewards
- (Pong Game: Play coop for more rewards)


## Reinforcement Learning

- Analytical model
- NOT a generational model



= Confused?

![confused](/asset/confused.png)



= Adaptive Neural Networks

# Adaptive Neural Networks


## Adaptive Neural Networks

![adaptive-nn](/asset/adaptive-nn.png)


## Adaptive Neural Networks

- Randomized Neurons, weights and connections
- Randomization always wins
- ANN Algorithm analyzes performance
- ANN Algorithm analyzes behaviour







= The End

# The End

## Better Concepts

- NEAT
- HyperNEAT
- ES-HyperNEAT
- backpropagated ES-HyperNEAT


## The End

Questions and Answers

[github.com/cookiengineer/talks](https://github.com/cookiengineer/talks)

[artificial.engineering](http://artificial.engineering)

[lychee.js.org](https://lychee.js.org)

