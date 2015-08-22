import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('signup');
  this.route('dashboard', function() {
    this.route('lead', function() {
      this.route('index', {path: '/'});
      this.route('create', {path: 'new'});
      this.route('edit', {path: '/:id/edit'});
      this.route('show', {path: '/:id'});
    });
    this.route('companies', function() {
      this.route('index', {path: '/'});
      this.route('show', {path: '/:id'});
    });
  });
  this.route('profile');
});

export default Router;
