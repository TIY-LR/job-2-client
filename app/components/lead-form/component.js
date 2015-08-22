import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['container'],
  actions: {
    submitLead: function(lead) {
      var data = this.getProperties('jobTitle', 'companyName');
      this.sendAction('submitLead', data, lead);
    },
  },
});
