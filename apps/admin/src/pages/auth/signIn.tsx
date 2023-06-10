import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import SignInBG from '@images/signInBg.png'
import Image from 'next/image';

type Inputs = {
  email: string;
  password: string;
};

export default function signInPage() {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<
    Inputs
  >();

  async function onSubmit(data: Inputs) {
    let response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.status == 200) {
      router.push("/");
    }
  }

  return (
    <div className="px-4 flex items-center justify-center h-screen">
      <div className="max-w-6xl transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-1xl sm:w-full">
        <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
          <div className="w-full px-6 py-3">
            <div>
              <div className="mt-3 text-left sm:mt-5">
                <div className="inline-flex items-center w-full">
                  <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                    Sign in
                  </h3>
                </div>
                <div className="mt-4 text-base text-gray-500">
                  <p>SURYA is an online English tutoring application that provides high-quality, affordable English lessons to students of all ages and levels.</p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 mt-5"
            >
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  {...register("email")}
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
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

              <div className="flex flex-col mt-4 lg:space-y-2">
                <button type="submit" className="btn btn-secondary">
                  Sign In
                </button>
                <span
                  className="inline-flex justify-center text-gray-500 text-xs text-center py-4 font-medium hover:text-neutral-600"
                >Our vision is to make English learning accessible and affordable to everyone.</span>
              </div>
            </form>
          </div>
          <div className="order-first hidden w-full lg:block">
            <Image src={SignInBG} alt="signInImage" className="object-cover h-full bg-cover rounded-l-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
