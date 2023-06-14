import axios from "axios";
import { useQuery } from "react-query";

export default function useGetCurrentUserInformationQuery(email: String | null | undefined) {
  console.log("email", email)
  return useQuery(
    {
      queryKey: "findUser",
      queryFn: () => axios.post("/api/user/getUser", {email: email}).then((res) => {
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