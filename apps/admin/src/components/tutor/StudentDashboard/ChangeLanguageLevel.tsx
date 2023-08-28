import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { alert } from "@/lib/alert";

type Inputs = {
  email: string;
  username: string;
};

export default function ChangeLanguageLevel({ languageLevels }: { languageLevels: Array<any> }) {
  const [btnLoading, setBtnLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
    setBtnLoading(true);
    try {
      alert("success", "Created tutor");
    } catch (e) {
      console.log(e);
    }

    setBtnLoading(false);
  }

  return (
    <div className="bg-white p-4 shadow rounded w-full md:w-1/2">
      <h2 className="text-lg font-semibold mb-4">Update Language level</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        {languageLevels ? languageLevels.map((language: any) => (
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">{language.languageName}</span>
              <input
                key={language.id}
                type="radio"
                name="teachingLanguages"
                value={language.id}
                className="radio checked:bg-primary"
                onChange={() => true}
                checked={true}
              />
            </label>
          </div>
        )) : <></>}

        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn m-1">Choose level</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>A1</a></li>
            <li><a>A2</a></li>
            <li><a>B1</a></li>
            <li><a>B2</a></li>
            <li><a>C1</a></li>
            <li><a>C2</a></li>
          </ul>
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
      </form>
    </div>
  );
}
