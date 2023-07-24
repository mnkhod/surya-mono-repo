import AdminLayout from "@/components/layouts/AdminLayout";
import CreateScheduleForm from "@/components/tutor/GroupSchedules/CreateScheduleForm";
import EditScheduleForm from "@/components/tutor/GroupSchedules/EditScheduleForm";
import ScheduleList from "@/components/tutor/GroupSchedules/ScheduleList";
import { useState } from "react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS


export default function GroupLesson() {

  const [tabIndex, setTabIndex] = useState(0);
  const [row, setRow] = useState({});

  return (
    <AdminLayout>
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
              List
            </button>
            <button
              onClick={() => {
                setTabIndex(1);
              }}
              className={`tab tab-lifted ${tabIndex == 1 && "tab-active"
                } font-bold`}
            >
              Create
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
              Edit
            </button>
            <button
              disabled={tabIndex != 2}
              title="To get, choose from list"
              onClick={() => {
                setTabIndex(3);
              }}
              className={`tab tab-lifted ${tabIndex == 3 && "tab-active"
                } font-bold`}
            >
              Lesson detail
            </button>
          </div>

          {tabIndex == 0 && <ScheduleList tabIndex={tabIndex} setRow={setRow} setTabIndex={setTabIndex} />}
          {tabIndex == 1 && <CreateScheduleForm />}
          {tabIndex == 2 && <EditScheduleForm row={row} setTabIndex={setTabIndex} />}

          
        </div>
      </div>
    </AdminLayout>
  )

}