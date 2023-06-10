import axios from "axios";
import { useQuery } from "react-query";

export default function useGetAllTutorsQuery() {
  return useQuery(
    {
      queryKey: "allTutors",
      queryFn: () => axios.get("/api/tutor/getAll").then((res) => {
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