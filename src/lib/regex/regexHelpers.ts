export const match = (pattern: string, flags: string[], input: string) => {
  const regex = new RegExp(pattern, flags.join(''));

  let matches;
  if (flags.indexOf('g') > -1) {
    matches = input.matchAll(regex);
  } else {
    const match = regex.exec(input);
    if (match === null) return [];
    matches = [match];
  }

  return Array.from(matches, (v) => ({
    startIdx: v.index as number,
    endIdx: v[0].length + (v.index as number),
    input: v.input,
    match: [...v],
  }));
};

export const replace = (
  pattern: string,
  flags: string[],
  input: string,
  replaceWith: string
) => {
  const regex = new RegExp(pattern, flags.join(''));
  return input.replace(regex, replaceWith);
};

export const list = (
  pattern: string,
  flags: string[],
  input: string,
  format: string
) => {
  const matches = match(pattern, flags, input);
  const formattedMatches = matches.map(
    ({ match: [match, ...group], startIdx, endIdx }) =>
      format.replace(
        /\$(&|\d{1,2}|`|'|\$)/g,
        (specialPattern: string, p1: string) => {
          if (specialPattern === '$&') {
            return match;
          } else if (
            !isNaN(Number.parseFloat(p1)) &&
            group[Number.parseInt(p1) - 1]
          ) {
            return group[Number.parseInt(p1) - 1];
          } else if (specialPattern === '$`') {
            return input.slice(0, startIdx);
          } else if (specialPattern === "$'") {
            return input.slice(endIdx);
          } else if (specialPattern === '$$') {
            return '$';
          }

          return specialPattern;
        }
      )
  );

  return formattedMatches.join('');
};
