import axios from "axios";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

export default function useTutorP2PSchedulesQuery(tutorId: number) {

  return useQuery(
    {
      queryKey: "allLanguages",
      queryFn: () => axios.get(`/api/schedule/getP2PSchedulesbyTutor?user=${tutorId}`).then((res) => {
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
