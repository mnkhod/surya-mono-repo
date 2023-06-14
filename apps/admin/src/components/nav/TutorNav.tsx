import { signOut } from "next-auth/react";
import { Icon } from "@iconify/react";
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

export default function TutorNav() {
  const router = useRouter();
  const pagePath = useMemo(
    () => {
      if (!router) return ""
      return router.pathname.split('/').at(2)
    },
    [router]
  );

  return (
    <div className="pt-12 w-11/12">
      <div className="navbar shadow-lg px-4 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Tutors</a>
              </li>
            </ul>
          </div>
          <Link href="/admin/dashboard">
            <span className="btn btn-ghost normal-case text-xl">Surya</span>
          </Link>
          <div className=" hidden lg:flex">
            <div className="divider divider-horizontal"></div>
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/tutor/dashboard">
                  <span className={configureActivePage("dashboard")}>Calendar</span>
                </Link>
              </li>
              <li>
                <Link href="/tutor/selfInformation">
                  <span className={configureActivePage("selfInformation")}>Self Information</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end pr-4">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
              signOut();
            }}
          >
            <Icon className="w-auto h-7" icon="ic:baseline-exit-to-app" />
          </button>
          <div className="divider divider-horizontal"></div>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );

  function configureActivePage(value: string): string {
    if (pagePath === value) return "text-primary font-bold"

    return ""
  }
}
