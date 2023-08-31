import React, { useState } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";

import AdminLayout from "@/components/layouts/AdminLayout";
import { PrismaClient } from "@prisma/client";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import ListTab from "@/components/student/ListTab";
import EditStudentTab from "@/components/student/EditStudentTab";
import TutorLayout from "@/components/layouts/TutorLayout";
import StudentRequests from "@/components/tutor/Reschedule/StudentRequests";

export default function Students() {
  const [tabIndex, setTabIndex] = useState(0);
  const [row, setRow] = useState({});

  return (
    <TutorLayout>
      <div className="card w-full shadow-xl">
        <div className="card-body flex gap-6 flex-col justify-between">
          <div className="tabs">
            <button
              onClick={() => {
                setTabIndex(0);
              }}
              className={`tab tab-lifted ${tabIndex == 0 && "tab-active"
                } font-bold`}
            >
              Student requests
            </button>
          </div>

          {tabIndex == 0 && <StudentRequests tabIndex={tabIndex} setRow={setRow} setTabIndex={setTabIndex} />}
        </div>
      </div>
    </TutorLayout>
  );
}