import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signup');
  this.route('dashboard');
  this.route('profile');
  this.route('lead', function() {
    this.route('create', {path: 'new'});
    this.route('edit', {path: '/:id/edit'});
    this.route('show', {path: '/:id'});
  });
});

export default Router;
