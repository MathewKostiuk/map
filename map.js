var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

function map(array, cb) {
  var mapped = [];
  array.forEach(function(item) {
    mapped.push(cb(item));
  });
  return mapped;
}
