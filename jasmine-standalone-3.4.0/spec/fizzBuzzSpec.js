describe('Javabuzz',function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });


  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT',function() {
    it('divisible by 3',function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

describe('when playing, says',function() {

  it('"Java" when a number is divisible by 3',function() {
    expect(javabuzz.says(3)).toEqual("Java");
  });


});



  //method statements go here
});
