import { useQuery } from "@tanstack/react-query";
import { request } from "../../api/request";

export const useGetSingleProduct = (id, category) => {
    return useQuery({
        queryKey: ['single', id, category],
        queryFn: () => request 
            .get(`/${category}/${id}`)
            .then(res => res.data)
    })
}