import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";
import { Icon } from "@iconify/react";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { signOut } from "next-auth/react"
import moment from 'moment'
import { PrismaClient } from "@prisma/client";

const localizer = momentLocalizer(moment)

export default function TutorDashboard() {
  return (
    <div className="flex flex-col rounded-none bg-base-200 gap-6 min-h-screen">
      <div className="navbar bg-base-100 py-3 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Calendar</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Surya</a>
          <div className=" hidden lg:flex">
            <div className="divider divider-horizontal"></div>
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-primary font-bold">Calendar</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end pr-4">
          <button className="btn btn-ghost btn-circle">
            <Icon className="w-auto h-7" icon="ic:sharp-account-circle" />
          </button>
          <button className="btn btn-ghost btn-circle" onClick={() => { signOut() }}>
            <Icon className="w-auto h-7" icon="ic:baseline-exit-to-app" />
          </button>
          <div className="divider divider-horizontal"></div>
          <p>Tutor</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-32 grow rounded-xl">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body min-h-[600px] relative">
            <Calendar
              localizer={localizer}
              events={[{ 
                title : "Hello World",
                start: moment().subtract(10, 'days'),
                end: moment(),
                allDay: true,
              }]}
              startAccessor="start"
              endAccessor="end"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const prisma = new PrismaClient();

  if (session) {
    if (!session.user) return { redirect: { destination: "/error?code=2", permanent: false, } };

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email ?? "",
      },
    });

    if (!user) return { props: {} };

    if (user.isTutor == true) {
      return { props: {} };
    }

    return { redirect: { destination: "/error?code=1", permanent: false, } };
  }

  return {
    redirect: {
      destination: "/auth/signIn",
      permanent: false,
    },
  };
}
