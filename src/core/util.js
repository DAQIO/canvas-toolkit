import _ from 'underscore';

export function checkOptions(options, fields){
  var props = _.keys(options);
  _.each(fields, (f) => {
    if(!_.contains(props, f)){
      throw `Missing "${f}"`
    }
  });
}
