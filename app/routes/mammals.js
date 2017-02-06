import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Squirrel', 'Capybara', 'Tiger', 'Dog'];
  }
});
