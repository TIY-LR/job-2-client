import DS from 'ember-data';

export default DS.Model.extend({
  jobTitle: DS.attr('string'),
  companyName: DS.attr('string'),
});
