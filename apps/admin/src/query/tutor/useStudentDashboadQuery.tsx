import axios from "axios";
import { useQuery } from "react-query";

export default function useStudentDashboadQuery(studentId: any, tutorId: number) {

  return useQuery(
    {
      queryKey: "tutorDashboardGetStudent",
      queryFn: () => axios.get(`/api/students/tutorDashboardGetStudent?studentId=${parseInt(studentId)}&tutorId=${tutorId}`).then((res) => {
        // console.log(res.data)
        return res.data
      }),
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      enabled: !!studentId && !!tutorId
    }
  );
}
