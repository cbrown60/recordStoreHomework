var RecordStore = require ('../recordStore.js')
var Record = require('../record.js')
var assert = require ('assert')

describe('RecordStore', function(){
var record
var recordStore

beforeEach(function(){
 record1 = new Record('Justin Bieber','Greatest Hits','pop', 999 )
 recordStore = new RecordStore('Bobs Record Store','Edinburgh', 0)
})

it('record store is empty', function(){
  assert.strictEqual(0, recordStore.inventory.length)
})

it('balance is zero', function(){
  assert.strictEqual(0, recordStore.balance)
})

it('can add a record', function(){
  recordStore.addRecord(record1)
  assert.strictEqual(1,recordStore.inventory.length)

})


})

