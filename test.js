/* global describe:false it:false */
const assert = require('chai').assert
const o2c = require('./object-to-class.js')

describe('object-to-class', () => {
  it('works with empty object', () => {
    var MyClass = o2c({})
    assert.exists(MyClass)
    assert.equal(MyClass.name, 'ObjectToClass')
    var myInst = new MyClass()
    assert.exists(myInst.constructor)
    assert.equal(myInst.constructor.name, 'ObjectToClass')
  })
  it('sets dynamic name', () => {
    var MyClass = o2c({}, 'MyClass')
    assert.exists(MyClass)
    assert.equal(MyClass.name, 'MyClass')
    var myInst = new MyClass()
    assert.exists(myInst.constructor)
    assert.equal(myInst.constructor.name, 'MyClass')
  })
  it('assigns function', () => {
    var MyClass = o2c({sayhi: function () {
      return 'hi'
    }}, 'MyClass')
    assert.exists(MyClass.prototype.sayhi)
    var myInst = new MyClass()
    assert.exists(myInst.sayhi)
    assert.equal(myInst.sayhi(), 'hi')
  })
  it('assigns arrow function', () => {
    var MyClass = o2c({sayhi: () => {
      return 'hi'
    }}, 'MyClass')
    assert.exists(MyClass.prototype.sayhi)
    var myInst = new MyClass()
    assert.exists(myInst.sayhi)
    assert.equal(myInst.sayhi(), 'hi')
  })
  it('binds function', () => {
    var MyClass = o2c({getmessage: function () {
      return this.message
    }}, 'MyClass')
    var myInst = new MyClass()
    myInst.message = 'hi'
    assert.equal(myInst.getmessage(), 'hi')
  })
  it('binds property', () => {
    var MyClass = o2c({getmessage: function () {
      return this.message
    }, message: 'hi'}, 'MyClass')
    var myInst = new MyClass()
    assert.equal(myInst.message, 'hi')
    assert.equal(myInst.getmessage(), 'hi')
  })
})
