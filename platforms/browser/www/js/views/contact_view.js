var app = app || {};

app.ContactView = Backbone.View.extend({
  events:{
    'click .remove-contact':  'destroy',
    'keyup input':  'update',
  },

  tagName:  'div',

  template: Handlebars.compile($('#contact-template').html()),

  className: 'contact',

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function(arg, args){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  update: function(ev){
    var $elem = $(ev.target);
    attribute = $elem.attr('class').replace('contact-', ''),
    update = {};

    update[attribute] = $elem.val();

    this.model.save(update);
  },

  destroy:  function(){
    this.model.destroy();
  }

});
