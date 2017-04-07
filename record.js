var Record = function(artist, title, genre, price){
  this.artist = artist
  this.title = title
  this.genre = genre
  this.price = price 

}

Record.prototype = {
 inspectRecord: function(record){
  console.log(record)
}

}



module.exports = Record