import TutorLayout from "@/components/layouts/TutorLayout";
import CreateLessonForm from "@/components/tutor/P2PLessons/CreateLessonForm";
import EditLessonForm from "@/components/tutor/P2PLessons/EditLessonForm";
import LessonList from "@/components/tutor/P2PLessons/LessonList";
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
              List of classes
            </button>
            <button
              onClick={() => {
                setTabIndex(1);
              }}
              className={`tab tab-lifted ${tabIndex == 1 && "tab-active"
                } font-bold`}
            >
              Create class
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
              Edit class
            </button>
          </div>
          {tabIndex == 0 && <LessonList tabIndex={tabIndex} setRow={setRow} setTabIndex={setTabIndex} />}
          {tabIndex == 1 && <CreateLessonForm />}
          {tabIndex == 2 && <EditLessonForm row={row} setTabIndex={setTabIndex} />}
        </div>
      </div>
    </TutorLayout>
  )

}