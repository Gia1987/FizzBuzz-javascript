
function Fizzbuzz() {

};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
}
 Fizzbuzz.prototype.isDivisibleByFive = function(number) {
   return this._isDivisibleBy(number, 5)
 }