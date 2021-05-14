import split from './splitStringAtPairedIndicies';

describe('splitStringAtPairedIndicies', () => {
  it('should not split string if indices empty', () => {
    const res = split('Hello World', []);

    const expected = [
      {
        value: 'Hello World',
        inRange: false,
      },
    ];

    expect(res).toEqual(expected);
  });

  it('should not split string if it creates empty string', () => {
    const res = split('Hello World', [[0,5], [5, 6]]);

    const expected = [
      {
        value: 'Hello',
        inRange: true,
      },
      {
        value: ' ',
        inRange: true,
      },
      {
        value: 'World',
        inRange: false,
      },
    ];

    expect(res).toEqual(expected);
  });

  it('should split string and indicate in and out of range', () => {
    const res = split('Hello World', [
      [1, 3],
      [4, 5],
    ]);

    const expected = [
      {
        value: 'H',
        inRange: false,
      },
      {
        value: 'el',
        inRange: true,
      },
      {
        value: 'l',
        inRange: false,
      },
      {
        value: 'o',
        inRange: true,
      },
      {
        value: ' World',
        inRange: false,
      },
    ];

    expect(res).toEqual(expected);
  });
});
