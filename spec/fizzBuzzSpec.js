describe('Fizzbuzz', function() {
  var fizzbuzz;

beforeEach(function() {
  fizzbuzz = new Fizzbuzz
});
  describe('knows wneh a number is', function() {

    it('divisble by 3', function() {
       expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
  describe('knows when the number is NOT', function() {

    it('divisble by 3', function() {
       expect(fizzbuzz.isDivisibleByThree(2)).toBe(false);
    });
  });

  describe('knows wneh a number is', function() {

    it('divisble by 5', function() {
       expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
  });
  describe('knows when the number is NOT', function() {

    it('divisble by 5', function() {
       expect(fizzbuzz.isDivisibleByFive(2)).toBe(false);
    });
  });

  describe('knows when a number is', function() {

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function(){

    it ('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(14)).toBe(false);
    });
  });

  describe('when playning, says', function(){

    it('"Fizz" when a number is divisible by 3', function(){
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
  });

  describe('When playing, says', function(){

    it('"Buzz" when a number is divisble by 5', function(){
      expect(fizzbuzz.says(5)).toEqual("Buzz")
    });
  });

  describe('When playing, says', function(){

    it('"FizzBuzz" when a number is divisble by 15', function(){
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz")
    });
  });

});
