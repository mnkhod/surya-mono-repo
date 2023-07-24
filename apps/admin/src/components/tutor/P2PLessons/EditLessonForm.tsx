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

  const title = useMemo(
    () => {
      if (!row || !row.title) return "";
      return row.title;
    },
    [row],
  );

  const information = useMemo(
    () => {
      if (!row || !row.information) return "";
      return row.information;
    },
    [row],
  );

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title,
      information
    }
  });

  async function onSubmit(data: any) {
    console.log(data)
    setBtnLoading(true);
    try {
      alert("success", "Edited Lesson");
      setTabIndex(0);
    } catch (e) {
      console.log(e);
    }

    setBtnLoading(false);
  }

  return (
    <div className="flex justify-start">
      <div className="w-4/12 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Edit Lesson</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("title")}
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Information</span>
            </label>
            <input
              placeholder="Type here"
              type="text"
              className="input input-bordered w-full"
              {...register("information")}
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
