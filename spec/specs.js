describe("countUp", function() {
  it('takes two numbers and returns the multiples of one number until it reaches the second', function() {
    expect(countUp(36, 5)).to.eql([5, 10, 15, 20, 25, 30, 35]);
  });
});
