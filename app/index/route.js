import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToDash: function() {
      this.transitionTo('dashboard.lead');
    }
  }
});
