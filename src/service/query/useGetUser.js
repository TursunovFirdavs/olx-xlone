import { useQuery } from "@tanstack/react-query";
import { request } from "../../api/request";

export const useGetUser = (id) => {
    return useQuery({
        queryKey: [id],
        queryFn: () => request
            .get(`/users/${id}`)
            .then(res => res.data)
    })
}