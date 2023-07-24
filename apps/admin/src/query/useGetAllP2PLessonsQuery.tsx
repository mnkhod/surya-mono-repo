import axios from "axios";
import { useQuery } from "react-query";

export default function useGetAllP2PLessonsQuery() {
  return useQuery(
    {
      queryKey: "allLanguages",
      queryFn: () => axios.get("/api/lesson/getAllP2PLessons").then((res) => {
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
