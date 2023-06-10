import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import { SweetAlertIcon, SweetAlertPosition } from "sweetalert2";
import AlertLayout from "@/components/layouts/AlertLayout";

type AlertType = "success" | "error" | "info";

export function alert(alertStyle: AlertType, content: string) {
  switch (alertStyle) {
    case "success":
      alertSuccess(content);
      break;
    case "error":
      alertError(content);
      break;
    case "info":
      alertInfo(content);
      break;
    default:
      alertInfo(content);
      break;
  }
}

function alertSuccess(text: string) {
  let options = getAlertDefaultOptions();
  options.customClass.popup += "border-secondary";
  let element = ReactDOMServer.renderToString(
    <AlertLayout>
      <div className="flex flex-col gap-2 items-center bg-green-500 w-full py-8 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-28" viewBox="0 0 24 24"><path fill="currentColor" d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5l8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"></path></svg>
        <h2 className="text-gray-100 font-extralight">Success</h2>
      </div>
      <div className="w-full text-gray-400 font-bold text-lg py-6">{text}</div>
    </AlertLayout>
  );

  options.html = element;
  Swal.fire(options);
}
function alertError(text: string) {
  let options = getAlertDefaultOptions();
  options.customClass.popup += "border-red-700";
  let element = ReactDOMServer.renderToString(
    <AlertLayout>
      <div className="flex flex-col gap-2 items-center bg-red-500 w-full py-8 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-28" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"></path></svg>
        <h2 className="text-gray-100 font-extralight">Error</h2>
      </div>
      <div className="w-full text-gray-400 font-bold text-lg py-6">{text}</div>
    </AlertLayout>
  );

  options.html = element;
  Swal.fire(options);
}

function alertInfo(text: string) {
  let options = getAlertDefaultOptions();
  options.customClass.popup += "border-primary";
  let element = ReactDOMServer.renderToString(
    <AlertLayout>
      <div className="w-full text-primary">{text}</div>
    </AlertLayout>
  );

  options.html = element;
  Swal.fire(options);
}

function getAlertDefaultOptions() {
  return {
    icon: "success" as SweetAlertIcon,
    position: "middle" as SweetAlertPosition,
    showConfirmButton: false,
    timer: 3000,
    customClass: {
      popup:
        "!flex !items-center !shadow-xl !bg-white !w-3/12 !border-0 !rounded-xl !border-solid !py-0 !m-0 !px-0 !mb-0" +
        " ",
      icon: "!hidden",
      title: "!hidden",
      closeButton: "!hidden",
      htmlContainer: "!w-full !py-0 !m-0 ",
    },
    html: "",
  };
}

