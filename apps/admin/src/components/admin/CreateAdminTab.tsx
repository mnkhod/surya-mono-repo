import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { alert } from "@/lib/alert";

type Inputs = {
  email: string;
  username: string;
  password: string;
};

export default function CreateAdminTab(
  { setTabIndex }: { setTabIndex: Function },
) {
  const [btnLoading, setBtnLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
    setBtnLoading(true);
    try {
      let resp = await axios.post("/api/register/admin", {
        email: data.email,
        username: data.username,
        password: data.password,
      });

      if (resp.status == 200) {
        alert("success", "Created tutor");
        setTabIndex(0);
      }
    } catch (e) {
      console.log(e);
    }

    setBtnLoading(false);
  }

  return (
    <div className="flex justify-start">
      <div className="w-4/12 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Create Tutor</h1>
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
              <span className="label-text">Username</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("username")}
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("password", { required: true })}
            />
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt">
                {errors.password && <span>This field is required</span>}
              </span>
            </label>
          </div>

          <button
            className={`btn text-white w-full btn-primary`}
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
        </form>
      </div>
    </div>
  );
}
