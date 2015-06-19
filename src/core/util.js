import _ from 'underscore';

export function checkOptions(options, fields){
  var props = _.keys(options);
  _.each(fields, (f) => {
    if(!_.contains(props, f)){
      throw `Missing "${f}"`
    }
  });
};


export function RedrawProperties(propNames){
  return function(klazz){
    _.each(propNames, (propName) => {
      Object.defineProperty(klazz.prototype, propName, {
        get: function() {
          return this['_'+propName];
        },
        set: function(value) {
          this['_' + propName] = value;
          this.isDirty = true;
        },
        enumerable: true,
        configurable: true
      });
    });
  };
};
