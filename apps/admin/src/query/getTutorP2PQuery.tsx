import axios from "axios";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

export default function useGetAllP2PSchedulesQuery() {

  const { data: session, status } = useSession()
  return useQuery(
    {
      queryKey: "allLanguages",
      queryFn: () => axios.get("/api/schedule/getP2PbyTutor?user").then((res) => {
        // console.log(res.data)
        return res.data
      }),
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    }
  );
}
