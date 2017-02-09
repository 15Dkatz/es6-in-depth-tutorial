describe('count()', function() {
  it('should throw the wrong result if returned', function() {
    expect(count(10)).toEqual([0, 2, 4, 6, 8]);
    expect(count(11)).toEqual([1, 3, 5, 7, 9]);
  });
});
