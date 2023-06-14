import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { alert } from "@/lib/alert";

type Inputs = {
  email: string;
  name: string;
};

export default function EditAdminTab(
  { setTabIndex, row }: { setTabIndex: Function; row: any },
) {
  const [btnLoading, setBtnLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      email: row.rootUser.email,
      name: row.rootUser.name
    }
  });

  async function onSubmit(data: Inputs) {
    setBtnLoading(true);
    try {
      alert("success", "Created tutor");
      setTabIndex(0);
    } catch (e) {
      console.log(e);
    }

    setBtnLoading(false);
  }

  return (
    <div className="flex justify-start">
      <div className="w-4/12 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Edit Admin</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("email")}
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("name")}
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
            onClick={() => {setTabIndex(0)}}
          >
            Go Back
          </button>
        </form>
      </div>
    </div>
  );
}
