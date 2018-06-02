# object-to-class

[![npm](https://img.shields.io/npm/v/object-to-class.svg)](https://www.npmjs.com/package/object-to-class) [![Build Status](https://travis-ci.org/isysd/object-to-class.svg?branch=master)](https://travis-ci.org/isysd/object-to-class) [![Coverage Status](https://coveralls.io/repos/github/isysd/object-to-class/badge.svg?branch=master)](https://coveralls.io/github/isysd/object-to-class?branch=master)

Generate a dynamically named ES6 class from any JavaScript object.

### install

`npm install object-to-class`

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
