import React, { useEffect, useRef } from "react";
import TUICalendar from "@toast-ui/react-calendar";

export default (props: any) => {

  return (
    <TUICalendar height="900px"
      usageStatistics={false}
      isReadOnly={false}
      eventFilter={e => console.log(e)}
      {...props}
      ref={props.forwardedRef} />
  )
};