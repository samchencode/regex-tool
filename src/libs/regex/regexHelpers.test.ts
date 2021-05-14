import * as regex from './regexHelpers';

describe('regex lib', () => {
  describe('#match', () => {
    it('should denote all matches to regex pattern within input string', () => {
      const pattern = '.+';
      const flags = ['g', 'm'];
      const input = 'Hello World';
      const regexResult = regex.match(pattern, flags, input);

      const expected = expect.arrayContaining([
        expect.objectContaining({
          startIdx: 0,
          endIdx: 11,
        }),
      ]);

      expect(regexResult).toEqual(expected);
    });

    it('should match only first occurance without g flag', () => {
      const pattern = 'o';
      const flags = ['g'] as string[];
      const input = 'Hello World';
      const regexResult = regex.match(pattern, flags, input);

      const expected = expect.arrayContaining([
        expect.objectContaining({
          startIdx: 4,
          endIdx: 5,
        }),
      ]);

      expect(regexResult).toEqual(expected);
    });
  });

  describe('#replace', () => {
    it('should replace matches with a string', () => {
      const pattern = '(h)ello';
      const flags = ['g', 'i'];
      const input = 'Hello World';
      const replaceWith = '<< $& >> $1';
      const regexResult = regex.replace(pattern, flags, input, replaceWith);
  
      const expected = '<< Hello >> H World';
  
      expect(regexResult).toBe(expected);
    });

  })

  describe('#list', () => {
    it('should list matches according to a format string', () => {
      const pattern = 'hello (\\w+)';
      const flags = ['g', 'i'];
      const input = 'Hello World! Hello Universe!!';
      const replaceWith = 'Hi $1, $&\n';
      const regexResult = regex.list(pattern, flags, input, replaceWith);

      const expected = 'Hi World, Hello World\nHi Universe, Hello Universe\n';

      expect(regexResult).toBe(expected);
    });

    it("should not replace $d when capture group doesn't exist", () => {
      const pattern = 'hello (\\w+)';
      const flags = ['g', 'i'];
      const input = 'Hello World! Hello Universe!!';
      const replaceWith = 'Hi $9, $&\n';
      const regexResult = regex.list(pattern, flags, input, replaceWith);

      const expected = 'Hi $9, Hello World\nHi $9, Hello Universe\n';

      expect(regexResult).toBe(expected);
    });

    it("should recognize $`, $&, $` special-patterns", () => {
      const pattern = '[BC]';
      const flags = ['g'];
      const input = 'A B C D E';
      const replaceWith = "$`, $&, $'\n";
      const regexResult = regex.list(pattern, flags, input, replaceWith);

      const expected = 'A , B,  C D E\nA B , C,  D E\n';

      expect(regexResult).toBe(expected);
    })
  });
});
