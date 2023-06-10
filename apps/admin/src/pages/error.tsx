import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { isEmpty } from "radash";
import Link from "next/link";

export default function error() {
  const router = useRouter();
  const [errorMessage,setErrorMessage] = useState("Unknown Error")
  const [errorCode,setErrorCode] = useState(0)

  useEffect(() => {
    if(!isEmpty(router.query)){
      let code = router.query.code
      if(code){
        let errorCode = parseInt(code.toString())
        setErrorMessage(decryptErrorCode(errorCode))
        setErrorCode(errorCode)
      }
    }
  }, [router.query]);

  return (
    <div className="flex flex-col rounded-none bg-base-200 gap-6 min-h-screen">
      <div className="navbar bg-base-100 py-3 rounded-xl">
        <div className="navbar-start">
          <Link href="/">
            <span className="btn btn-ghost normal-case text-xl">Surya</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-col gap-10 px-32 grow rounded-xl">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-6/12 flex-col lg:flex-row">
            <Icon
              className="w-auto h-32 text-error"
              icon="ic:sharp-report-gmailerrorred"
            />
            <div className="w-6/12">
              <h1 className="text-5xl font-bold">Error {errorCode != 0 && `: ${errorCode}`}</h1>
              <p className="py-6">{errorMessage}</p>
              <Link href="/">
                <button className="btn btn-warning">Go back to home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function decryptErrorCode(errorCode : number){
  switch(errorCode){
    case 1 : 
      return "Role doesn't have access to page"
    case 2 : 
      return "No User Session"
    default : 
      return ""
  }
}
