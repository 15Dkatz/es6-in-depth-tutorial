describe('letterGen', function() {
  it('should throw the wrong result if returned', function() {
    expect(letterGen.next().value).toEqual('x');
    expect(letterGen.next().value).toEqual('y');
    expect(letterGen.next().value).toEqual('z');
    expect(letterGen.next().value).toEqual(undefined);
  });
});
