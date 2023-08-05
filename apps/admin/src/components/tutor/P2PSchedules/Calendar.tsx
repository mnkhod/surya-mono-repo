import React, { Fragment, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

type Inputs = {
  meetingDate: string;
  durationByMinutes: string;
  isPeer: string;
  isDemo: string;
  lessonId: string;
};


export default function Selectable() {
  const localizer = momentLocalizer(moment)

  const [myEvents, setEvents] = useState([
    {
      title: "Hello World",
      start: moment().subtract(1, 'days').format('MMMM Do YYYY, h:mm:ss a'),
      end: moment().format('MMMM Do YYYY, h:mm:ss a'),
    }
  ])

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  )

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Event name')
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }])
      }
    },
    [setEvents]
  )
  

  return (
    <Fragment>

      <div className="height600">
        <Calendar
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          defaultView='week'
          views={['week', 'work_week', 'day']}
        />
      </div>
    </Fragment>
  )
}
