import dayjs from 'dayjs';

type DayjsMode = "md" | 'ymdhm' | 'ymdh' | 'ymd' | 'ym'


export default function useDayjs(d: string | Date, mode: DayjsMode = 'md') {
  const date = dayjs(d)
  if (mode === 'md')
    return date.format('MMM D')
  if (mode === 'ymdhm')
    return date.format('YYYY年MM月DD日 HH:mm')
  return date.format('MMM D, YYYY')
}