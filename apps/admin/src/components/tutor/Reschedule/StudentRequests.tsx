import useGetAllP2PSchedulesQuery from "@/query/useGetAllP2PSchedulesQuery";
import { Icon } from "@iconify/react";
import axios from "axios";
import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";

import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import { ColDef, GridOptions } from "ag-grid-community";
import Link from "next/link";

import { alert } from "@/lib/alert";
import useGetAllStudentRescheduleRequests from "@/query/useGetAllStudentRescheduleRequests";
import { useQuery } from "react-query";
import { useSession } from "next-auth/react";
import moment from "moment";

export default function ScheduleList({ tabIndex, setRow, setTabIndex }: {
  tabIndex: number;
  setRow: Function;
  setTabIndex: Function;
},) {

  const { data: session, status } = useSession()
  const table = useRef(null);
  const [quickFilterInput, setQuickFilterInput] = useState("");

  const { data: schedules, isSuccess, refetch: refetchSchedulesData, isLoading } =
    useGetAllStudentRescheduleRequests(session?.user?.informationTutor?.id)

  if (isLoading) return (
    <>Loading</>
  )

  function handleQuickFilter(e: FormEvent<HTMLInputElement>) {
    if (!table || !table.current) return;

    let grid: GridOptions = table.current;
    let val = e.currentTarget.value;

    setQuickFilterInput(val);
    grid.api?.setQuickFilter(val);
  }

  function handleCSVExport() {
    if (!table || !table.current) return;

    let grid: GridOptions = table.current;
    grid.api?.exportDataAsCsv({ fileName: "All P2P Schedules Data" });
  }

  async function handleEditButton(params: any, isApprove: boolean) {

    try {
      let resp = await axios.post("/api/reschedule/registerResponse", {
        isApprove,
        requestId: params.data.id,
        scheduleId: params.data.schedule.id,
        studentId: params.data.schedule.studentId
      });

      if (resp.status == 200) {
        alert("success", "Updated");
        console.log(resp)
        refetchSchedulesData(session?.user?.informationTutor?.id)
      }
    } catch (e) {
      alert("error", "Unsucessful, please try again");
    }
  }

  console.log(schedules)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-between">
        <div className="form-control flex flex-row items-center gap-2">
          <label className="input-group">
            <span className="hidden md:flex bg-base-200">
              <Icon className="w-auto h-6" icon="ic:round-search" />
            </span>
            <input
              value={quickFilterInput}
              type="text"
              placeholder="Full search"
              className="input w-full md:w-auto input-bordered"
              onChange={handleQuickFilter}
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          {isSuccess && (
            <>
              <button
                onClick={handleCSVExport}
                className="btn btn-accent"
              >
                Export as CVS
              </button>
            </>
          )}
        </div>
      </div>

      {isSuccess && (
        <div className="ag-theme-material font-roboto w-full">
          <AgGridReact
            ref={table}
            pagination={true}
            paginationPageSize={10}
            rowData={schedules}
            defaultColDef={{ resizable: true }}
            rowClass={"text-2xs"}
            columnDefs={[
              {
                field: "id",
                lockPosition: "left",
                filter: "number",
                width: 120,
                headerName: "id",
              },
              { field: "reasonText", headerName: "Reason", suppressSizeToFit: true },
              { field: "explanationText", headerName: "Explanation" },
              {
                field: "createdAt",
                headerName: "Date",
                cellRenderer: (params: any) => {
                  return (
                    <>{moment(new Date(params.value)).format('MMMM Do, h:mm:ss a')}</>
                  )
                }
              },
              {
                field: "schedule.meetingDate", headerName: "Meeting date",
                cellRenderer: (params: any) => {
                  return (
                    <>{moment(new Date(params.value)).format('MMMM Do, h:mm:ss a')}</>
                  )
                }
              },
              {
                field: "isPending", headerName: "State",
                sort: 'desc',
                cellRenderer: (params: any) => {
                  return (
                    <>{params.value ? "Pending" : "Resolved"}</>
                  )
                }
              },
              {
                field: "actions",
                headerName: "Actions",
                width: 250,
                cellRenderer: (params: any) => {
                  if (!params.data.isPending) {
                    return <></>
                  }
                  return (
                    <div className="relative z-20 h-full flex items-center gap-2 justify-start">
                      <button
                        className="btn btn-outline btn-secondary rounded-full btn-sm"
                        onClick={() => {
                          handleEditButton(params, true);
                        }}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-outline btn-error rounded-full btn-sm"
                        onClick={() => {
                          handleEditButton(params, false);
                        }}
                      >
                        Disapprove
                      </button>
                    </div>
                  );
                },
              },
            ]}
            domLayout="autoHeight"
          />
        </div>
      )}
    </div>
  );
}
