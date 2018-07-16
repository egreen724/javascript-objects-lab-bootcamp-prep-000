var recipes = {
  eggs: "2" ,
  milk: "2 cups"
};

function updateObjectWithKeyAndValue(object, key, value) {
  object.assign({}, object, {[key]:'value'});
  return object;
}

updateObjectWithKeyAndValue(recipes, "vanilla", "1 tsp");

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value; 
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "sugar", "2 cups"); 
