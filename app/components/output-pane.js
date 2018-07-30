import Ember from 'ember';

export default Ember.Component.extend({
    cart: Ember.inject.service('json-holder'),
    
    willRender() {
        // Set the "categories" property to a JavaScript object
        // with the category name as the key and the value a list
        // of products.
        this.set('inputObj', this.get('cart').input);
      }
});
