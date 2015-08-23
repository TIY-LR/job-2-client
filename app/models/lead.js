import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.belongsTo('company'),
  contact: DS.belongsTo('contact'),
  jobTitle: DS.attr('string'),
  companyName: DS.attr('string'),
});
