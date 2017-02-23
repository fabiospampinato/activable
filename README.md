# Activable

![Issues](https://img.shields.io/github/issues/fabiospampinato/activable.svg)
[![NPM version](https://img.shields.io/npm/v/activable.svg)](https://www.npmjs.com/package/activable)

A base class that implements active-related functionalities.

## Install

```shell
$ npm install --save activable
```

## Usage

```js
import Activable from 'activable';

class Engine extends Activable {}

Engine.isActive (); // false
Engine.activate ();
Engine.isActive (); // true
Engine.deactivate ();
Engine.isActive (); // false
```

## API

### `new Activable ( active?: boolean )`

Returns a new instance of Activable, with a status of `active`, if provided, or false.

### `.isActive (): boolean`

Returns a boolean indicating the state of the instance.

### `.activate (): this`

`.isActive ()` will return true.

### `.deactivate (): this`

`.isActive ()` will return false.

### `.toggleActive ( active: boolean = !this.isActive () ): this`

If `active` is provided, the status will be set to its value.
Otherwise it will flip the current value.

## License

MIT © Fabio Spampinato
