var lists = new Meteor.Collection("Lists");

if (Meteor.isClient) {
/*
  Template.hello.greeting = function () {
    return "my list.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
*/

  Template.categories.lists = function () {
    return lists.find({}, {sort: {Category: 1}});
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
