import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['container'],

  actions: {
    submitCompany: function(company) {
      var data = this.getProperties(
        'name',
        'url',
        'address1',
        'address2',
        'city',
        'state',
        'zipcode'
       );
      this.sendAction('submitCompany', company, data);
    },
  },
});
