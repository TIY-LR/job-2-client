import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('lead');
  },

  actions: {
    submitLead: function(lead, data) {
      lead.setProperties(data);
      lead.save().then(() => {
        this.transitionTo(lead.show);
      });
    },
  },
});
