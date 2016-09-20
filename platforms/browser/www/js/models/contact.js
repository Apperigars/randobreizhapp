var app = app || {};

app.Contact = Backbone.Model.extend({

  defaults:{
    firstName: '',
    lastName: '',
    email:  '',
    phone:  ''
  },

  initialize: function(collection){
    this.listenTo(this, 'invalid', this.invalid);
  },

  invalid:function(model, error){
    alert(model.get('title') + ' ' + error);
  },

  validate: function(attributes){
    if(attributes.firstName.length == 0){
      return "First name must be provided.";
    }
  },

  fullName: function(){
    return [this.get('firstName'), this.get('lastName')].join(' ');
  },

  matches:  function(expr){
    if(expr === null) return true;

    var hasMatch = _.some(this.asMatchable(), function(field){
      return field.match(expr) !== null;
    });

    if(hasMatch) return true;

    return false;
  },

  asMatchable:  function(){
    return [
      this.get('firstName'),
      this.get('lastName'),
      this.get('email'),
      this.get('phone')
    ];
  }

});
