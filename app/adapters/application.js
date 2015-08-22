import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://jobhunta.azurewebsites.net',
  namespace: 'api',
});
