var RecordStore = function(name, city, balance){
this.name = name
this.city = city
this.inventory = []
this.balance = 0

}

RecordStore.prototype = {

addRecord: function(record){
this.inventory.push(record)
},
getInventory: function(){
 var inventoryList = ''
 this.inventory.forEach(function(record){
  inventoryList += record.inspectRecord()
 })
 return inventoryList
 
},

// sell: function(record){
//   this.inventory.splice(record)
// },

sell: function(record){
  var recordIndex = this.inventory.indexOf(record)
      this.inventory.splice(recordIndex, 1)
  // this.inventory.splice(record)  
  this.balance += record.price 
  
},

valueOfStock: function(){
  var stockValue = 0
  var newArray = this.inventory
     newArray.forEach(function(record){
       stockValue += record.price
     })
     return stockValue
     return this.balance
},

// recordByGenre: function(genre){
//   var returnByGenre = this.inventory.filter(function(record){
//     return record.genre === genre
//   })
//   return  this.getInventory(returnByGenre)
//   }

  recordByGenre: function(genre){
  return this.inventory.filter(function(element){
    return element > -1;
    })
      
    //not working yet 
  }
}

module.exports = RecordStore 