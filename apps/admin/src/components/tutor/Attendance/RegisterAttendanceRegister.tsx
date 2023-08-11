import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { alert } from "@/lib/alert";

export default function RegisterAttendanceRegister(
  { setTabIndex, row }: { setTabIndex: Function; row: any },
) {
  console.log(row)
  const [btnLoading, setBtnLoading] = useState(false);

  // const meetingDate = useMemo(
  //   () => {
  //     if (!row || !row.meetingDate) return "";
  //     return row.meetingDate;
  //   },
  //   [row],
  // );

  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data: any) {
    console.log(data)
    setBtnLoading(true);
    try {
      alert("success", "Edited Schedule");
      setTabIndex(0);
    } catch (e) {
      console.log(e);
    }

    setBtnLoading(false);
  }

  return (
    <div className="flex justify-start">
      <div className="w-4/12 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Edit Schedule</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <div className="form-control w-1/2">
            <span className="label-text">Teaching Language</span>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Absent</span>
                <input
                  type="radio"
                  defaultChecked
                  name="Absent"
                  value="Absent"
                  className="radio checked:bg-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Teacher Absent</span>
                <input
                  type="radio"
                  name="Absent"
                  value="Absent"
                  className="radio checked:bg-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Student on hold</span>
                <input
                  type="radio"
                  name="Absent"
                  value="Absent"
                  className="radio checked:bg-primary"
                />
              </label>
            </div>
          </div>
          <button
            className={`btn text-white w-full btn-secondary`}
            type="submit"
          >
            {btnLoading
              ? (
                <>
                  <span className="loading loading-spinner"></span>
                  <span>Loading</span>
                </>
              )
              : <span>Update</span>}
          </button>
          <button
            className={`btn text-white w-full btn-warning`}
            onClick={() => { setTabIndex(0) }}
          >
            Go Back
          </button>
        </form>
      </div>
    </div>
  );
}
