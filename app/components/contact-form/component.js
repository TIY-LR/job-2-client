import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['container'],
  actions: {
    submitContact: function(contact) {
      var data = this.getProperties(
        'firstName',
        'lastname',
        'title',
        'email',
        'phone',
        'twitterHandle',
        'notes',
        'company',
        'lead'
       );
      this.sendAction('submitContact', contact, data);
    },
  },
});
