import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['container'],
  actions: {
    submitLead: function(lead) {
      var data = this.getProperties(
        'jobTitle',
       'company',
       'contact'
       );
      this.sendAction('submitLead', lead, data);
    },
  },
});
