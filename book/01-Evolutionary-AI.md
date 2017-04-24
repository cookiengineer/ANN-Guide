
= Evolutionary AI

# Evolutionary AI

## Meta Talk

- Evolutionary AI guy
- "Ghetto AI" creator
- lychee.js Engine
- artificial.engineering

## Meta Talk

I prefer backpropagated ES/HyperNEAT
over everything (including sleep), but
this is an Absolute Beginner-Level talk.

## Meta Talk

- What is Machine Learning?
- What is Artificial Intelligence?
- Self-Improving AI Idea

## In-Depth Talk

- Reinforcement Learning Basics
- Genetic Programming Basics
- Evolution Basics
- Competitive Environments
- Multi-Agent Systems

## Disclaimer

- I am a practical AI guy
- I use CARTEL-ES/HyperNEAT
- I love automated labor
- I hate manual labor
- I also do hate maths and doctors
- ML guys probably hate me anyways

## Disclaimer

I tend to say fuck a lot.
At least I'm honest 'bout it.


= Meta Talk

# Meta Talk

## What is Machine Learning

- Classification of data(sets)
- (CNNs) Image Recognition
- (CNNs) Generation of average models
- (RNNs) Prediction of time-sensitive data
- (DQNs) Memory- and Time-Sensitivity
- From AI Perspective: sensors / filters


## What is Artificial Intelligence

- Strategical Decision
- **not** Classification
- means: I have no idea on the topic
- I **assume** from other learned topics
- I **combine** knowledge from other topics


## What is Artificial Intelligence

- Most people think AI is here
- Actually - it's not
- Most "AIs" are statistical systems
- Most "AIs" are not self-improving
- Most "AIs" are coded by hand


## Self-Improving AI

- So-called "Goedel Machine"
- An AI that can (re-)write its own code
- An AI that can adapt to new scenarios
- An AI that can learn from previous scenarios


## Self-Improving AI

- Supervised Systems (Reinforcement)
- Unsupervised Systems (Evolutionary)


= Reinforcement Basics

# Reinforcement Basics

## Reinforcement Basics

- Idea is to train an NN with dataset
- reward for good results
- punish for bad results

## Reinforcement Basics

- Backpropagation algorithm
- given input
- expected output (or labels in dataset)

## Reinforcement Basics

Error function is calculating the delta
between given output and expected output
(similar to integral approximations).

## Reinforcement Basics

- Gradient calculation for each step is inefficient
- Gradient boosting
- Basic concept is to predict the gradient


## Live Demo

Game Demo (autobattle)

[tiny.cc/reinforced-pong](http://tiny.cc/reinforced-pong)


## Problems with the Game

- Math.random() helps learning
- Always competitive scenarios

## Problems with Reinforcement

- No enemy means no improvement
- No failure means no improvement
- Always tries to "hack" rewards

## Problems with Reinforcement

- Analytical model
- NOT a generational model


= Genetic Programming Basics

# Genetic Programming Basics

## Neural Network Basics

![neural-network](/asset/neural-network.png)

## Neural Network Genomes

![genome-nn-weights](/asset/genome-nn-weights.png)

## Genetic Programming

- Idea is to represent data as DNA
- DNA can be combined with others
- Imagine DNA as an "Array of values"
- Values can also be weights of an NN :)

## Genetic Programming

- Randomization always wins
- Genome DNA split is randomized
- 2 babies are produced, a son and a daughter
- 2 babies have each more of mothers or fathers genes

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
- Some of them are Mutants
- Some of them are Survivors
- Only the best ones get to breed

## Competitive Environments

- Multi-Agent System
- Competitive Environment
- Agents get rewarded or punished
- Agent has fitness as status
- Best fitness gets to multiply


## Live Demo

Game Demo (Manual)

[tiny.cc/flappy-plane](http://tiny.cc/flappy-plane)


= Architecture

# Architecture

## Architecture

- Evolution has an interval / timeout
- Population is an array of Agents
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
- 2 Hidden Layers (a 2 Neurons)
- 1 Output Neuron


## Live Demo

Game Demo (Autopilot)

Code Explanations

[tiny.cc/flappy-plane](http://tiny.cc/flappy-plane)


## Problems with the Game

- Math.random() is unfair
- No stepped hurdles

## Problems with Evolution

- Mutation Rate good at start
- Mutation Rate bad at end

## Problems with Breeding

- No Behavioural Analysis
- No Tracking of DNA History
- No Tracking of Performance


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


