import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return this.store.findAll('lead');

    return [
      { id: 1, jobTitle: 'Junior .Net Developer', companyName: 'ATLAS Technology Group'},
      { id: 2, jobTitle: 'Junior Front-End Developer', companyName: 'Few'},
    ];
  },
});
