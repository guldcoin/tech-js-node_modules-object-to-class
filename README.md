# object-to-class

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-object-to-class) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-object-to-class/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/lib/object-to-class.html)

[![node package manager](https://img.shields.io/npm/v/object-to-class.svg)](https://www.npmjs.com/package/object-to-class) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-object-to-class.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-object-to-class?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-object-to-class.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-object-to-class/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-object-to-class/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-object-to-class) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-object-to-class/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-object-to-class?type=dev)

Generate a dynamically named es6 class from any JS object.

### Install

##### Node

```sh
npm i object-to-class
```

### Usage

Simply pass the object you wish to convert to a class, and an optional name.

```javascript
const o2c = require('object-to-class')
const myObj = {
  'prop': 'my property'
  'fn': function () {
    return 'my function'
  }
}
const MyClass = o2c(myObj, 'MyClass')
MyClass.name // MyClass
const myinst = new MyClass()
myinst.prop // my property
myinst.fn() // my function
```

The result can be used like any other ES6 class, with normal inheritance.

```javascript
class MySubclass extends MyClass {}
let myinst = new MySubclass()
mysubinst instanceof MyClass // true
mysubinst.prop // my property
mysubinst.fn() // my function
```

### License

MIT Copyright isysd <public@iramiller.com>
