import useGetAllStudentsQuery from "@/query/useGetAllStudentsQuery";
import { Icon } from "@iconify/react";
import axios from "axios";
import React, { FormEvent, useEffect, useRef, useState } from "react";

import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import { ColDef, GridOptions } from "ag-grid-community";
import Link from "next/link";

import { alert } from "@/lib/alert";

export default function ListTab(
  { tabIndex, setRow, setTabIndex }: {
    tabIndex: number;
    setRow: Function;
    setTabIndex: Function;
  },
) {
  const table = useRef(null);
  const [quickFilterInput, setQuickFilterInput] = useState("");

  useEffect(() => {
    if (tabIndex == 0) {
      refetchStudentData();
    }
  }, [tabIndex]);

  const { data: tutors, isSuccess, refetch: refetchStudentData } =
    useGetAllStudentsQuery();

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
    grid.api?.exportDataAsCsv({ fileName: "All Students Data" });
  }

  function handleEditButton(params: any) {
    console.log(params)
    setRow(params.data);
    setTabIndex(1);
  }

  async function handleItemRemove(params: any) {
    if (!params) return;

    try {
      const result = await axios.post("/api/students/removeStudent", {
        id: params.data.rootUser.id,
      });

      if (result.status == 200) {
        await refetchStudentData();
        alert("success", "Deleted tutor");
      }
    } catch (e) {
      console.log(e);
    }
  }

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
          <Link href="/admin/addTutor">
            <button className="btn btn-secondary w-full">
              <Icon className="w-auto h-6" icon="ic:round-plus" />
            </button>
          </Link>
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
            rowData={tutors}
            rowClass={"text-2xs"}
            columnDefs={[
              {
                field: "id",
                lockPosition: "left",
                filter: "number",
                width: 120,
                headerName: "",
              },
              { field: "rootUser.email", headerName: "Email" },
              { field: "firstName" },
              { field: "lastName" },
              { field: "shortInfo", flex: 2 },
              { field: "learningLanguages", flex: 2 },
              {
                field: "actions",
                lockPosition: "right",
                headerName: "",
                filter: false,
                sortable: false,
                cellRenderer: (params: any) => {
                  return (
                    <div className="relative z-20 h-full flex items-center gap-2 justify-end">
                      <button
                        className="btn btn-outline btn-secondary rounded-full btn-sm"
                        onClick={() => {
                          handleEditButton(params);
                        }}
                      >
                        <Icon
                          className="w-auto h-4"
                          icon="ic:round-mode-edit"
                        />
                      </button>
                      <button
                        className="btn btn-outline btn-accent rounded-full btn-sm"
                        onClick={() => {
                          handleItemRemove(params);
                        }}
                      >
                        <Icon className="w-auto h-4" icon="ic:round-minus" />
                      </button>
                    </div>
                  );
                },
              },
            ]}
            animateRows={true}
            enableCellTextSelection={true}
            isRowSelectable={() => false}
            suppressRowClickSelection={true}
            suppressCellFocus={true}
            suppressMenuHide={true}
            onCellClicked={() => { }}
            domLayout="autoHeight"
            defaultColDef={{
              sortable: true,
              filter: true,
              floatingFilter: true,
            } as ColDef}
          />
        </div>
      )}
    </div>
  );
}
