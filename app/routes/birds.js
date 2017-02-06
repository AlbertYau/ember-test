import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Crow', 'Pigeon', 'Hawk', 'Eagle', 'Raven'];
  }
});
