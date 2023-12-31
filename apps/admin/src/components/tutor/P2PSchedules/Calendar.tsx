import React, { Fragment, useState, useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useSession } from 'next-auth/react'
import getTutorP2PSchedulesQuery from '@/query/tutor/getTutorP2PSchedulesQuery'
import CreateScheduleForm from './CreateScheduleForm'
import CreateScheduleFormPopup from './CreateScheduleFormPopup'
import getTutorGroupSchedulesQuery from '@/query/getTutorGroupSchedulesQuery'

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
    getTutorGroupSchedulesQuery();

  const [schedules, setSchedules] = useState([])
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)


  useEffect(() => {
    refetchSchedulesData()
    let schedules = p2pSchedules.map((schedule: any) => {
      return {
        id: schedule.id,
        title: schedule.isAvailable ? "Available (Peer)" : "Not available (Peer)",
        start: new Date(schedule.meetingDate),
        end: new Date(schedule.meetingDate).setHours(new Date(schedule.meetingDate).getHours() + 1),
      }
    })
    setSchedules(schedules)
  }, [p2pSchedules])


  const handleSelectEvent = useCallback(
    (event: any) => {
      const p2p = p2pSchedules.find((s: any) => s.id == event.id)
      setRow(p2p)
      setTabIndex(2)
    },
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

  const formats = {
    eventTimeRangeFormat: () => { 
      return "";
    },
  };


  return (
    <div className="height600">

      <Calendar
        localizer={localizer}
        events={schedules}
        formats={formats}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        defaultView='work_week'
        views={['work_week', 'week', 'day']}
      />
      <dialog id="my_modal_1" className="modal" open={isPopupOpen}>
        <form method="dialog" className="modal-box">
        <button onClick={() => setIsPopupOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <CreateScheduleFormPopup start={start} end={end} setIsPopupOpen={setIsPopupOpen} refetchSchedulesData={refetchSchedulesData} />
        </form>
      </dialog>
    </div>
  )
}
