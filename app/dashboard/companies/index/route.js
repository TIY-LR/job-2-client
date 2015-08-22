import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('company');

    // return [
    //   {id: 1, companyName: 'The Iron Yard'},
    //   {id: 2, companyName: 'Privacy Star'},
    //   {id: 3, companyName: 'Few'},
    //   {id: 4, companyName: 'ATLAS Technology Group'},
    //   ];
  },
});
