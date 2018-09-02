
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

- Install `node.js` and use the built-in web server.

```bash
cd /path/to/talks;

bash ./bin/serve.sh;

# Now go to http://localhost:1337/demo in web browser!
```


## Disclaimer

- I can't code.
- For real, I'm human.
- Find bugs, keep them for free.


= Architecture

# Architecture

## Architecture

- Live-Coding project is in `./homework/pong`
- ES2017, so pretty much Chromium only


## Architecture

- Each Game has multiple Agents
- Each Agent has one Brain


## Architecture

Live Demo

Game Demo

[tiny.cc/reinforced-pong](http://tiny.cc/reinforced-pong)


## Architecture

- Training happens at two places
- In `Game.update()` when Paddle hit something
- In `Game.restart()` when Paddle didn't hit something


## Live-Coding Steps

- Implement `Brain.learn()` method
- Implement `Brain.compute()` method
- Hijack `Game.restart()` method


= Brain

## Brain.compute()

- Each Brain has a `compute(inputs)` method
- Simple FFNN needs to be implemented
- Return the computed output neuron values


= Brain

## Brain.learn()

- Each Brain has a `learn(inputs, outputs)` method
- Backpropagation needs to be implemented

## Brain.learn()

- Implement each neuron's `weights[]` property
- Implement each neuron's `gradient[]` property
- Implement the error function


= The End

## The End

Questions and Answers

[github.com/cookiengineer/talks](https://github.com/cookiengineer/talks)

[artificial.engineering](http://artificial.engineering)

[lychee.js.org](https://lychee.js.org)

