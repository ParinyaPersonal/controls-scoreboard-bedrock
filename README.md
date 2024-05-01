##  ControlsScoreboard Class for Minecraft Bedrock Edition
The ControlsScoreboard class is a TypeScript and JavaScript class that provides scoreboard management. It allows you to create and manage scoreboards for players. The class provides methods for setting, adding, removing, and resetting the scoreboard value.

* Updated: 2024-04-30
* Min Version: 1.20.80

## Installation
To use the DynamicProperties class, you need to have the Minecraft server API `@minecraft/server` installed in your project. If you haven't installed it yet, you can add it to your project using git:

```shell
gh repo clone MrMaxing/controls-scoreboard-bedrock
```

## Properties
You can use the ControlsScoreboard class to create and manage scoreboards with the following properties:

### `score` Property
```ts
score: number
```
* Get the value of the scoreboard.
* The value is a number.

## Methods
You can use the DynamicProperties class to create and manage dynamic properties with the following methods:

### Constructor
```ts
constructor(objectname: string, player: mc.Player)
```
* Creates an instance of the ControlsScoreboard class with the given object name and player.

### `set` Method
```ts
set(score: number): this
```
* Set the value of the scoreboard.
* The value is a number.

### `add` Method
```ts
add(score: number): this
```
* Add a value to the scoreboard.
* The value is a number.

### `remove` Method
```ts
remove(score: number): this
```
* Remove a value from the scoreboard.
* The value is a number.

### `reset` Method
```ts
reset(): this
```
* Reset the scoreboard to 0.
* The value is a number.

## Example
```ts
import * as mc from '@minecraft/server';
import Scoreboard from '<path-to-scoreboard>';

const money = new Scoreboard('money', player as mc.Player);

money.set(100);
console.log(money.score);
// Output: 100

money.add(50);
console.log(money.score);
// Output: 150
```

## License
This code is open-source and available under the Apache-2.0 license.

Feel free to use and modify it according to your needs. If you have any questions or encounter issues, please create an issue on the GitHub repository or contact the author for support.