describe('addFactory', function() {
  it('should throw the wrong result if returned', function() {
    expect(add50(50)).toEqual(100);
    expect(add30(50)).toEqual(80);
  })
})
