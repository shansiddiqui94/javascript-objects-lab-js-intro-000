function updateObjectWithKeyAndValue(object, key, value){
  var updatedobj = object.key = value
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
  delete object.key
  return object
}


function add(num1, num2) {
  return num1 + num2
}

function add(5, 3) {
  return 5 + 3;
}
