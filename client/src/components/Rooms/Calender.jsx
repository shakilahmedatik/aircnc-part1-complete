import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DatePicker = () => {
  return (
    <DateRange
      rangeColors={['#262626']}
      date={new Date()}
      direction='vertical'
      showDateDisplay={false}
      minDate={new Date()}
    />
  )
}

export default DatePicker
