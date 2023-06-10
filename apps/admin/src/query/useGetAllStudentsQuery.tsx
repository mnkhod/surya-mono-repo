import axios from "axios";
import { useQuery } from "react-query";

export default function useGetAllStudentsQuery() {
  return useQuery(
    {
      queryKey: "allStudents",
      queryFn: () => axios.get("/api/students/getAll").then((res) => {
        console.log(res.data)
        return res.data
      }),
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    }
  );
}
