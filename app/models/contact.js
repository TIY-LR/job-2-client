import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  email: DS.attr('string'),
  twitterHandle: DS.attr('string'),
  phone: DS.attr('number'),
  title: DS.attr('string'),
  notes: DS.attr('string'),
  company: DS.belongsTo('company'),
  lead: DS.belongsTo('lead'),
});
