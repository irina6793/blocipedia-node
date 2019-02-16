const Wiki = require("./models").Wiki;
const User =  require("./models").User;

module.exports = {

  addWiki(newWiki, callback){
    return Wiki.create(newWiki)
    .then((wiki) => {
      callback(null, wiki);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getWiki(id, callback){
    return Wiki.findById(id, {
      include: [
          {model: User }
        ]
    })
    .then((wiki) => {
      callback(null, wiki);
  })
  .catch((err) => {
    callback(err);
   })
  },

  deleteWiki(id, callback){
    return Wiki.destroy({
      where: { id  }
    })
    .then((deletedRecordsCount) => {
      callback(null, deletedRecordsCount);
    })
    .catch((err) => {
      callback(err);
    })
  },

  updateWiki(id, updatedWiki, callback){
    return Wiki.findById(id)
    .then((wiki) => {
      if(!wiki){
        return callback("Wiki not found");
     }
     wiki.update(updatedWiki, {
       fields: Object.keys(updatedWiki)
     })
     .then(() => {
       callback(null, wiki);
     })
     .catch((err) => {
       callback(err);
     });
   });
  }
}