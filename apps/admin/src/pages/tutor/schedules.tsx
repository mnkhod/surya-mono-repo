import TutorLayout from "@/components/layouts/TutorLayout";
import CreateScheduleForm from "@/components/tutor/P2PSchedules/CreateScheduleForm";
import EditScheduleForm from "@/components/tutor/P2PSchedules/EditScheduleForm";
import ScheduleList from "@/components/tutor/P2PSchedules/ScheduleList";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import { useState } from "react";

export default function Schedules() {

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

        </div>
      </div>
    </TutorLayout>
  )

}