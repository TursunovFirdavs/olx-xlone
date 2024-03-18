import { useQuery } from "@tanstack/react-query";
import { request } from "../../api/request";

export const useGetCategory = (title) => {
    return useQuery({
        queryKey: ['category', 'create', title],
        queryFn: () => request
            .get(`/${title}`)
            .then(res => res.data)
    })
}