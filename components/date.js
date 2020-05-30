import { parseISO, format } from 'date-fns'
// import Close from '../assets/icons/close.svg';
import Close from '@icons/close.svg';

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}
    <Close />
    </time>
  )
}
