var lists = new Meteor.Collection("Lists");

/* Checks to see if the user making changes is an Admin */

function adminUser(userId) {
  var adminUser = Meteor.users.findOne({username:"admin"});
  return (userId && adminUser && userId === adminUser._id);
}

lists.allow({
  insert: function(userId, doc) {
    return adminUSer(userId);
  },
  update: function(userId, docs, fields, modifier) {
    return adminUser(userId);
  },
  remove: function(userId, docs) {
    return adminUser(userId);
  }
});