import TutorLayout from "@/components/layouts/TutorLayout";
import CreateScheduleForm from "@/components/tutor/P2PSchedules/CreateScheduleForm";
import EditScheduleForm from "@/components/tutor/P2PSchedules/EditScheduleForm";
import ScheduleList from "@/components/tutor/P2PSchedules/ScheduleList";
import Calendar from "@/components/tutor/P2PSchedules/Calendar";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import { useEffect, useState } from "react";
import useTutorP2PSchedulesQuery from "@/query/getTutorP2PSchedulesQuery";
import { useSession } from "next-auth/react";

export default function Schedules() {

  const { data: session, status } = useSession()

  const [tabIndex, setTabIndex] = useState(0);
  const [row, setRow] = useState({});

  if(status == 'loading') {
    return <title>Unauthorized</title>
  }

  // const { data: schedules, isSuccess } =
  //   useTutorP2PSchedulesQuery(session?.user.informationTutor.id)

  return (
    <TutorLayout>
      <div className="card w-full shadow-xl">
        <div className="card-body w-full flex gap-6 flex-col justify-between">
          <div className="tabs">
            <button
              onClick={() => {
                setTabIndex(3);
              }}
              className={`tab tab-lifted ${tabIndex == 3 && "tab-active"
                } font-bold`}
            >
              Calendar
            </button>
            <button
              onClick={() => {
                setTabIndex(0);
              }}
              className={`tab tab-lifted ${tabIndex == 0 && "tab-active"
                } font-bold`}
            >
              List of schedules
            </button>
            <button
              onClick={() => {
                setTabIndex(1);
              }}
              className={`tab tab-lifted ${tabIndex == 1 && "tab-active"
                } font-bold`}
            >
              Create schedule
            </button>
            <button
              disabled={tabIndex != 2}
              title="To edit, choose from list"
              onClick={() => {
                setTabIndex(2);
              }}
              className={`tab tab-lifted ${tabIndex == 2 && "tab-active"
                } font-bold`}
            >
              Edit schedule
            </button>
          </div>
          {tabIndex == 0 && <ScheduleList tabIndex={tabIndex} setRow={setRow} setTabIndex={setTabIndex} />}
          {tabIndex == 1 && <CreateScheduleForm />}
          {tabIndex == 2 && <EditScheduleForm row={row} setTabIndex={setTabIndex} />}
          {tabIndex == 3 && <Calendar />}
        </div>
      </div>
    </TutorLayout>
  )

}