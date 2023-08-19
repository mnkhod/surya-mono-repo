import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { alert } from "@/lib/alert";

type Inputs = {
  endDate: string;
  tutorId: string;
  durationByMinutes: string;
};

export default function CreateScheduleForm(
) {
  const [btnLoading, setBtnLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
    setBtnLoading(true);
    console.log(data)

    try {
      let resp = await axios.post("/api/lesson/createGroupLesson", {
        tutorId: data.tutorId,
        durationByMinutes: data.durationByMinutes,
        endDate: data.endDate
      });

      if (resp.status == 200) {
        alert("success", "Created lesson group");
        // setTabIndex(0);
      }
    } catch (e) {
      alert("error", "Unsucessful");
    }

    setBtnLoading(false);
  }

  return (
    <div className="flex flex-row justify-center border hover:border-2 p-4">
      <div className="w-full flex flex-col justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-5/12"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Group end date</span>
            </label>
            <input
              placeholder="Type here"
              type="datetime-local"
              className="input input-bordered w-full"
              {...register("endDate")}
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
              defaultValue={60}
              {...register("durationByMinutes")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Tutor ID</span>
            </label>
            <input
              placeholder="Type here"
              type="number"
              className="input input-bordered w-full"
              {...register("tutorId")}
            />
          </div>
          <div className="form-control w-full flex">
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
