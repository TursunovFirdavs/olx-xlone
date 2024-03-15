import { useQuery } from "@tanstack/react-query";
import { request } from "../../api/request";

export const useGetReister = (title) => {
    return useQuery({
        queryKey: ['register'],
        queryFn: () => request
            .get(`/user/${title}`)
    })
}