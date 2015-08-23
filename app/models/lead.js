import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.belongsTo('company', { async: true }),
  contact: DS.belongsTo('contact', { async: true }),
  jobTitle: DS.attr('string'),
  companyName: DS.attr('string'),
  status: DS.attr('string'),
  deadline: DS.attr('string'),
});
