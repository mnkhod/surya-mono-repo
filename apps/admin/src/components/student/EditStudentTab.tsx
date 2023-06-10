import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { alert } from "@/lib/alert";

type Inputs = {
  email: string;
  username: string;
};

export default function EditStudentTab(
  { setTabIndex, row }: { setTabIndex: Function; row: any },
) {
  const [btnLoading, setBtnLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const email = useMemo(
    () => {
      if (!row || !row.rootUser) return "";
      return row.rootUser.email;
    },
    [row],
  );

  const username = useMemo(
    () => {
      if (!row || !row.rootUser) return "";
      return row.rootUser.name;
    },
    [row],
  );

  async function onSubmit(data: Inputs) {
    setBtnLoading(true);
    try {
      alert("success", "Updated student");
      setTabIndex(0);
    } catch (e) {
      console.log(e);
    }

    setBtnLoading(false);
  }

  return (
    <div className="flex justify-start">
      <div className="w-4/12 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Edit Student</h1>
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
              value={email}
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("username")}
              value={username}
            />
          </div>

          <button
            className={`btn text-white w-full btn-secondary`}
            type="submit"
            // TODO add edit handler odko 
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
