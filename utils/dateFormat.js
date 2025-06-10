export const formatDate = (data, locale = "en-GB", options = { dateStyle: "long" }) => {
  let dataToFormat = data;
  if (!(data instanceof Date)) {
    if (!data) return;
    dataToFormat = new Date(data);
  }

  return new Intl.DateTimeFormat(locale, options).format(dataToFormat);
};
