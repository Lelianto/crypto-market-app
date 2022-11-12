export const currencyFormatting = (
  number,
  locale = 'id-ID',
  currency = 'IDR',
  minimumFractionDigits = 0,
  maximumFractionDigits = 0
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits
  }).format(number);
};
