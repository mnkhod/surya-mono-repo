import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

type Inputs = {
  email: string;
  username: string;
  password: string;
};

export default function signUp() {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<
    Inputs
  >();

  async function onSubmit(data: Inputs) {
    try {
      let result = await axios.post("/api/register/admin",{
        email: data.email,
        username: data.username,
        password: data.password,
      })

      if (result.status == 200) {
        router.push("/auth/signIn");
      }
    } catch (e) {
      console.log(e)
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
                    Sign up
                  </h3>
                </div>
                <div className="mt-4 text-base text-gray-500">
                  <p>Sign up to experience surya admin panel.</p>
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

              <div className="flex flex-col mt-4 lg:space-y-2">
                <button type="submit" className="btn btn-secondary">
                  Sign Up
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/auth/signIn");
                  }}
                  className="link link-hover inline-flex justify-center py-4 font-medium hover:text-neutral-600"
                >
                  Already have an account?
                </button>
              </div>
            </form>
          </div>
          <div className="order-first hidden w-full lg:block">
            <img
              className="object-cover h-full bg-cover rounded-l-lg"
              src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
              alt=""
            />
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
