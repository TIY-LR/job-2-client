import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('company');
  },
  actions: {
    submitCompany: function(company, data) {
      company.setProperties(data);
      company.save().then(() => {
        this.transitionTo('dashboard.companies.show', company);
      });
    },
  },
});
