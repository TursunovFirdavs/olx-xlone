import { useQuery } from "@tanstack/react-query";
import { request } from "../../api/request";

export const useGetAllProducts = () => {
    return useQuery({
        queryKey: ['category', 'create'],
        queryFn: () => request
            .get(`/all`)
            .then(res => res.data)
    })
}