
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

(Explain Game Code and preparations)


## Architecture

- Training happens at two places
- In Game.update() when Paddle hit something
- In Game.restart() when Paddle didn't hit something
- Currently only Reinforcement Learning


## Necessary Steps

- [x] Create Simulation with parallel Game instances
- [x] Create a Simulation preview switcher
- [ ] Implement Agent.crossover() method
- [ ] Create an Agent fitness measurement
- [ ] Implement Evolution.cycle() method
- [ ] Hijack Game.restart() method


= Agent

# Agent.crossover()

## Agent.crossover()

- Each Agent has a Brain.
- Each Brain has a `serialize()` method
- Each Brain has a `deserialize()` method

