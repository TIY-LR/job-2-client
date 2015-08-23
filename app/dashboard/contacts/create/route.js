import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      contact: this.store.createRecord('contact'),
      leads: this.store.findAll('lead'),
      companies: this.store.findAll('company'),
    });
  },
  actions: {
    submitContact: function(contact, data) {
      contact.setProperties(data);
      contact.save().then(() => {
        this.transitionTo('dashboard.companies');
      });
    },
  },
});
