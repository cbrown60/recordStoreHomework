var RecordStore = function(name, city, balance){
this.name = name
this.city = city
this.inventory = []
this.balance = balance

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
 

}

}

module.exports = RecordStore 