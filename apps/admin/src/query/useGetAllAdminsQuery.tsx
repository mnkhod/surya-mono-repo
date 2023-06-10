import axios from "axios";
import { useQuery } from "react-query";

export default function useGetAllAdminsQuery() {
  return useQuery(
    {
      queryKey: "allStudents",
      queryFn: () => axios.get("/api/admin/getAll").then((res) => {
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
