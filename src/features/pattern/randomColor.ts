const randomColor = () => {
  let hex = '' + Math.floor(Math.random() * 16777215).toString(16);
  while(hex.length < 6) {
    hex = '0' + hex;
  }
  return '#' + hex;
}

export default randomColor;