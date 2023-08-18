import React, { Fragment, useState, useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useSession } from 'next-auth/react'
import getTutorP2PSchedulesQuery from '@/query/getTutorP2PSchedulesQuery'
import CreateScheduleForm from './CreateScheduleForm'
import CreateScheduleFormPopup from './CreateScheduleFormPopup'

type Inputs = {
  meetingDate: string;
  durationByMinutes: string;
  isPeer: string;
  isDemo: string;
  lessonId: string;
};


export default function ScheduleCalendar({tabIndex, setRow, setTabIndex}: any) {
  const localizer = momentLocalizer(moment)
  const { data: session, status } = useSession()

  const { data: p2pSchedules, isSuccess, refetch: refetchSchedulesData } =
    getTutorP2PSchedulesQuery(session?.user?.informationTutor?.id);

  const [schedules, setSchedules] = useState([])
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)


  useEffect(() => {
    refetchSchedulesData()
    let schedules = p2pSchedules.map(schedule => {
      return {
        id: schedule.id,
        title: schedule.isDemo ? "Demo" : "Nope",
        start: new Date(schedule.meetingDate),
        end: new Date(schedule.meetingDate).setHours(new Date(schedule.meetingDate).getHours() + 1),
      }
    })
    setSchedules(schedules)
  }, [p2pSchedules])


  const handleSelectEvent = useCallback(
    (event: any) => window.alert(JSON.stringify(event)),
    []
  )

  const handleSelectSlot = useCallback(
    ({ start, end }: any) => {
      setIsPopupOpen(true)
      setStart(start)
      setEnd(end)
    },
    [setSchedules]
  )

  return (
    <div className="height600">

      <Calendar
        localizer={localizer}
        events={schedules}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        defaultView='week'
        views={['week', 'work_week', 'day']}
      />
      <dialog id="my_modal_1" className="modal" open={isPopupOpen}>
        <form method="dialog" className="modal-box">
          <CreateScheduleFormPopup start={start} end={end} setIsPopupOpen={setIsPopupOpen} refetchSchedulesData={refetchSchedulesData} />
          <div className="modal-action">
            <button className="btn" onClick={() => setIsPopupOpen(false)}>Close</button>
          </div>
        </form>
      </dialog>
    </div>
  )
}
