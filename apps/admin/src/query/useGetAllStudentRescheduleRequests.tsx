
import axios from "axios";
import { useQuery } from "react-query";

export default function useGetAllStudentRescheduleRequests(tutorId: number) {

  return useQuery(
    {
      queryKey: "allStudentRescheduleRequest",
      queryFn: () => axios.get(`/api/reschedule/allStudentRescheduleRequest?tutorId=${tutorId}`).then((res) => {
        return res.data
      }),
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      enabled: !!tutorId
    }
  );
}
