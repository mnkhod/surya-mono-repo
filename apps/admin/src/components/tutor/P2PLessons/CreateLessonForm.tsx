import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { alert } from "@/lib/alert";

type Inputs = {
  title: String;
  information: String;
};

export default function CreateScheduleForm(
) {
  const [btnLoading, setBtnLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
    setBtnLoading(true);
    console.log(data)

    try {
      let resp = await axios.post("/api/lesson/createP2PLesson", {
        title: data.title,
        information: data.information,
        tutorId: 41
      });

      if (resp.status == 200) {
        alert("success", "Created Lesson");
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
              <span className="label-text">title</span>
            </label>
            <input
              placeholder="Type here"
              type="text"
              className="input input-bordered w-full"
              {...register("title")}
            />
          </div>
          <div className="form-control w-4/12">
            <label className="label">
              <span className="label-text">Information</span>
            </label>
            <textarea
              placeholder="Type here"
              className="textarea textarea-bordered w-full"
              {...register("information")}
            />
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
