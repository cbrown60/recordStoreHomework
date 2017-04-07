var Record = require('../record.js')
var assert = require('assert')

describe ('record store', function(){
  
  var record

  beforeEach(function(){
    record = new Record('Justin Bieber','Greatest Hits','pop', 999 )
  })

  it('can see properties of record', function(){
    var properties = record.inspectRecord(record)
    assert.strictEqual({ artist: 'Justin Bieber',
  title: 'Greatest Hits',
  genre: 'pop',
  price: 999 }, properties
)
  }


  )


})


