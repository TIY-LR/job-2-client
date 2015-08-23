import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitterHandle: DS.attr('string'),
  phone: DS.attr('number'),
  title: DS.attr('string'),
  notes: DS.attr('string'),
  // company: DS.belongsTo('company'),
});
