import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { alert } from "@/lib/alert";
import { useSession } from "next-auth/react";
import moment from "moment";

type Inputs = {
  isPeer: string;
  isDemo: string;
};

export default function CreateScheduleForm({ start, end, setIsPopupOpen, refetchSchedulesData }: any
) {
  const [btnLoading, setBtnLoading] = useState(false);

  const { data: session, status } = useSession()
  const difference = moment(end).diff(moment(start), "minutes")


  async function onSubmit() {
    setBtnLoading(true);

    try {
      let resp = await axios.post("/api/schedule/createP2PSchedule", {
        meetingDate: start,
        isDemo: true,
        isPeer: true,
        isAvailable: true,
        durationByMinutes: difference,
        tutorId: session?.user?.informationTutor?.id
      });

      if (resp.status == 200) {
        refetchSchedulesData()
        setIsPopupOpen(false)
        // alert("success", "Created tutor");
        // setTabIndex(0);
      }
    } catch (e) {
      console.log(e);
    }

    setBtnLoading(false);
  }

  return (
    <div className="flex flex-row justify-start border hover:border-2 p-4">
      <div className="w-full flex flex-col justify-center">
          <label className="label">
            <span className="label-text">Meeting Date</span>
          </label>
          <label className="label">
            <span className="label-text">To: {new Date(start).toDateString()} {new Date(start).toLocaleTimeString()}</span>
          </label>
          <label className="label">
            <span className="label-text">From: {new Date(end).toDateString()} {new Date(end).toLocaleTimeString()}</span>
          </label>
          <label className="label">
            <span className="label-text">Session duration: {difference} minutes</span>
          </label>
          <div className="form-control w-5/12 flex">
            <button
              className={`btn text-white w-full btn-primary mt-2`}
              type="button"
              onClick={onSubmit}
            >
              {btnLoading
                ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    <span>Loading</span>
                  </>
                )
                : <span>Create</span>}
            </button>
          </div>
      </div>
    </div>
  );
}
