
= ANN Guide

# ANN Guide

## Introduction

- What is Machine Learning?
- What is Deep Learning?
- Different Architectures of NNs
- Why ANNs are so awesome


## What is Machine Learning

- hard to describe, some kind of Buzzword
- Teaching a Machine to do things itself
- Teaching a Machine to describe problems itself
- Teaching a Machine to solve problems itself

## What should it do?

- Problem -> Machine Learning -> Solution
- Dataset -> Classification -> Yes/No to a question
- Dataset -> Analysis -> Yes/No to a question

## Basic Training Idea

- Dumb NN -> Training -> Solution
- Clever NN -> Testing -> Yes/No to a question
- Training data vs. Test data

## Architectures

- Math sector: NN, ENN, RNN, Q-RNN, CNN (not covered)
- Biology sector: HTM engine (not covered here)
- Engineering sector: ANN, NEAT, HyperNEAT, ES/HyperNEAT

## Architectures

I think I'm quite sure I'm in between the Biology and
Engineering sector. Around 0.65.


= Neural Networks

# Neural Networks

## Neural Networks

- Idea to build a human brain
- can figure things out on their own (in a limited way)
- reward ("good dog!") to identify good things (yes)
- punish ("bad dog!") to identify bad things (no)

## Neural Networks

- How does a Neural Network look like?

![neural-network](/asset/neural-network.png)

## Backpropagation

- Idea: NNs will get better over time by rewards
- is just a nested loop of two two-dimensional arrays
- array's 1. dimension is layers (iterate over layers)
- array's 2. dimension is neurons (iterate over neurons)
- outer array is previous set of neurons, inner array is current set of neurons
- If `training_function(current_neuron.value) > 0.5`, update previous neuron with value


## Neural Networks

- can only work with vectors (0.0 - 1.0)
- don't question treatment or punishment
- don't question datasets
- don't question input vectors
- don't question output vectors


## Example Neural Network Usage

![neural-network-usage](/asset/neural-network-usage.png)


## Problems with Neural Networks

- used as so-called Classifier
- Dataset for cars has 4 vectors (4 wheels) as inputs
- [1,1,0,1] or whatever data representation
- NN gets treatment if found broken car (assuming broken occurs less than working cars)

## Neural Networks

- can be seen as dumb Monkeys wanting a banana
- don't question their reward
- don't have a sense of time
- only know good/bad, no matter how long the timespan
- overfitting problem
- first 1000 cars are good means every car is good.
- Want banana now.

## Problems with Classification

![classification-problem](/asset/classification-problem.png)


## Problems with Classification

- Datasets can be not finite anymore
- Let's assume 5000 (insert big number here) 4 wheel cars and 10 cars were 6 wheel cars
- [1,1,1,1,1,1] is a good car
- [1,1,1,1,0,0] is a also good car (last 2 vectors not tracked)

## Problems with Changing Datasets

- How to adapt to classifications?
- How to adapt to new dataset vectors?
- How to adapt to minimally occuring marginal conditions?


= Evolution Cycles

# Evolution Cycles

## Evolution Cycles

- Evolution as Dominance classification
- "Agents" that compete against each other
- Best agents get to mate and produce babies
- Genome (DNA) represents weights of neurons

## Evolution Cycles

![genome-nn-weights](/asset/genome-nn-weights.png)

## Evolution Cycles

- Genome DNA split is randomized
- 2 babies are produced, a son and a daughter
- 2 babies have each more of mothers or fathers genes

## Evolution Cycles

![genome-nn](/asset/genome-nn.png)

## Evolution Cycles

- Evolution always wins
- Randomization always wins

## Disadvantages of Evolution Cycles

- Adaptive to "bad seasons" (depressive behaviour)
- Adaptive to "good seasons" (optimistic behaviour)
- Needs long time to get better
- Needs parallelization of hundreds of agents

## Advantages of Evolution Cycles

- Eventually will always come up with correct classifier
- Adaptive to infinite datasets
- Adaptive to time-based datasets


= Backpropagation

# Backpropagation

## Backpropagation

- outer last-hidden-layer-update function
- typically sigmoid or gaussian (depending on use case)

## Backpropagation

![backpropagation-sigmoid](/asset/backpropagation-sigmoid.png)

## Backpropagation

![backpropagation-gaussian](/asset/backpropagation-gaussian.png)

## Backpropagation

- If function result is bigger than 0.5, increase neuron value
- If function result is lower than 0.5, decrease neuron value

## Problems with Backpropagation

![backpropagation-vector-problem](/asset/backpropagation-vector-problem.png)

## Problems with Backpropagation

![backpropagation-input-problem](/asset/backpropagation-input-problem.png)

## Problems with Backpropagation

- input vectors influence reward function
- time and occurance problem
- 6 wheels occur less than 4 wheels, but still a car
- new reward function necessary for bigger set of inputs
- how to value different rewards for different inputs?


= Recurrent Neural Networks

# Recurrent Neural Networks

## Recurrent Neural Networks

- so-called unfolding neural networks
- hidden layers will unfold in another dimension
- unfolding leads to sense of time/occurance

## Recurrent Neural Networks

![recurrent-nn](/asset/recurrent-nn.png)

## Disadvantages of RNN

- It's super ineffective (computation time gets longer with more datasets)
- each change in dataset vectors needs manual correction of reward function
- eventually RNNs will always lead to hacking the reward function
- mostly RNNs will end up with a single uber strategy

## Advantages of RNN

- can understand labeled data
- very good at generational stuff
- generate what you think a cat is

## LSTM Recurrent Neural Network

- Long Short Term Memory RNNs
- forget data and training that was irrelevant
- introduces new hidden layers per hidden layer
- introduces forget gates

## LSTM RNN

![lstm-rnn](/asset/lstm-rnn.png)

## LSTM RNN

- additional so called forget gates
- values close to zero (neuron output) are ignored
- good at identifying positive values
- very bad at identifying negative values

## Disadvantages of LSTM RNN

- very good at reoccuring datasets
- basically the computer variant of captain obvious
- bad for identifying new strategies
- new strategies require combination of multiple RNNs (in line or a graph)


= Deep Learning

# Deep Learning

## Deep Learning

- Combination of Neural Networks
- focus on having many tiny (easy to compute) NNs
- tiny NNs aim to exist for one specified purpose
- tiny NNs are connected to other neural networks
- each NN's purpose has several inputs

## Deep Learning

![deep-learning](/asset/deep-learning.png)

## Disadvantages of Deep Learning

- shitload of NNs and computation time
- literally only feasable in a server cloud
- if used with RNNs complexity gets million-fold real fast


= Adaptive Neural Networks

# Adaptive Neural Networks

## Adaptive Neural Networks

- randomly creates connections between neurons
- randomly removes connections between neurons


## Adaptive NNs

![adaptive-nn](/asset/adaptive-nn.png)

## Advantages of ANNs

- randomization always wins
- always better than RNNs without manual influence
- unsupervised learning is possible

## Disadvantages of ANNs

- cross-talk of neurons can get worse
- lower efficiency than Evolution (parallelization) concepts


= NEAT

# NEAT

## NEAT

- Neuro Evolution of Augmenting Topologies
- uses CPPN (Composition Pattern Producing Network)
- genetic algorithm that generates ANNs
- finds best fitness of evolved solutions
- starts minimally and predicts maximum efficiency in growth

## NEAT

![neat](/asset/neat.png)

## NEAT History

- can predict dominant genes
- can predict dominant species
- can predict where to spawn neurons
- respects diversity by gene history markers
- tracks history, crossover techniques, speciation

## NEAT Agents

- typical NEAT implementation has agents
- best agents get to make babies based on their fitness

## NEAT Agents

![neat-agents](/asset/neat-agents.png)

## Advantages of NEAT

- Adaptive to anything
- Figures out anything itself, given enough time
- Mutates connections between neurons (so-called substrates)
- Mutates nodes (neurons) in locations
- history markers are awesome for prediction


= HyperNEAT

# HyperNEAT

## HyperNEAT

- Hypercube based encoding for NEAT
- CPPN usage (Compositional Pattern Producing NN)
- Evolutionary algorithms generate neural network
- Describes patterns of connectivity (called encoding)
- Describes patterns like symmetry, repetition and variation of substrates

## HyperNEAT

![hyperneat](/asset/hyperneat.png)

## HyperNEAT

- 4D Hypercube (x1 , x2 , y1 , y2) for substrates
- 2D and 3D space is called a substrate

## HyperNEAT Geometry

- sees and predicts relations of inputs

![hyperneat-geometry](/asset/hyperneat-geometry.png)

## Disadvantages of HyperNEAT

- Basically a shitload of necessary pattern data

## Advantages of HyperNEAT

- Awesome prediction of geometric relations
- Can see if sensors (inputs) are related to each other
- does not require adaption of reward function
- does not exploit reward function due to patterns


= ES-HyperNEAT

# ES-HyperNEAT

## ES-HyperNEAT

- Evolvable substrate HyperNEAT
- places connections (substrates) automatically
- respects neuron cloud density
- respects neuron cloud locations
- can increase substrates via evolution

## Advantages of ES-HyperNEAT

- exponential growth of neurons via time
- geometry decides where to place neurons


= RTES-HyperNEAT

# RTES-HyperNEAT

## RTES-HyperNEAT

- Multi-agent implementation of ES-HyperNEAT
- made for realtime (RT) usage
- uses limited epoches for dominance of agents
- best agents produce babies based on fitness


= lychee.js CARTEL

# lychee.js CARTEL

## lychee.js CARTEL

- botnet size is above 500k+
- each bot runs thousands of ES-HyperNEATs
- RTES-HyperNEAT is good, but still static in inputs

## lychee.js CARTEL

- Humans have no clue about inputs
- Humans have no clue about training data
- Humans have no time for supervised learning

## CARTEL/ES-HyperNEAT

- learns which inputs play a role
- learns which training data plays a role
- focus on performance, cache optimization
- focus on delegation for synchronization

## CARTEL/ES-HyperNEAT

- Clone-Adaptive Real-Time Evolvable Legation
- adaptive to varying inputs
- adaptive to legation (voted "don" on each bot)
- hashing of inputs/outputs with murmur
- delegating agent clones to do same thing
- using shadow clones to increase fitness

## CARTEL/ES-HyperNEAT

![cartel-hyperneat](/asset/cartel-hyperneat.png)

## CARTEL/ES-HyperNEAT

- decides when randomization is good for evolution
- agent clones can be targeted with opposite datasets
- better variance for sigmoid behaviour
- better variance for gaussian behaviour
- sigmoid vs. gaussian still has to be evaluated

## CARTEL/ES-HyperNEAT

- Academic work still needs to be done
- Reference implementation around Sept 2016
- needs some polishing work
- needs code decoupling from lychee.js Engine
- Anybody want to write some papers and help?

## Future Stuff

- Idea is to have a RPPN
- Reward Pattern Producing Network
- Goals are hard to determine, given no format of questions
- Questions need to be serializable
- No Idea how to achieve that (yet)


= Summary

# Summary

## Summary

- github.com/cookiengineer/ANN-Guide (this talk)
- github.com/Artificial-Engineering/lycheejs (reference implementation)
- github.com/Artificial-Engineering/lycheejs-cartel (academic stuff, zero content by now)

