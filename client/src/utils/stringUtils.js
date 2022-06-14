export const checkIsValidUrl = (url) => {
  const regex =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+(1[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const isValidUrl = regex.test(url);

  if (!isValidUrl) {
    return false;
  }
  if (url.indexOf('http://') === -1 && url.indexOf('https://') === -1) {
    url = 'http://' + url;
  }
  return url;
};

export const truncateText = (text, length) => {
  if (text.length <= length) {
    return text;
  }
  return text.substr(0, length) + '\u2026';
};
