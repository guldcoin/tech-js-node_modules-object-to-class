# object-to-class

[![Build Status](https://travis-ci.org/isysd/object-to-class.svg?branch=master)](https://travis-ci.org/isysd/object-to-class) [![Coverage Status](https://coveralls.io/repos/github/isysd/object-to-class/badge.svg?branch=master)](https://coveralls.io/github/isysd/object-to-class?branch=master)

Generate a dynamically named es6 class from any JS object.

### install

`npm i object-to-class`

### Usage

Simply pass the object you wish to convert to a class, and an optional name.

```
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

The result can be used like any other es6 class, with normal inheritence.

```
class MySubclass extends MyClass {}
let myinst = new MySubclass()
mysubinst instanceof MyClass // true
mysubinst.prop // my property
mysubinst.fn() // my function

```
