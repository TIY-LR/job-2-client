import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  address1: DS.attr('string'),
  address2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipcode: DS.attr('number'),
  // contacts: DS.attr(),
  // leads: DS.attr(),
  contacts: DS.hasMany('contact'),
  leads: DS.hasMany('lead'),
});
