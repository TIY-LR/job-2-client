import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      lead: this.store.createRecord('lead'),
      companies: this.store.findAll('company'),
      contacts: this.store.findAll('contact')
    });
  },

  actions: {
    submitLead: function(lead, data) {
      lead.setProperties(data);
      lead.save().then(() => {
        this.transitionTo('dashboard.lead.show', lead);
      });
    },
  },
});
