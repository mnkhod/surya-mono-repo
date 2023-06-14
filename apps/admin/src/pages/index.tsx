import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";
import { Icon } from "@iconify/react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PrismaClient } from "@prisma/client";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col rounded-none bg-base-200 gap-6 min-h-screen">
      <div className="navbar bg-base-100 py-3 rounded-xl">
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
          <a className="btn btn-ghost normal-case text-xl">Surya</a>
          <div className=" hidden lg:flex">
            <div className="divider divider-horizontal"></div>
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-primary font-bold">Tutors</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end pr-4">
          <button className="btn btn-ghost btn-circle">
            <Icon className="w-auto h-8" icon="ic:sharp-account-circle" />
          </button>
          <div className="divider divider-horizontal"></div>
          <p>Admin</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-32 grow rounded-xl">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body flex justify-between flex-row">
            <div className="form-control">
              <label className="input-group">
                <span className="">
                  <Icon className="w-auto h-6" icon="ic:round-search" />
                </span>
                <input
                  type="text"
                  placeholder="Tutor name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <button className="btn btn-secondary">Add Tutor</button>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body flex justify-between flex-row">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session)
  const prisma = new PrismaClient();

  if (session) {
    if (!session.user) return { props: {} };

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email ?? "",
      },
      include: {
        informationTutor: true,
        informationStudent: true,
        informationAdmin: true,
      }
    });

    if (!user) return { props: {} };

    if (user.isStudent == true) {
      return { redirect: { destination: "/error", permanent: false, } };
    }

    if (user.isAdmin == true) {
      return { redirect: { destination: "/admin/tutors", permanent: false, } };
    }

    if (user.isTutor == true && user.informationTutor?.isApproved ) {
      return { redirect: { destination: "/tutor/dashboard", permanent: false, } };
    } else if (user.isTutor == true && !user.informationTutor?.isApproved) {
      return { redirect: { destination: "/tutor/selfInformation", permanent: false, } };
    }

    return { props: {} };
  }

  return {
    redirect: {
      destination: "/auth/signIn",
      permanent: false,
    },
  };
}
