function splitStringAtPairedIndicies(
  str: string,
  indices: Array<[number, number]>
) {
  const result = [];
  let temp = 0;
  for (const [startIdx, endIdx] of indices) {
    if(temp < startIdx) result.push({
      value: str.slice(temp, startIdx),
      inRange: false,
    });
    result.push({ value: str.slice(startIdx, endIdx), inRange: true });
    temp = endIdx;
  }

  if (temp < str.length) {
    result.push({ value: str.slice(temp, str.length), inRange: false });
  }

  return result;
}

export default splitStringAtPairedIndicies;
