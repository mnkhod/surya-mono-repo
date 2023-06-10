import React, { useState } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";

import AdminLayout from "@/components/layouts/AdminLayout";
import { PrismaClient } from "@prisma/client";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS
import ListTab from "@/components/tutor/ListTab";
import CreateTutorTab from "@/components/tutor/CreateTutorTab";
import EditTutorTab from "@/components/tutor/EditTutorTab";

export default function Tutors() {
  const [tabIndex, setTabIndex] = useState(0);
  const [row, setRow] = useState({});

  return (
    <AdminLayout>
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
              onClick={() => {
                setTabIndex(2);
              }}
              className={`tab tab-lifted ${tabIndex == 2 && "tab-active"
                } font-bold`}
            >
              Edit
            </button>
          </div>

          {tabIndex == 0 && <ListTab tabIndex={tabIndex} setRow={setRow} setTabIndex={setTabIndex} />}
          {tabIndex == 1 && <CreateTutorTab setTabIndex={setTabIndex} />}
          {tabIndex == 2 && <EditTutorTab row={row} setTabIndex={setTabIndex} />}
        </div>
      </div>
    </AdminLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const prisma = new PrismaClient();

  if (session) {
    if (!session.user) {
      return { redirect: { destination: "/error?code=2", permanent: false } };
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email ?? "",
      },
    });

    if (!user) return { props: {} };

    if (user.isAdmin == true) {
      return { props: {} };
    }

    return { redirect: { destination: "/error?code=1", permanent: false } };
  }

  return {
    redirect: {
      destination: "/auth/signIn",
      permanent: false,
    },
  };
}
