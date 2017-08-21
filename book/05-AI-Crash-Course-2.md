
= Intro

# Intro

## Meta Talk

- This is part 2 of AI Crash Course.
- Sweet (destructive) live coding.
- Yes, I'm @cookiengineer. Blabla.


## Preparations

- Go to [github.com/cookiengineer/talks](github.com/cookiengineer/talks)
- Clone the repo somewhere.


## Preparations

- Use either python2 or python3 for quick webserver

```bash
cd /path/to/demo;

python3 -m http.server 1337;

# You should update once in a decade. Srsly.
# python2 -m SimpleHTTPServer 1337;
```


## Disclaimer

- I can't code.
- For real, I'm human.
- Find bugs, keep them for free.


= Architecture

# Architecture

## Architecture

- Live-Coding project is in `./demo/pong-evolution`
- ES2017, so pretty much Chromium only


## Architecture

- One Simulation has one Evolution
- One Simulation has multiple Games
- Each Game has multiple Agents
- Each Agent has one Brain


## Architecture

![pong-evolution-architecture](/asset/pong-evolution-architecture.png)


## Architecture

Live Demo

Explain Game Code


## Architecture

- Training happens at two places
- In `Game.update()` when Paddle hit something
- In `Game.restart()` when Paddle didn't hit something
- Currently only Reinforcement Learning


## Already-Implemented Steps

- Create Simulation with parallel Game instances
- Create a Simulation preview switcher


## Live-Coding Steps

- Implement `Agent.crossover()` method
- Create an `Agent.fitness` measurement
- Implement `Evolution.cycle()` method
- Hijack `Game.restart()` method


= Agent

## Agent.crossover()

- Each Agent has a Brain.
- Each Brain has a `serialize()` method
- Each Brain has a `deserialize()` method


## Agent.crossover()

- Use a random DNA split for weights
- Weights are serialized using `Brain.serialize()`
- Return two babies, son and daughter


= Evolution

## Evolution.cycle()

- Each Evolution has multiple generations
- Generations represent the history of DNA
- Each cycle / epoche creates new population


## Evolution.cycle()

- Create Survivor Population
- Create Mutant Population
- Use `Agent.crossover()` for Breed Population


= Simulation

## Simulation.start()

- Modify `Simulation.start()` to use Evolution's population
- Modify `Game.start()` to respect evolution


## Simulation.restart()

- Modify `Simulation.restart()` to respect evolution
- Modify `Game.restart()` to respect evolution


## Game.update()

- Modify `Game.update()` to set `Agent.fitness`
- Modify `Game.restart()` to set `Agent.fitness`



= The End

## The End

Questions and Answers

[github.com/cookiengineer/talks](https://github.com/cookiengineer/talks)

[artificial.engineering](http://artificial.engineering)

[lychee.js.org](https://lychee.js.org)

