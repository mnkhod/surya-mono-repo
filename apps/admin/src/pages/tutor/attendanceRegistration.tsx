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
import Attendances from "@/components/tutor/Attendance/Attendances";
import RegisterAttendanceRegister from "@/components/tutor/Attendance/RegisterAttendanceRegister";

export default function AttendanceRegistration() {

  const { data: session, status } = useSession()

  const [tabIndex, setTabIndex] = useState(0);
  const [row, setRow] = useState({});

  return (
    <TutorLayout>
      <div className="card w-full shadow-xl">
        <div className="card-body w-full flex gap-6 flex-col justify-between">
          <div className="tabs">
            <button
              onClick={() => {
                setTabIndex(0);
              }}
              className={`tab tab-lifted ${tabIndex == 0 && "tab-active"
                } font-bold`}
            >
              Unregistered
            </button>
            <button
              onClick={() => {
                setTabIndex(1);
              }}
              className={`tab tab-lifted ${tabIndex == 1 && "tab-active"
                } font-bold`}
            >
              Registered
            </button>
            <button
              title="To edit, choose from list"
              onClick={() => {
                setTabIndex(2);
              }}
              className={`tab tab-lifted ${tabIndex == 2 && "tab-active"
                } font-bold`}
            >
              All
            </button>
            <button
              disabled={tabIndex != 3}
              title="To edit, choose from list"
              onClick={() => {
                setTabIndex(3);
              }}
              className={`tab tab-lifted ${tabIndex == 3 && "tab-active"
                } font-bold`}
            >
              Register Attendance State
            </button>
          </div>
          <Attendances tabIndex={tabIndex} setTabIndex={setTabIndex} setRow={setRow} />
          <RegisterAttendanceRegister setTabIndex={setTabIndex} row={row} />
        </div>
      </div>
    </TutorLayout>
  )

}