import Ember from 'ember';

export default Ember.Component.extend({
    cart: Ember.inject.service('json-holder'),
    actions: {
        submit(input) {
            let tempInput = JSON.parse(input);
            
        }
    }
});
