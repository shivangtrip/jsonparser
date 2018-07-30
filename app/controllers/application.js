import Ember from 'ember';

export default Ember.Controller.extend({
    jsonVar: null,
    actions: {
            setJson(item){
                //alert(item);
                this.set('jsonVar', JSON.parse(item));
            }
    }
});
