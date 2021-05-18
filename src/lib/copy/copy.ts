const copyEs6 = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

const copyLegacy = async (text: string) => {
  const el = document.createElement('textarea');
  document.body.appendChild(el);
  el.value = "" + text;
  el.select();
  try {
    document.execCommand('copy');
  } finally {
    document.body.removeChild(el);
  }
}

const copy = (text: string) => {
  if(navigator.clipboard) return copyEs6(text);
  else return copyLegacy(text);
};

export default copy;
