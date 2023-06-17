import React, { useState } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType, GetServerSideProps } from "next";
import { getServerSession } from "next-auth/next";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import TutorLayout from "@/components/layouts/TutorLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { alert } from "@/lib/alert";

type Inputs = {
  email: string;
  informationTutor: {
    firstName: string;
    lastName: string;
    nativeLanguage: string;
    profileImageLink: string;
    shortInfo: string;
    videoLink: string;
    teachingLanguages: string;
  }
};

export default function SelfInformation({ userInfo }: any) {

  const [user,] = useState(JSON.parse(userInfo))
  const [btnLoading, setBtnLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({ values: user });

  async function onSubmit(data: Inputs) {
    setBtnLoading(true);
    try {
      let resp = await axios.post("/api/tutor/updateSelfInformation", {
        rootUserId: user.id,
        tutorId: user.informationTutor.id,
        email: data.email,
        firstName: data.informationTutor.firstName,
        lastName: data.informationTutor.lastName,
        nativeLanguage: parseInt(data.informationTutor.nativeLanguage),
        profileImageLink: data.informationTutor.profileImageLink,
        shortInfo: data.informationTutor.shortInfo,
        videoLink: data.informationTutor.videoLink,
        teachingLanguages: parseInt(data.informationTutor.teachingLanguages),
      })


      if (resp.status == 200) {
        alert("success", "Updated Info");
      }
    } catch (e) {
      console.log(e);
    }

    setBtnLoading(false);
  }

  return (
    <TutorLayout>
      <div className="w-8/12 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Edit Tutor</h1>
        <form
          onSubmit={(handleSubmit(onSubmit))}
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
              <span className="label-text">firstName</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("informationTutor.firstName")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">lastName</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("informationTutor.lastName")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">nativeLanguage</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("informationTutor.nativeLanguage")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">profileImageLink</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("informationTutor.profileImageLink")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">shortInfo</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("informationTutor.shortInfo")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">videoLink</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("informationTutor.videoLink")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">teachingLanguages</span>
            </label>
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("informationTutor.teachingLanguages")}
            />
          </div>
          <button
            className={`btn text-white w-full btn-primary`}
            type="submit"
          >
            Edit
          </button>
        </form>
      </div>
    </TutorLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const prisma = new PrismaClient();

  if (session) {
    if (!session.user) {
      return { redirect: { destination: "/error?code=2", permanent: false } };
    }

    let user = await prisma.user.findUnique({
      where: {
        email: session.user?.email ?? "",
      },
      select: {
        id: true,
        email: true,
        isTutor: true,
        name: true,
        informationTutor: true,
      }
    });

    if (!user) return { props: {} };

    if (user.isTutor == true) {
      console.log(user)
      return { props: { userInfo: JSON.stringify(user) } };
    }

    return { redirect: { destination: "/error?code=1", permanent: false } };
  }

  return {
    redirect: {
      destination: "/auth/signIn",
      permanent: false,
    },
  };
}
