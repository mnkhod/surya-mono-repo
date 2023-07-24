import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { alert } from "@/lib/alert";

type Inputs = {
  meetingDate: string;
  durationByMinutes: string;
  isPeer: string;
  isDemo: string;
  lessonId: string;
};

export default function CreateScheduleForm(
) {
  const [btnLoading, setBtnLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
    setBtnLoading(true);
    console.log(data)

    try {
      let resp = await axios.post("/api/schedule/createP2PSchedule", {
        meetingDate: data.meetingDate,
        lessonId: data.lessonId,
        isDemo: data.isDemo == "1" ? true : false,
        isPeer: data.isPeer == "1" ? true : false,
        isAvailable: true,
        durationByMinutes: data.durationByMinutes
      });

      if (resp.status == 200) {
        alert("success", "Created tutor");
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-full"
        >
          <div className="form-control w-4/12">
            <label className="label">
              <span className="label-text">Choose lesson</span>
            </label>
            <input
              placeholder="Enter lesson id"
              type="text"
              className="input input-bordered w-full"
              {...register("lessonId")}
            />
          </div>

          <div className="form-control w-4/12">
            <label className="label">
              <span className="label-text">Meeting Date</span>
            </label>
            <input
              placeholder="Type here"
              type="datetime-local"
              className="input input-bordered w-full"
              {...register("meetingDate")}
            />
          </div>
          <div className="form-control w-4/12">
            <label className="label">
              <span className="label-text">Duration by minutes</span>
            </label>
            <input
              placeholder="Type here"
              type="number"
              className="input input-bordered w-full"
              defaultValue={60}
              {...register("durationByMinutes")}
            />
          </div>
          <div className="form-control w-4/12 flex flex-col">
            <span className="label-text">Schedule type</span>
            <div className="form-control w-full">
              <label className="label cursor-pointer">
                <span className="label-text">Demo lesson</span>
                <input
                  type="checkbox"
                  value={1}
                  className="checkbox checked:bg-primary"
                  {...register("isDemo")}
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label cursor-pointer">
                <span className="label-text">Peer lesson</span>
                <input
                  type="checkbox"
                  value={1}
                  className="checkbox checked:bg-primary"
                  {...register("isPeer")}
                />
              </label>
            </div>
          </div>
          <div className="form-control w-5/12 flex">
            <button
              className={`btn text-white w-4/12 btn-primary mt-2`}
              type="submit"
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
        </form>
      </div>
    </div>
  );
}
