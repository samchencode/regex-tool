import transform from './transform';
import * as regex from '../../lib/regex';

describe('transform string', () => {
  it('should return input string if no transforms given', () => {
    const params = { input: 'TEST', transforms: [] };

    expect(transform(params)).toEqual([]);
  });

  it('should perform one transform', () => {
    const params = {
      input: 'TEST',
      transforms: [
        {
          formatter: regex.replace,
          pattern: 'TE',
          flags: ['g'],
          format: 'RE',
        },
      ],
    };

    const expected = [
      {
        error: null,
        result: 'REST',
      },
    ];

    expect(transform(params)).toEqual(expected);
  });

  it('should perform multiple transforms', () => {
    const params = {
      input: 'TEST',
      transforms: [
        {
          formatter: regex.replace,
          pattern: 'TE',
          flags: ['g'],
          format: 'RE',
        },
        {
          formatter: regex.replace,
          pattern: '(E)S',
          flags: ['g'],
          format: '$1',
        },
      ],
    };

    const expected = [
      {
        error: null,
        result: 'REST',
      },
      {
        error: null,
        result: 'RET',
      },
    ];

    expect(transform(params)).toEqual(expected);
  });

  it('should catch error and set as result', () => {
    const params = {
      input: 'TEST',
      transforms: [
        {
          formatter: regex.replace,
          pattern: '(E',
          flags: ['g'],
          format: 'RE',
        },
      ],
    };

    const expected = expect.arrayContaining([
      {
        error: expect.any(Error),
        result:
          'Invalid regular expression: /(E/: Unterminated group',
      },
    ]);

    expect(transform(params)).toEqual(expected);
  });

  it('should propagate errors of prev transforms', () => {
    const params = {
      input: 'TEST',
      transforms: [
        {
          formatter: regex.replace,
          pattern: '(E',
          flags: ['g'],
          format: 'RE',
        },
        {
          formatter: regex.replace,
          pattern: 'TE',
          flags: ['g'],
          format: 'RE',
        },
      ],
    };

    const expected = expect.arrayContaining([
      {
        error: expect.any(Error),
        result:
          'Invalid regular expression: /(E/: Unterminated group',
      },
      {
        error: expect.any(Error),
        result:
          'Invalid regular expression: /(E/: Unterminated group',
      },
    ]);

    expect(transform(params)).toEqual(expected);
  });
});
