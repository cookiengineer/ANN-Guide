
= lychee.js Architecture

# lychee.js Architecture

## Introduction

- Zynga, ESA, World Domination, blabla
- Founder of lychee.js Engine
- Founder of Artificial Engineering


## Introduction

Always being asked what the actual
fuck I'm doing all the time.

![foreign-language](/asset/foreign-language.png)


## State of Software

We think programming sucks. This is why.


## State of Software

- Repetitive tasks and solutions
- Non-reusable components
- Non-reusable architectures
- Non-reusable cross-platform stuff
- No standard definition format


## State of Software

- Humans make mistakes
- Code monkeys always too busy
- No time to think, must fix

![repetition](/asset/repetition.gif)


= Isomorphism

# Isomorphism

## Isos "equal" and morphe "shape"


## Isomorphism

- Idea to reuse Components
- Both client/server side
- Problem with Glue code remains
- MVC, MVVC, MVV-something still shitty


## Isomorphism

- Entity/Component architecture
- Events as abstraction layer
- Problems with platform APIs remains
- Problems with feature detection remains


## Isomorphism

- What about peer-side components?
- What about console-side components?
- What about embedded-side components?


## Isomorphism

- No, porting HTML5 to OpenGL is bad idea.
- No, neither is bundling a Browser.
- You can still go for LinuxJS. No, srsly.


= Components everywhere

# Components everywhere

## Components everywhere

- If Components run everywhere...
- Why not go Embedded or Mobile?
- No, porting HTML5 is still bad idea.


## You guessed it ...

- Platform-specific code is bad.
- Glue code is bad, too.


## What to do?

![what-to-do](/asset/what-to-do.png)


## What to do?

- Platform Adapters for each platform
- State-driven APIs for output
- Event-driven APIs for input


= lychee.js

# lychee.js

## Back to lychee.js

Are you confused already?

![confused](/asset/confused.png)


## lychee.js Core

![architecture-01](/asset/lycheejs-architecture-01.svg)


## lychee.js Core

![architecture-02](/asset/lycheejs-architecture-02.svg)


## lychee.js Core

- Definition System
- Feature Detection at Runtime
- Entity/Component Architecture
- Dependency Management
- Library/Package Management


## lychee.js Core

- Environment Sandboxes
- Build in Builds in Builds
- Requirement Determination at Runtime
- Requirement Injection at Runtime
- Serialization!


## lychee.js Core

```javascript
let env  = new lychee.Environment();
let blob = env.serialize();

blob; // { constructor: 'lychee.Environment' ... }
```


## lychee.js Bootstrap

![architecture-03](/asset/lycheejs-architecture-03.svg)


## lychee.js Bootstrap

- Definitions can have Attachments
- No Glue-Code-introducing Asset Loader
- All Asset Types are implemented in Bootstrap
- Buffer, Config, Font, Music, Sound, Texture, Stuff


## lychee.js Bootstrap

- base64, binary, utf8 Encoding
- Live-Injection of Assets at Runtime
- Live-Updating of Assets at Runtime
- Serialization!


## lychee.js Bootstrap

```javascript
let cfg = new Config('/url/to/Config.json');

cfg.onload = function() {
	console.log(this.serialize());
};

cfg.load();
```


## lychee.js Fertilizers

![architecture-04](/asset/lycheejs-architecture-04.svg)


## lychee.js Fertilizers

- Platform Adapters aka. Fertilizers
- Each Fertilizer ships multiple Runtimes
- Runtimes implement API against Fertilizer API
- e.g. `html` , `html-webgl` or `html-webview` platform


## lychee.js Fertilizers

- Input, Renderer, Storage, Viewport
- net.Client, net.Remote, net.Server
- State-driven Output (e.g. Renderer)
- Event-driven Input (e.g. Viewport)
- Event-driven Network (peer-to-peer Services)


## lychee.js Fertilizers

Example: `html-webview` ships all at once:

- Android
- BlackberryOS
- iOS
- FirefoxOS
- Ubuntu Touch


## lychee.js Adapter Instances

![architecture-05](/asset/lycheejs-architecture-05.svg)


## lychee.js Adapter Instances

- e.g. Renderer, Viewport, Input etc.
- Identical API across all platforms
- Serialization!


## lychee.js Adapter Instances

```javascript
let blob  = MAIN.input.serialize();
let clone = lychee.deserialize(blob);

clone; // Identical lychee.Input instance
```


## BOOM!

- All things Network is serialized
- All things Input is serialized
- All things Output is serialized
- We can now simulate somewhere else :)


## BOOM!

![cool](/asset/cool.png)


## lychee.js App State

![architecture-06](/asset/lycheejs-architecture-06.svg)


## lychee.js App State

- MV-something is shitty
- You should start to realize that by now:)


## lychee.js App State

- App States divide Logic Differences
- Scene Graph for App/UI Entities
- Flow Graph for Event Timeline
- Net Graph for Network Timeline
- AI Graph for Simulation Timeline


## lychee.js App State

- If Humans make mistake, Snapshot is generated.
- Snapshot can be simulated everywhere
- No, literally everywhere. Even on a Raspberry Pi!
- Serialization!


## lychee.js App State

```javascript
let blob  = lychee.serialize(MAIN);
let clone = lychee.deserialize(blob);

clone; // Identical app.Main instance
```

## BOOM!

- All things UI serialized
- All things UX serialized
- All things Errors serialized
- All things Flow serialized

## BOOM!

![cool](/asset/cool.png)


## lychee.js App Code

![architecture-07](/asset/lycheejs-architecture-07.svg)


= lychee.js Software Bots

# lychee.js Software Bots

## Automate all the things!

- Breeder is Getting-Started CLI Tool
- Ranger is remote control and watch daemon
- Harvester is CI / peer-to-peer WebSocket/HTTP server
- Fertilizer is build toolchain
- Strainer is refactoring and linting tool


## lychee.js Cultivator Tools

- Editor is drag-n-drop GUI editing Tool
- Sprite Tool generates Sprites automatically
- Font Tool generates Fonts automatically


## lychee.js Project

- [lychee.js.org](https://lychee.js.org)
- [github.com/Artificial-Engineering](https://github.com/Artificial-Engineering)

