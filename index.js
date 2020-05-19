function updateObjectWithKeyAndValue(object, key, value){
var object = Object.assign({}, {[key]: value})
     //obj.prop2 = 'undefined'
    // obj['prop2'] = 'undefined';
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
  }

function deleteFromObjectByKey(object, key){
  var obj = Object.assign({prop: 1})
  var obj2 = delete obj.key
  return obj2
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete obj.prop
  return obj
}
