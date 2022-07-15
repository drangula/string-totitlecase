String.prototype.toTitleCase = function () {
  return this[0].toUpperCase() + this.slice(1).toLowerCase();
};

var text = 'UPPER CASE';

console.log(text.toTitleCase());
// Output: Upper case
