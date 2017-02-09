describe('sumArray function', function () {
  it('returns the number for an array of a single number', function () {
    var result;

    result = sumArray( [ 60 ] );
    expect(result).toEqual(60);

    result = sumArray( [ 999.89 ] );
    expect(result).toEqual(999.89);
  });

  it('returns the sum of all the numbers in the array', function () {
    var result;
    result = sumArray([ 7, 88, 43, 99 ]);
    expect(result).toEqual(237);

    result = sumArray([ 1736, 6, 33, 7, 0, 76 ]);
    expect(result).toEqual(1858);
  });

  it('returns 0 if array is empty', function () {
    var result = sumArray([]);
    expect(result).toEqual(0);
  });
});
