var recipes = {
  eggs: "2" ,
  milk: "2 cups"
};

function updateObjectWithKeyAndValue(object, key, value) {
  object.assign({}, recipes, {[sugar]:'2 cups'});
  return recipes;
}
