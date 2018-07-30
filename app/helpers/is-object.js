import Ember from 'ember';

export function isObject([params]/*, hash*/) {
  return typeof params === 'object';
}

export default Ember.Helper.helper(isObject);
