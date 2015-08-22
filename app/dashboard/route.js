import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.ajax('http://jobhunta.azurewebsites.net/api/values');
  },

  afterModel: function() {
    console.log(this.model());
  }
});
