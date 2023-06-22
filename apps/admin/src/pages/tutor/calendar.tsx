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
import TutorLayout from "@/components/layouts/TutorLayout";


const localizer = momentLocalizer(moment)

export default function TutorDashboard() {
  return (
    <TutorLayout>
      <div className="flex flex-col rounded-none bg-base-200 gap-6 min-h-screen">
        <div className="flex flex-col gap-10 px-32 grow rounded-xl">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body min-h-[600px] relative">
              <Calendar
                localizer={localizer}
                events={[{
                  title: "Hello World",
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
    </TutorLayout>
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
