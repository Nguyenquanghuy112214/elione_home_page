import dayjs from 'dayjs';
export function formatDay(value) {
  return dayjs(value).format('DD/MM/YYYY');
}

export function formatDayV2(value) {
  return dayjs(value).format('YYYY-MM-DD');
}

export function formatDate(value, format) {
  return dayjs(value).format(format);
}