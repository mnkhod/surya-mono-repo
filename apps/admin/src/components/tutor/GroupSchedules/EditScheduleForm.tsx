import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { alert } from "@/lib/alert";

// type Inputs = {
//   email: string;
//   username: string;
// };

export default function EditScheduleForm(
  { setTabIndex, row }: { setTabIndex: Function; row: any },
) {
  console.log(row)
  const [btnLoading, setBtnLoading] = useState(false);

  const meetingDate = useMemo(
    () => {
      if (!row || !row.meetingDate) return "";
      return row.meetingDate;
    },
    [row],
  );

  const duration = useMemo(
    () => {
      if (!row || !row.durationByMinutes) return "";
      return row.durationByMinutes;
    },
    [row],
  );

  const isDemo = useMemo(
    () => {
      if (!row) return "";
      return row.isDemo;
    },
    [row],
  );

  const isPeer = useMemo(
    () => {
      if (!row) return "";
      return row.isPeer;
    },
    [row],
  );
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      meetingDate,
      durationByMinutes: duration,
      isDemo,
      isPeer
    }
  });

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
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Date and Time</span>
            </label>
            <input
              type="datetime-local"
              className="input input-bordered w-full"
              {...register("meetingDate")}
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Duration by minutes</span>
            </label>
            <input
              placeholder="Type here"
              type="number"
              className="input input-bordered w-full"
              {...register("durationByMinutes")}
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Is peer</span>
            </label>
            <input
              placeholder="Type here"
              type="checkbox"
              className="checkbox checked:bg-primary"
              {...register("isPeer")}
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Is demo</span>
            </label>
            <input
              placeholder="Type here"
              type="checkbox"
              className="checkbox checked:bg-primary"
              {...register("isDemo")}
            />
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
